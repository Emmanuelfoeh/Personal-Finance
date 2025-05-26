<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import type { Transaction } from "@/types/transactions";
import { computed } from "vue";
import AvatarIcon from "./AvatarIcon.vue";

const props = defineProps<{
  transactions: Transaction[];
  isLoading: boolean;
}>();

const formattedTransactions = computed(() => {
  return props.transactions.map(transaction => ({
    ...transaction,
    formattedAmount:
      (transaction.amount > 0 ? "+" : "-") + "$" + Math.abs(transaction.amount).toFixed(2)
  }));
});


</script>

<template>
  <DataTable
    :value="formattedTransactions"
    :loading="isLoading"
    :rowHover="true"
    responsiveLayout="scroll"
  >
    <Column field="name" header="Recipient / Sender">
      <template #body="{ data }">
        <div class="flex items-center">
          <AvatarIcon :name="data.name" :category="data.category" :icon="data.icon" />
          <div class="ml-3 truncate">
            <p class="text-sm font-medium truncate">{{ data.name }}</p>
          </div>
        </div>
      </template>
    </Column>

    <Column field="category" header="Category">
      <template #body="{ data }">
        <span class="text-sm">{{ data.category }}</span>
      </template>
    </Column>

    <Column field="date" header="Transaction Date">
      <template #body="{ data }">
        <span class="text-sm">{{ data.date }}</span>
      </template>
    </Column>

    <Column field="formattedAmount" header="Amount" alignHeader="right">
      <template #body="{ data }">
        <span
          :class="[
            data.amount > 0 ? 'text-success-600' : 'text-danger-600',
            'text-sm font-medium'
          ]"
        >
          {{ data.formattedAmount }}
        </span>
      </template>
    </Column>
  </DataTable>
</template>

<style scoped></style>
