<script setup lang="ts">
// import BudgetDashboard from "@/components/overview/BudgetDashboard.vue";
import DashboardCard from "@/components/overview/DashboardCard.vue";
import DoughnutChart from "@/components/overview/DoughnutChart.vue";
import { Avatar } from "primevue";
</script>

<template>
  <main class="container">
    <div class="main w-[97%] text-gray-900 py-10">
      <h1 class="text-2xl text-gray-900 !font-bold">Overview</h1>
      <div class="w-full grid grid-cols-3 gap-8 !my-8">
        <DashboardCard title="Current Balance" content="$3,400,395" />
        <DashboardCard title="Income" content="$65,400,395" />
        <DashboardCard title="Expenses" content="$400,395" />
      </div>
      <div class="flex gap-8">
        <!-- Pots and Transactions -->
        <div class="flex flex-col gap-8 w-[60%]">
          <div class="card">
            <section class="flex items-center justify-between">
              <h4 class="!font-bold text-2xl">Pots</h4>
              <router-link to="/pots">
                See Details <span class="!ml-2"> <i class="pi pi-caret-right"></i></span>
              </router-link>
            </section>
            <section class="flex justify-between gap-7 py-4">
              <div class="flex gap-x-6 w-1/2 rounded-xl bg-beige-100 p-6">
                <img src="/images/icon-pot.svg" alt="pots" class="w-8" />
                <div class="flex flex-col gap-y-3">
                  <p>Total Saved</p>
                  <p class="text-3xl !font-bold">$580</p>
                </div>
              </div>
              <ul class="grid grid-cols-2 gap-5 w-1/2">
                <li class="flex">
                  <div class="bg-pf-army-green w-2.5 h-16 rounded-2xl"></div>
                  <div class="flex flex-col gap-y-2.5 !ms-4">
                    <p>Savings</p>
                    <p class="!font-bold text-xl">$159</p>
                  </div>
                </li>
                <li class="flex">
                  <div class="bg-pf-cyan w-2.5 h-16 rounded-2xl"></div>
                  <div class="flex flex-col gap-y-2.5 !ms-4">
                    <p>Gift</p>
                    <p class="!font-bold text-xl">$40</p>
                  </div>
                </li>
                <li class="flex">
                  <div class="bg-pf-navy w-2.5 h-16 rounded-2xl"></div>
                  <div class="flex flex-col gap-y-2.5 !ms-4">
                    <p>Concert Ticket</p>
                    <p class="!font-bold text-xl">$110</p>
                  </div>
                </li>
                <li class="flex">
                  <div class="bg-pf-yellow w-2.5 h-16 rounded-2xl"></div>
                  <div class="flex flex-col gap-y-2.5 !ms-4">
                    <p>New Laptop</p>
                    <p class="!font-bold text-xl">$10</p>
                  </div>
                </li>
              </ul>
            </section>
          </div>

          <!-- Transactions -->
          <div class="card">
            <section class="flex items-center justify-between">
              <h4 class="!font-bold text-2xl">Transactions</h4>
              <router-link to="/transactions">
                See Details <span class="!ml-2"> <i class="pi pi-caret-right"></i></span>
              </router-link>
            </section>
            <section class="!mt-5">
              <div class="flex justify-between py-5 border-b border-b-gray-200">
                <div class="flex gap-x-4 items-center">
                  <Avatar
                    image="/images/avatars/emma-richardson.jpg"
                    size="xlarge"
                    shape="circle"
                  />
                  <p class="!font-semibold">Emma Richardson</p>
                </div>
                <div class="flex flex-col gap-y-2">
                  <p class="text-pf-green">+$55.50</p>
                  <p class="text-gray-500">19 Aug 2024</p>
                </div>
              </div>
              <div class="flex justify-between py-8 border-b border-b-gray-200">
                <div class="flex gap-x-4 items-center">
                  <Avatar
                    image="/images/avatars/emma-richardson.jpg"
                    size="xlarge"
                    shape="circle"
                  />
                  <p class="!font-semibold">Emma Richardson</p>
                </div>
                <div class="flex flex-col gap-y-2">
                  <p class="text-pf-green">+$55.50</p>
                  <p class="text-gray-500">19 Aug 2024</p>
                </div>
              </div>
              <div class="flex justify-between py-8 border-b border-b-gray-200">
                <div class="flex gap-x-4 items-center">
                  <Avatar
                    image="/images/avatars/emma-richardson.jpg"
                    size="xlarge"
                    shape="circle"
                  />
                  <p class="!font-semibold">Emma Richardson</p>
                </div>
                <div class="flex flex-col gap-y-2">
                  <p class="text-pf-green">+$55.50</p>
                  <p class="text-gray-500">19 Aug 2024</p>
                </div>
              </div>
              <div class="flex justify-between py-8 border-b border-b-gray-200">
                <div class="flex gap-x-4 items-center">
                  <Avatar
                    image="/images/avatars/emma-richardson.jpg"
                    size="xlarge"
                    shape="circle"
                  />
                  <p class="!font-semibold">Emma Richardson</p>
                </div>
                <div class="flex flex-col gap-y-2">
                  <p class="text-pf-green">+$55.50</p>
                  <p class="text-gray-500">19 Aug 2024</p>
                </div>
              </div>
              <!-- <div class="flex justify-between py-8 border-b border-b-gray-200">
                <div class="flex gap-x-4 items-center">
                  <Avatar
                    image="/images/avatars/emma-richardson.jpg"
                    size="xlarge"
                    shape="circle"
                  />
                  <p class="!font-semibold">Emma Richardson</p>
                </div>
                <div class="flex flex-col gap-y-2">
                  <p class="text-pf-green">+$55.50</p>
                  <p class="text-gray-500">19 Aug 2024</p>
                </div>
              </div>
              <div class="flex justify-between py-8 border-b border-b-gray-200">
                <div class="flex gap-x-4 items-center">
                  <Avatar
                    image="/images/avatars/emma-richardson.jpg"
                    size="xlarge"
                    shape="circle"
                  />
                  <p class="!font-semibold">Emma Richardson</p>
                </div>
                <div class="flex flex-col gap-y-2">
                  <p class="text-pf-green">+$55.50</p>
                  <p class="text-gray-500">19 Aug 2024</p>
                </div>
              </div>
              <div class="flex justify-between py-8 border-b border-b-gray-200">
                <div class="flex gap-x-4 items-center">
                  <Avatar
                    image="/images/avatars/emma-richardson.jpg"
                    size="xlarge"
                    shape="circle"
                  />
                  <p class="!font-semibold">Emma Richardson</p>
                </div>
                <div class="flex flex-col gap-y-2">
                  <p class="text-pf-green">+$55.50</p>
                  <p class="text-gray-500">19 Aug 2024</p>
                </div>
              </div> -->
            </section>
          </div>
        </div>

        <!-- Budgets and Recurring Bill -->
        <div class="flex flex-col gap-8 grow">
          <div class="card h-1/2">
            <section class="flex items-center justify-between">
              <h4 class="!font-bold text-2xl">Budgets</h4>
              <router-link to="/budgets">
                See Details <span class="!ml-2"> <i class="pi pi-caret-right"></i></span>
              </router-link>
            </section>
            <section class="!mt-8 flex gap-x-4">
              <div>
                <DoughnutChart />
                <!-- <BudgetDashboard /> -->
              </div>
              <div>
                <ul class="flex flex-col gap-3">
                  <li class="flex">
                    <div class="bg-pf-army-green w-2.5 h-16 rounded-2xl"></div>
                    <div class="flex flex-col gap-y-2.5 !ms-4">
                      <p>Entertainment</p>
                      <p class="!font-bold text-xl">$50.00</p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="bg-pf-cyan w-2.5 h-16 rounded-2xl"></div>
                    <div class="flex flex-col gap-y-2.5 !ms-4">
                      <p>Bills</p>
                      <p class="!font-bold text-xl">$720</p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="bg-pf-navy w-2.5 h-16 rounded-2xl"></div>
                    <div class="flex flex-col gap-y-2.5 !ms-4">
                      <p>Dining Out</p>
                      <p class="!font-bold text-xl">$75.00</p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="bg-pf-yellow w-2.5 h-16 rounded-2xl"></div>
                    <div class="flex flex-col gap-y-2.5 !ms-4">
                      <p>Personal Care</p>
                      <p class="!font-bold text-xl">$100.00</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <!-- Resurring Bills -->
          <div class="card flex-1">
            <section class="flex items-center justify-between">
              <h4 class="!font-bold text-2xl">Recurring Bills</h4>
              <router-link to="/recurring-bills">
                See Details <span class="!ml-2"> <i class="pi pi-caret-right"></i></span>
              </router-link>
            </section>

            <section class="!mt-8 flex flex-col gap-y-4">
              <div
                class="flex items-center justify-between bg-beige-100 rounded-2xl p-6 border-l-5 border-l-pf-army-green"
              >
                <p>Paid Bills</p>
                <p class="!font-bold">$190.00</p>
              </div>
              <div
                class="flex items-center justify-between bg-beige-100 rounded-2xl p-6 border-l-5 border-l-pf-yellow"
              >
                <p>Total Upcoming</p>
                <p class="!font-bold">$194.00</p>
              </div>
              <div
                class="flex items-center justify-between bg-beige-100 rounded-2xl p-6 border-l-5 border-l-pf-cyan"
              >
                <p>Due Soon</p>
                <p class="!font-bold">$59.00</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
