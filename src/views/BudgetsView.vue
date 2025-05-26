<script setup lang="ts">
import BudgetCategoryCard from "@/components/budgets/BudgetCategoryCard.vue";
import DoughnutChart from "@/components/overview/DoughnutChart.vue";
import { Button } from "primevue";
</script>

<template>
  <main class="overflow-x w-full">
    <div class="flex flex-col w-full md:w-[97%] px-3 lg:px-0 text-gray-900 gap-8 py-8">
      <div class="flex w-full justify-between">
        <h1 class="text-2xl text-gray-900 !font-bold">Budgets</h1>
        <Button> Add New Budget </Button>
      </div>
      <div class="flex justify-between gap-8 flex-col lg:flex-row w-full">
        <div
          class="h-fit card flex flex-col sm:flex-row lg:flex-col justify-around !py-8 !lg:py-0 gap-y-8 lg:gap-y-0 w-full lg:w-[40%]"
        >
          <div class="flex justify-center">
            <DoughnutChart />
          </div>
          <div class="!mt-5">
            <h6 class="subtitle">Spending Summary</h6>
            <div class="!mt-5 flex flex-col gap-y-5">
              <div class="flex items-center justify-between">
                <div class="flex gap-x-5 !ms-3">
                  <div :class="`bg-pf-brown w-1 h-6 rounded-2xl`"></div>
                  <p>Entertainment</p>
                </div>
                <div>
                  <span class="!font-semibold">$343.46</span>
                  <span> of $ 200.00 </span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex gap-x-5 !ms-3">
                  <div :class="`bg-pf-brown w-1 h-6 rounded-2xl`"></div>
                  <p>Entertainment</p>
                </div>
                <div>
                  <span class="!font-semibold">$343.456</span>
                  <span> of $ 200.00 </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-y-7 grow">
          <BudgetCategoryCard :progressValue="80" progressBarColor="#277c78" />
          <BudgetCategoryCard
            :progressValue="40"
            indicatorColor="pf-cyan"
            progressBarColor="#82c9d7"
            title="Bills"
          />
          <BudgetCategoryCard
            :progressValue="100"
            indicatorColor="pf-yellow"
            progressBarColor="#f2cdac"
            title="Dining Out"
          />
          <BudgetCategoryCard
            :progressValue="58"
            indicator-color="pf-navy"
            progressBarColor="#626070"
          />
        </div>
      </div>
    </div>
  </main>
</template>
