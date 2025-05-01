<template>
  <div class="flex flex-col pt-2">
    <div class="ma-label">
      <slot name="label">
        <label v-if="label">{{ label }}</label>
      </slot>
    </div>
    <div class="relative pb-2">
      <div class="relative">
        <slot :validator="validator" :handleBlur="handleBlur"></slot>
        <div class="absolute top-3.5 right-2">
          <p class="text-xs sm:whitespace-nowrap" v-if="validator.value.$error">
            {{ validator.value.$errors[0]?.$message }}
          </p>
        </div>
      </div>
      <small v-if="validator.value.$error" class="text-red-500 absolute -bottom-2.5 text-xs">
        {{ validator.value.$errors[0]?.$message }}</small
      >
      <small v-if="feedback" class="absolute -bottom-2.5 text-xs right-0"> {{ feedback }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
// import AppTooltip from '@/components/shared/AppTooltip.vue'
import useVuelidate from '@vuelidate/core'
// import { ulid } from 'ulid'
import { required as fieldRequired } from '@vuelidate/validators'
import { computed } from 'vue'
// import type { DropdownOption } from '@/types/formData'

const props = withDefaults(
  defineProps<{
    type?: 'email' | 'text' | 'phone' | 'url' | 'password'
    label?: string
    value: string | number | Date | unknown[]
    disabled?: boolean
    required?: boolean
    readonly?: boolean
    placeholder?: string
    feedback?: string
    rules?: Record<string, unknown>
  }>(),
  {
    // id: ulid(),
    disabled: false,
    placeholder: '',
    value: '',
    type: 'text',
    rules: () => ({}),
  },
)

const validator = useVuelidate(
  // @ts-ignore
  { value: { ...props.rules, ...(props.required ? { required: fieldRequired } : {}) } },
  computed(() => ({ value: props.value })),
)

function handleBlur() {
  validator.value.value.$touch()
}
</script>
