<script setup lang="ts">
import TablePagination from "@/components/transactions/TablePagination.vue";
import TransactionList from "@/components/transactions/TransactionList.vue";
import DropdownFilter from "../components/transactions/DropdownFilter.vue";
import { getTransactions, type SortOption, type Transaction } from "@/types/transactions";
import { computed, onMounted, ref } from "vue";
import SearchBar from "@/components/transactions/SearchBar.vue";
import Select from "primevue/select";
const isLoading = ref(false);
const searchQuery = ref("");
const debouncedSearchQuery = useDebounce(searchQuery, 300);
const selectedCategory = ref<string>("All Transactions");
const selectedSort = ref<SortOption>("Latest");
const currentPage = ref(1);
const totalPages = ref(5);
const transactions = ref<Transaction[]>([]);

const handleSearch = (query: string) => {
  searchQuery.value = query;
  currentPage.value = 1;
};

const handlePageChange = (page: number) => {
  currentPage.value = page;
};
// Computed values
const filteredTransactions = computed(() => {
  let filtered = [...transactions.value];

  // Filter by search query
  if (debouncedSearchQuery.value) {
    const query = debouncedSearchQuery.value.toLowerCase();
    filtered = filtered.filter(
      transaction =>
        transaction.name.toLowerCase().includes(query) ||
        transaction.category.toLowerCase().includes(query)
    );
  }

  // Filter by category
  if (selectedCategory.value !== "All Transactions") {
    filtered = filtered.filter(
      transaction => transaction.category === selectedCategory.value
    );
  }

  // Sort transactions
  if (selectedSort.value === "Latest") {
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (selectedSort.value === "Oldest") {
    filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  } else if (selectedSort.value === "Highest") {
    filtered.sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount));
  } else if (selectedSort.value === "Lowest") {
    filtered.sort((a, b) => Math.abs(a.amount) - Math.abs(b.amount));
  }

  return filtered;
});

onMounted(async () => {
  isLoading.value = true;
  try {
    transactions.value = await getTransactions();
  } catch (error) {
    console.error("Failed to load transactions:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <main class="w-full overflow-x-hidden">
    <div class="flex flex-col w-full md:w-[97%] text-gray-900 gap-8 py-8">
      <h1 class="text-2xl text-gray-900 !font-bold">Transactions</h1>
      <div class="card">
        <div
          class="!mb-8 flex flex-col md:flex-row justify-between items-start md:items-center"
        >
          <SearchBar
            :value="searchQuery"
            @search="handleSearch"
            placeholder="Search transaction"
          />

          <div class="flex items-center gap-2 md:gap-8 w-full md:w-auto">
            <div class="flex gap-3 items-center">
              <span class="text-neutral-500 text-sm whitespace-nowrap">Sort by</span>
              <Select
                :options="['Latest', 'Oldest', 'Highest', 'Lowest']"
                v-model="selectedSort"
                class="p-1"
              />
            </div>

            <div class="flex gap-3 items-center">
              <span class="text-neutral-500 text-sm ml-2 whitespace-nowrap"
                >Category</span
              >
              <Select
                :options="[
                  'All Transactions',
                  'General',
                  'Dining Out',
                  'Groceries',
                  'Entertainment'
                ]"
                v-model="selectedCategory"
                class="w-40 md:w-56 p-1"
              />
            </div>
          </div>
        </div>
        <TransactionList :transactions="filteredTransactions" :is-loading="isLoading" />
        <div class="mt-6">
          <TablePagination
            :current-page="currentPage"
            :total-pages="totalPages"
            @change="handlePageChange"
          />
        </div>
      </div>
    </div>
  </main>
</template>
