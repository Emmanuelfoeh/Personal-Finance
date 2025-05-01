<template>
  <Button
    :role="to ? 'link' : 'button'"
    :iconPos="iconPos"
    :severity="variant === 'primary' ? undefined : variant"
    :text="text"
    :outlined="outlined"
    :disabled="disabled"
    :loading="loading"
    :rounded="rounded"
    :icon="icon"
    :type="type"
    :size="size !== 'medium' ? size : undefined"
    :label="label"
    :class="{ 'w-full': fullWidth }"
    @click="onButtonClick"
  >
    <slot></slot>
  </Button>
</template>
<script lang="ts" setup>
import Button from "primevue/button";
import type { ButtonHTMLAttributes } from "vue";
const router = useRouter();

const props = withDefaults(
  defineProps<{
    loading?: boolean;
    icon?: string;
    label?: string;
    rounded?: boolean;
    text?: boolean;
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "danger" | "success" | "warn";
    disabled?: boolean;
    outlined?: boolean;
    fullWidth?: boolean;
    type?: ButtonHTMLAttributes["type"];
    iconPos?: "right" | "left";
    to?: string | { name: string };
  }>(),
  {
    variant: undefined,
    iconPos: "right",
  }
);

function onButtonClick() {
  if (props.to) {
    router.push(props.to);
  }
}
</script>
