<script setup lang="ts">
import { InputText } from "primevue";
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps<{
  value: string;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: "search", value: string): void;
}>();

const localValue = ref(props.value);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  localValue.value = target.value;
  emit("search", localValue.value);
};
</script>

<template>
  <div
    class="w-full !mb-5 md:mb-0 md:w-80 flex items-center p-1.5 justify-between border border-neutral-300 rounded-lg"
  >
    <InputText
      type="search"
      :value="localValue"
      @input="handleInput"
      :placeholder="placeholder || 'Search'"
      class="border-none !border-0 focus:outline-none w-[90%]"
    />
    <div class="!me-3">
      <i class="pi pi-search text-3xl"></i>
    </div>
  </div>
</template>
