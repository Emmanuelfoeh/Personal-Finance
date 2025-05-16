<template>
  <div class="card">
    <section class="flex items-center justify-between">
      <h4 class="!font-bold text-2xl">Budgets</h4>
      <router-link to="/budgets">
        See Details <span class="!ml-2"> <i class="pi pi-caret-right"></i></span>
      </router-link>
    </section>
    <section
      class="!mt-8 gap-4 md:gap-0 flex flex-col md:flex-row items-center justify-between gap-x-4"
    >
      <div class="flex justify-center w-[70%]">
        <DoughnutChart />
        <!-- <BudgetDashboard /> -->
      </div>

      <ul class="grid grid-cols-2 w-full md:grid-cols-1 gap-3 md:w-[30%]">
        <li class="flex items-center">
          <div class="bg-pf-army-green w-1 md:w-2.5 h-10 rounded-2xl"></div>
          <div class="flex flex-col gap-y-1 !ms-4">
            <p class="text-sm">Entertainment</p>
            <p class="!font-bold text-lg">$50.00</p>
          </div>
        </li>
        <li class="flex items-center">
          <div class="bg-pf-cyan w-1 md:w-2.5 h-10 rounded-2xl"></div>
          <div class="flex flex-col gap-y-1 !ms-4">
            <p class="text-sm">Bills</p>
            <p class="!font-bold text-lg">$720</p>
          </div>
        </li>
        <li class="flex items-center">
          <div class="bg-pf-navy w-1 md:w-2.5 h-10 rounded-2xl"></div>
          <div class="flex flex-col gap-y-1 !ms-4">
            <p class="text-sm">Dining Out</p>
            <p class="!font-bold text-lg">$75.00</p>
          </div>
        </li>
        <li class="flex items-center">
          <div class="bg-pf-yellow w-1 md:w-2.5 h-10 rounded-2xl"></div>
          <div class="flex flex-col gap-y-1 !ms-4">
            <p class="text-sm">Personal Care</p>
            <p class="!font-bold text-lg">$100.00</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import DoughnutChart from './DoughnutChart.vue';

</script>

<style scoped></style>
