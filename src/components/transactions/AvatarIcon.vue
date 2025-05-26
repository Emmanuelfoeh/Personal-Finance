<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps<{
  name: string;
  category: string;
  icon?: string;
}>();

// Background colors based on categories
const backgroundColor = computed(() => {
  const categoryColors: Record<string, string> = {
    'General': 'bg-primary-100 text-primary-700',
    'Dining Out': 'bg-orange-100 text-orange-700',
    'Groceries': 'bg-green-100 text-green-700',
    'Entertainment': 'bg-violet-100 text-violet-700',
    'default': 'bg-neutral-100 text-neutral-700'
  };
  
  return categoryColors[props.category] || categoryColors.default;
});

// Generate initials from name
const initials = computed(() => {
  if (!props.name) return '?';
  return props.name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2);
});
</script>

<template>
  <div 
    :class="[backgroundColor, 'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center']"
  >
    <template v-if="icon">
      <img :src="icon" alt="" class="h-5 w-5" />
    </template>
    <template v-else>
      <span class="text-sm font-medium">{{ initials }}</span>
    </template>
  </div>
</template>