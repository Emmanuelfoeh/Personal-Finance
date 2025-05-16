<template>
  <div class="rounded-xl shadow bg-white flex w-full flex-col gap-y-5 p-6">
    <h4 class="!font-bold">{{ title }}</h4>
    <p class="text-gray-700 text-lg md:text-2xl lg:text-3xl !font-bold">
      {{ content }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
}>();
</script>
