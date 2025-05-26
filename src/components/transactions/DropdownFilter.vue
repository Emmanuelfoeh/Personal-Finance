<script setup lang="ts">
import { ref, defineProps, defineEmits, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  options: string[];
  selected: string;
}>();

const emit = defineEmits<{
  (e: 'change', option: string): void;
}>();

const isOpen = ref(false);
const dropdownRef = ref<HTMLDivElement | null>(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: string) => {
  emit('change', option);
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div ref="dropdownRef" class="relative">
    <button
      @click="toggleDropdown"
      type="button"
      class="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
    >
      {{ selected }}
      <svg
        class="w-5 h-5 ml-2 -mr-1 text-neutral-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        :class="{ 'transform rotate-180': isOpen }"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1 max-h-60 overflow-auto">
          <button
            v-for="option in options"
            :key="option"
            @click="selectOption(option)"
            class="text-left block w-full px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
            :class="{ 'bg-primary-50 text-primary-700': selected === option }"
          >
            {{ option }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>