<template>
  <div class="rounded-xl overflow-hidden shadow bg-white">
    <div class="flex flex-col gap-y-5 px-6 py-6">
      <h4 class="font-bold mb-2">{{ title }}</h4>
      <p class="text-gray-700 text-3xl font-bold">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
}>();
</script>
