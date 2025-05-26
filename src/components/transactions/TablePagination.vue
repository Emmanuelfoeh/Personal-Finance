<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: "change", page: number): void;
}>();

const pages = computed(() => {
  const result = [];
  const maxVisiblePages = 5;

  if (props.totalPages <= maxVisiblePages) {
    // Show all pages if total is small
    for (let i = 1; i <= props.totalPages; i++) {
      result.push(i);
    }
  } else {
    // Always show first page
    result.push(1);

    // Calculate start and end of visible range
    let start = Math.max(2, props.currentPage - 1);
    let end = Math.min(props.totalPages - 1, props.currentPage + 1);

    // Adjust range for edge cases
    if (props.currentPage <= 2) {
      end = 4;
    } else if (props.currentPage >= props.totalPages - 1) {
      start = props.totalPages - 3;
    }

    // Add ellipsis if needed
    if (start > 2) {
      result.push("...");
    }

    // Add page numbers
    for (let i = start; i <= end; i++) {
      result.push(i);
    }

    // Add ellipsis if needed
    if (end < props.totalPages - 1) {
      result.push("...");
    }

    // Always show last page
    result.push(props.totalPages);
  }

  return result;
});

const changePage = (page: number | string) => {
  if (typeof page === "number") {
    emit("change", page);
  }
};

const goToPrevPage = () => {
  if (props.currentPage > 1) {
    emit("change", props.currentPage - 1);
  }
};

const goToNextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit("change", props.currentPage + 1);
  }
};
</script>


<template>
  <nav class="flex items-center justify-between py-3" aria-label="Pagination">
    <!-- Previous button -->
    <button
      @click="goToPrevPage"
      :disabled="currentPage === 1"
      class="pagination-btn"
      :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
    >
      <span class="sr-only">Previous</span>
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="ml-1">Prev</span>
    </button>

    <!-- Page numbers -->
    <div class="hidden sm:flex gap-2">
      <button
        v-for="page in pages"
        :key="page"
        @click="changePage(page)"
        :disabled="page === '...'"
        class="pagination-btn w-10 h-10 justify-center !px-0 !py-0"
        :class="{
          'pagination-active': page === currentPage,
          'cursor-default': page === '...'
        }"
      >
        {{ page }}
      </button>
    </div>

    <!-- Current page indicator (mobile) -->
    <div class="sm:hidden text-sm text-neutral-700">
      Page {{ currentPage }} of {{ totalPages }}
    </div>

    <!-- Next button -->
    <button
      @click="goToNextPage"
      :disabled="currentPage === totalPages"
      class="pagination-btn"
      :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
    >
      <span class="mr-1">Next</span>
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </nav>
</template>
