<template>
  <div class="card">
    <section class="flex items-center justify-between">
      <h4 class="!font-bold text-2xl">Pots</h4>
      <router-link to="/pots">
        See Details <span class="!ml-2"> <i class="pi pi-caret-right"></i></span>
      </router-link>
    </section>
    <section class="flex justify-between flex-col md:flex-row gap-7 pt-4">
      <div
        class="flex items-center gap-x-6 rounded-xl bg-beige-100 md:w-1/2 px-4 p-4 md:p-6"
      >
        <img src="/images/icon-pot.svg" alt="pots" class="w-8" />
        <div class="flex flex-col gap-y-2">
          <p>Total Saved</p>
          <p class="text-3xl !font-bold">$580</p>
        </div>
      </div>
      <ul class="grid grid-cols-2 gap-4 md:w-1/2">
        <li class="flex items-center">
          <div class="bg-pf-army-green w-1 md:w-2.5 h-10 rounded-2xl"></div>
          <div class="flex flex-col gap-y-1 !ms-3">
            <p class="text-sm">Savings</p>
            <p class="!font-bold text-sm md:text-xl">$159</p>
          </div>
        </li>
        <li class="flex items-center">
          <div class="bg-pf-cyan w-1 md:w-2.5 h-10 rounded-2xl"></div>
          <div class="flex flex-col gap-y-1 !ms-3">
            <p class="text-sm">Gift</p>
            <p class="!font-bold text-sm md:text-xl">$40</p>
          </div>
        </li>
        <li class="flex items-center">
          <div class="bg-pf-navy w-1 md:w-2.5 h-10 rounded-2xl"></div>
          <div class="flex flex-col gap-y-2.5 !ms-4">
            <p class="text-sm">Concert Ticket</p>
            <p class="!font-bold text-sm md:text-xl">$110</p>
          </div>
        </li>
        <li class="flex items-center">
          <div class="bg-pf-yellow w-1 md:w-2.5 h-10 rounded-2xl"></div>
          <div class="flex flex-col gap-y-1 !ms-3">
            <p class="text-sm">New Laptop</p>
            <p class="!font-bold md:text-xl">$10</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
