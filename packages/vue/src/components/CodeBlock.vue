<script setup lang='ts'>
import type { BuiltinTheme, BundledLanguage, ShikiTransformer } from 'shiki'
import { convertCodeToHtml } from '@/lib/utils/codeToHtml'
import { ref, watch } from 'vue'

const props = defineProps<{
  code: string
  lang: BundledLanguage
  theme: {
    light: BuiltinTheme
    dark?: BuiltinTheme
  }
  transformers?: ShikiTransformer[]
}>()

const codeToHtml = ref('')
watch(props, async (val: { code: string, lang: BundledLanguage, theme: { light: BuiltinTheme, dark?: BuiltinTheme }, transformers?: ShikiTransformer[] }) => {
  if (val) {
    return codeToHtml.value = await convertCodeToHtml(val.code?.trim(), val.lang, { light: val.theme.light, dark: val.theme.dark || 'vitesse-dark' }, val.transformers || [])
  }
}, {
  immediate: true,
})
</script>

<template>
  <div
    class="shiki--code--block" role="region"
    aria-labelledby="codeLabel"
    tabindex="0"
    aria-live="polite"
    aria-roledescription="code block"
    lang="en" v-html="codeToHtml"
  />
</template>
