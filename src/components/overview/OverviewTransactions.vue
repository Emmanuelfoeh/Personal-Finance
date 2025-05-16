<template>
  <div class="card">
    <section class="flex items-center justify-between">
      <h4 class="!font-bold text-2xl">Transactions</h4>
      <router-link to="/transactions">
        See Details <span class="!ml-2"> <i class="pi pi-caret-right"></i></span>
      </router-link>
    </section>
    <section class="!mt-5">
      <div class="flex justify-between py-5 border-b text-sm border-b-gray-200">
        <div class="flex gap-x-4 items-center">
          <Avatar
            image="/images/avatars/emma-richardson.jpg"
            size="large"
            shape="circle"
          />
          <p class="!font-semibold">Emma Richardson</p>
        </div>
        <div class="flex flex-col gap-y-2">
          <p class="text-pf-green">+$55.50</p>
          <p class="text-gray-500">19 Aug 2024</p>
        </div>
      </div>
      <div class="flex justify-between py-5 border-b text-sm border-b-gray-200">
        <div class="flex gap-x-4 items-center">
          <Avatar
            image="/images/avatars/emma-richardson.jpg"
            size="large"
            shape="circle"
          />
          <p class="!font-semibold">Emma Richardson</p>
        </div>
        <div class="flex flex-col gap-y-2">
          <p class="text-pf-green">+$55.50</p>
          <p class="text-gray-500">19 Aug 2024</p>
        </div>
      </div>
      <div class="flex justify-between py-5 border-b text-sm border-b-gray-200">
        <div class="flex gap-x-4 items-center">
          <Avatar
            image="/images/avatars/emma-richardson.jpg"
            size="large"
            shape="circle"
          />
          <p class="!font-semibold">Emma Richardson</p>
        </div>
        <div class="flex flex-col gap-y-2">
          <p class="text-pf-green">+$55.50</p>
          <p class="text-gray-500">19 Aug 2024</p>
        </div>
      </div>
      <div class="flex justify-between py-5 border-b text-sm border-b-gray-200">
        <div class="flex gap-x-4 items-center">
          <Avatar
            image="/images/avatars/emma-richardson.jpg"
            size="large"
            shape="circle"
          />
          <p class="!font-semibold">Emma Richardson</p>
        </div>
        <div class="flex flex-col gap-y-2">
          <p class="text-pf-green">+$55.50</p>
          <p class="text-gray-500">19 Aug 2024</p>
        </div>
      </div>
      <div class="flex justify-between py-5 border-b text-sm border-b-gray-200">
        <div class="flex gap-x-4 items-center">
          <Avatar
            image="/images/avatars/emma-richardson.jpg"
            size="large"
            shape="circle"
          />
          <p class="!font-semibold">Emma Richardson</p>
        </div>
        <div class="flex flex-col gap-y-2">
          <p class="text-pf-green">+$55.50</p>
          <p class="text-gray-500">19 Aug 2024</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from "primevue";
</script>

<style scoped></style>
