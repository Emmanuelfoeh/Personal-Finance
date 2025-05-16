<template>
  <router-link :to="to" custom v-slot="{ href, navigate, isActive: isRouteActive }">
    <a
      class="flex flex-col justify-center items-center text-gray-400 w-full px-2 py-1 !font-bold hover:bg-gray-100 hover:rounded-tl-lg hover:rounded-tr-lg"
      :class="{
        'bg-white border-b-pf-green-900 font-bold px-4 py-1 rounded-tl-lg rounded-tr-lg':
          isRouteActive || isActive
      }"
      :href="href"
      @click="navigate"
    >
      <span :class="{ 'text-pf-green': isRouteActive || isActive }">
        <slot name="icon"></slot>
      </span>
      <span :class="{ 'text-black': isRouteActive || isActive }" class="hidden md:block">{{ label }}</span>
    </a>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  isActive?: boolean;
  to: { name: string; params?: Record<string, any> };
  label?: string;
}>();
</script>

<style scoped></style>
