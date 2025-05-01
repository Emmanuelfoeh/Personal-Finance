<template>
  <PFInputWrapper
    :type="type"
    :label="label"
    :value="value"
    :disabled="disabled"
    :required="required"
    :readonly="readonly"
    :placeholder="placeholder"
    :feedback="feedback"
    :rules="rules"
  >
    <template v-slot="{ validator, handleBlur }">
      <Password
        v-model="value"
        :type="type"
        :invalid="validator?.$dirty && validator?.$invalid"
        :disabled="disabled"
        :autofocus="autofocus"
        :size="size"
        :placeholder="placeholder"
        @blur="onBlur(handleBlur)"
        toggleMask
        fluid
        class="w-full"
      />
    </template>
  </PFInputWrapper>
</template>

<script setup lang="ts">
import type { AnyFn } from '@vueuse/core'
import { ulid } from 'ulid'
import PFInputWrapper from './PFInputWrapper.vue'
import { Password } from 'primevue'

const props = withDefaults(
  defineProps<{
    type?: 'email' | 'text' | 'phone' | 'url' | 'password'
    label?: string
    modelValue?: string
    disabled?: boolean
    required?: boolean
    readonly?: boolean
    placeholder?: string
    feedback?: string
    size?: 'small' | 'large'
    autofocus?: boolean
    rules?: Record<string, unknown>
  }>(),
  {
    id: ulid(),
    disabled: false,
    placeholder: '',
    modelValue: '',
    type: 'text',
    rules: () => ({}),
  },
)

const emit = defineEmits(['update:modelValue', 'blur'])
const value = useVModel(props, 'modelValue', emit)

function onBlur(cb?: AnyFn) {
  if (cb) cb()
  emit('blur')
}
</script>
