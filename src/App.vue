<script setup lang="ts">
import { Button } from "primevue";
import SidebarLink from "./components/layout/SidebarLink.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
import MobileLink from "./components/layout/MobileLink.vue";
</script>

<template>
  <main class="flex flex-col-reverse lg:flex-row gap-x-10 h-screen overflow-y-hidden">
    <!-- The side bar for Desktop-->
    <div class="hidden lg:block w-[18%] bg-gray-950 rounded-tr-2xl rounded-br-2xl">
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
      <div class="flex items-baseline mt-16 w-[90%] justify-between">
        <Button
          ><span class="!me-4"
            ><img src="/images/icon-minimize-menu.svg" alt="menu-arrow" />
          </span>
          Minimize Menu</Button
        >
        <ThemeToggle />
      </div>
    </div>
    <!-- Sidebar for Tablet and mobile view -->
    <div class="lg:hidden px-4 pt-2 bg-gray-950 rounded-tl-xl rounded-tr-xl">
      <ul class="flex justify-between">
        <li>
          <MobileLink :to="{ name: 'home' }" label="Overview">
            <template #icon>
              <i class="pi pi-home text-2xl"></i>
            </template>
          </MobileLink>
        </li>
        <li>
          <MobileLink :to="{ name: 'transactions' }" label="Transactions">
            <template #icon>
              <i class="pi pi-sort-alt text-2xl"></i>
            </template>
          </MobileLink>
        </li>
        <li>
          <MobileLink :to="{ name: 'budgets' }" label="Budgets">
            <template #icon>
              <i class="pi pi-chart-pie text-2xl"></i>
            </template>
          </MobileLink>
        </li>
        <li>
          <MobileLink :to="{ name: 'pots' }" label="Pots">
            <template #icon>
              <i class="pi pi-credit-card text-2xl"></i>
            </template>
          </MobileLink>
        </li>

        <li>
          <MobileLink :to="{ name: 'recurring-bills' }" label="Recurring Bill">
            <template #icon>
              <i class="pi pi-money-bill text-2xl"></i>
            </template>
          </MobileLink>
        </li>
      </ul>
    </div>
    <div class="flex bg-beige-100 w-screen overflow-y-scroll">
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
