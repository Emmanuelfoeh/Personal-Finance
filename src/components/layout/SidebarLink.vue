<template>
  <router-link :to="to" custom v-slot="{ href, navigate, isActive: isRouteActive }">
    <a
      class="flex items-center gap-x-4 p-4  hover:bg-white hover:text-gray-900 hover:dark:text-gray-200 hover:dark:bg-gray-800 w-[90%] rounded-tr-2xl rounded-br-2xl"
      :class="{
        'text-gray-900 dark:text-gray-200  bg-amber-50 dark:bg-gray-800 border-l-4 border-l-green-900 ':
          isRouteActive || isActive
      }"
      :href="href"
      @click="navigate"
    >
      <span :class="{ 'text-green-950': isRouteActive || isActive }">
        <slot name="icon"></slot>
      </span>

      <span>
        {{ label }}
      </span>
    </a>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  isActive?: boolean;
  label?: string;
  to: { name: string; params?: Record<string, any> };
}>();
</script>

<style scoped></style>
