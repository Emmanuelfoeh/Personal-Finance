<template>
  <div class="card">
    <div class="flex items-center gap-x-2 justify-between">
      <div class="flex items-center gap-x-4">
        <span :class="`block w-4 h-4 rounded-full bg-${indicatorColor}`"></span>
        <h1 class="!font-bold">{{ title }}</h1>
      </div>
      <!-- The menu -->
      <div class="flex justify-center">
        <Button
          type="button"
          size="small"
          variant="text"
          severity="secondary"
          icon="pi pi-ellipsis-h"
          @click="toggle"
          aria-haspopup="true"
          aria-controls="overlay_menu"
        />
        <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
      </div>
    </div>

    <div>
      <p>{{ maxAmountText }}</p>
      <ProgressBar
        :value="progressValue"
        :class="`!h-6 ${progressBarClass}`"
        :style="progressBarStyle"
      />

      <div class="!mt-4 grid grid-cols-2">
        <div class="flex items-center">
          <div :class="`bg-${indicatorColor} w-1 h-9 rounded-2xl`"></div>
          <div class="flex flex-col gap-y-1 !ms-3">
            <p class="text-sm">Spent</p>
            <p class="!font-semibold text-sm md:text-lg">{{ spentValue }}</p>
          </div>
        </div>
        <div class="flex items-center">
          <div :class="`bg-beige-100 w-1 h-9 rounded-2xl`"></div>
          <div class="flex flex-col gap-y-1 !ms-3">
            <p class="text-sm">remainingValue</p>
            <p class="!font-semibold text-sm md:text-lg">{{ remainingValue }}</p>
          </div>
        </div>
      </div>

      <div class="!mt-5 rounded-2 bg-beige-100 p-5">
        <section class="flex items-center justify-between">
          <h4 class="!font-bold">{{ latestSpendingTitle }}</h4>
          <router-link :to="transactionsRoute">
            {{ seeAllText }} <span class="!ml-2"> <i class="pi pi-caret-right"></i></span>
          </router-link>
        </section>

        <section class="!mt-2">
          <div
            v-for="(transaction, index) in transactions"
            :key="index"
            :class="[
              'flex justify-between py-1 text-sm',
              index < transactions.length - 1 ? 'border-b border-b-gray-200' : ''
            ]"
          >
            <div class="flex gap-x-4 items-center py-2">
              <Avatar :image="transaction.avatar" shape="circle" />
              <p class="!font-semibold">{{ transaction.name }}</p>
            </div>
            <div class="flex flex-col gap-y-1">
              <p
                :class="`text-sm ${transaction.amount.startsWith('+') ? 'text-pf-green' : 'text-red-500'}`"
              >
                {{ transaction.amount }}
              </p>
              <p class="text-gray-500 text-sm">{{ transaction.date }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Avatar, Button, Menu, ProgressBar } from "primevue";

interface Transaction {
  name: string;
  amount: string;
  date: string;
  avatar: string;
}

interface MenuItem {
  label: string;
  icon?: string;
  command?: () => void;
}

interface Props {
  title?: string;
  maxAmount?: number;
  progressValue: number;
  progressBarColor?: string;
  progressBarClass?: string;
  indicatorColor?: string;
  barColor?: string;
  spentValue?: string;
  remainingValue?: string;
  latestSpendingTitle?: string;
  seeAllText?: string;
  transactionsRoute?: string;
  transactions?: Transaction[];
  menuItems?: MenuItem[];
}

const props = withDefaults(defineProps<Props>(), {
  title: "Entertainment",
  maxAmount: 50,
  progressBarColor: "#10b981", // Default green color
  progressBarClass: "",
  indicatorColor: "pf-green",
  barColor: "bg-pf-army-green",
  spentValue: "$159",
  remainingValue: "$159",
  latestSpendingTitle: "Latest spending",
  seeAllText: "See All",
  transactionsRoute: "/transactions",
  transactions: () => [
    {
      name: "Emma Richardson",
      amount: "+$55.50",
      date: "19 Aug 2024",
      avatar: "/images/avatars/emma-richardson.jpg"
    },
    {
      name: "Emma Richardson",
      amount: "+$55.50",
      date: "19 Aug 2024",
      avatar: "/images/avatars/emma-richardson.jpg"
    },
    {
      name: "Emma Richardson",
      amount: "+$55.50",
      date: "19 Aug 2024",
      avatar: "/images/avatars/emma-richardson.jpg"
    }
  ],
  menuItems: () => [
    {
      label: "Edit",
      icon: "pi pi-pencil"
    },
    {
      label: "Delete",
      icon: "pi pi-trash"
    }
  ]
});

const menu = ref();

const maxAmountText = computed(() => `Maximum of $${props.maxAmount.toFixed(2)}`);

const progressBarStyle = computed(() => ({
  "--p-progressbar-background": "#f8f4f0",
  "--p-progressbar-value-background": props.progressBarColor
}));

const toggle = (event: Event) => {
  menu.value.toggle(event);
};
</script>
