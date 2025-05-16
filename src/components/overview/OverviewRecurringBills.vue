<template>
  <div class="card flex-1">
    <section class="flex items-center justify-between">
      <h4 class="!font-bold text-2xl">Recurring Bills</h4>
      <router-link to="/recurring-bills">
        See Details <span class="!ml-2"> <i class="pi pi-caret-right"></i></span>
      </router-link>
    </section>

    <section class="!mt-8 flex flex-col gap-y-4">
      <div
        class="flex items-center justify-between bg-beige-100 rounded-xl md:rounded-2xl p-4 md:p-6 border-l-5 border-l-pf-army-green"
      >
        <p>Paid Bills</p>
        <p class="!font-bold">$190.00</p>
      </div>
      <div
        class="flex items-center justify-between bg-beige-100 rounded-xl md:rounded-2xl p-4 md:p-6 border-l-5 border-l-pf-yellow"
      >
        <p>Total Upcoming</p>
        <p class="!font-bold">$194.00</p>
      </div>
      <div
        class="flex items-center justify-between bg-beige-100 rounded-xl md:rounded-2xl p-4 md:p-6 border-l-5 border-l-pf-cyan"
      >
        <p>Due Soon</p>
        <p class="!font-bold">$59.00</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
