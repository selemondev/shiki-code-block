<script setup lang='ts'>
import type { BuiltinTheme, BundledLanguage, ShikiTransformer } from "shiki";
import { ref, watch } from "vue";
import { convertCodeToHtml } from "@/lib/utils/codeToHtml";

export interface Themes {
  [key: string]: BuiltinTheme
}
const props = defineProps<{
	code: string;
	lang: BundledLanguage;
	theme: Themes;
    defaultColor?: string;
    cssVariablePrefix?: string;
	transformers?: ShikiTransformer[];
}>();

const codeToHtml = ref("");
watch(
	() => props,
	async (val: {
		code: string;
		lang: BundledLanguage;
		theme: Themes;
        defaultColor?: string;
        cssVariablePrefix?: string;
		transformers?: ShikiTransformer[];
	}) => {
		if (val) {
			codeToHtml.value = await convertCodeToHtml(
				val.code?.trim(),
				val.lang,
				val.theme,
				val.transformers || [],
				val.defaultColor,
				val.cssVariablePrefix
			);

			return codeToHtml.value;
		}
	},
	{
		immediate: true,
	},
);
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
