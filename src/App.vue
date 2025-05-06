<script setup lang="ts">
import SidebarLink from "./components/layout/SidebarLink.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
</script>

<template>
  <main class="flex gap-x-10 h-screen overflow-y-">
    <!-- The side bar -->
    <div class="w-[18%] bg-gray-950 rounded-tr-2xl rounded-br-2xl">
      <h2 class="text-white dark:text-green-500 px-8 py-10">Finance</h2>
      <ul class="flex flex-col gap-y-2.5">
        <li>
          <SidebarLink :to="{ name: 'home' }" label="Overview">
            <template #icon>
              <i class="pi pi-home text-2xl"></i>
            </template>
          </SidebarLink>
        </li>
        <li>
          <SidebarLink :to="{ name: 'transactions' }" label="Transactions">
            <template #icon>
              <i class="pi pi-sort-alt text-2xl"></i>
            </template>
          </SidebarLink>
        </li>
        <li>
          <SidebarLink :to="{ name: 'budgets' }" label="Budgets">
            <template #icon>
              <i class="pi pi-chart-pie text-2xl"></i>
            </template>
          </SidebarLink>
        </li>
        <li>
          <SidebarLink :to="{ name: 'pots' }" label="Pots">
            <template #icon>
              <i class="pi pi-money-bill text-2xl"></i>
            </template>
          </SidebarLink>
        </li>
        <li>
          <SidebarLink :to="{ name: 'recurring-bills' }" label="Recurring Bill">
            <template #icon>
              <i class="pi pi-credit-card text-2xl"></i>
            </template>
          </SidebarLink>
        </li>
      </ul>
      <div class="flex mt-16">
        <ThemeToggle />
      </div>
    </div>
    <div class="flex grow bg-beige-100 overflow-y-scroll">
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
