<script setup lang="ts">
// import BudgetDashboard from "@/components/overview/BudgetDashboard.vue";
import DashboardCard from "@/components/overview/DashboardCard.vue";
import OverViewBudgets from "@/components/overview/OverViewBudgets.vue";
import OverviewPots from "@/components/overview/OverviewPots.vue";
import OverviewTransactions from "@/components/overview/OverviewTransactions.vue";
import OverviewRecurringBills from "@/components/overview/OverviewRecurringBills.vue";
</script>

<template>
  <main class="w-full overflow-x-hidden">
    <div class="flex flex-col w-full md:w-[97%] text-gray-900 gap-8 py-8 px-3 md:px-5">
      <h1 class="text-2xl text-gray-900 !font-bold">Overview</h1>
      <div class="w-full grid md:grid-cols-3 px-2 md:p-0 gap-6">
        <DashboardCard title="Current Balance" content="$3,400,395" />
        <DashboardCard title="Income" content="$65,400,395" />
        <DashboardCard title="Expenses" content="$400,395" />
      </div>
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Pots and Transactions -->
        <div class="flex flex-col gap-6 lg:w-[60%]">
          <OverviewPots />

          <!-- Transactions -->
          <OverviewTransactions />
        </div>

        <!-- Budgets and Recurring Bill -->
        <div class="flex flex-col gap-6 grow">
          <OverViewBudgets />
          <!-- Resurring Bills -->
          <OverviewRecurringBills />
        </div>
      </div>
    </div>
  </main>
</template>
