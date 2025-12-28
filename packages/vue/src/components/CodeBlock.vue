<script setup lang="ts">
import type { BuiltinTheme, BundledLanguage, ShikiTransformer } from "shiki";
import { ref, watch } from "vue";
import { convertCodeToHtml } from "@/lib/utils/codeToHtml";
import DOMPurify from "dompurify";
import type { ConvertOptions, Themes } from "@/types/theme.interface";

type Options = ConvertOptions & {
	defaultColor?: string;
	cssVariablePrefix?: string;
	transformers?: ShikiTransformer[];
};
type BaseProps = {
	code: string;
	lang: BundledLanguage;
	defaultColor?: string;
	cssVariablePrefix?: string;
	transformers?: ShikiTransformer[];
};
type SingleThemeProps = BaseProps & {
	theme: BuiltinTheme;
	themes?: never;
};
type MultiThemeProps = BaseProps & {
	themes: Themes;
	theme?: never;
};
const props = defineProps<SingleThemeProps | MultiThemeProps>();

const codeToHtml = ref("");

watch(
	[
		() => props.code,
		() => props.lang,
		() => props.theme,
		() => props.themes,
		() => props.transformers,
		() => props.defaultColor,
		() => props.cssVariablePrefix,
	],
	async ([
		code,
		lang,
		theme,
		themes,
		transformers,
		defaultColor,
		cssVariablePrefix,
	]) => {
		const baseOptions = {
			transformers: transformers ?? [],
			defaultColor: defaultColor,
			cssVariablePrefix: cssVariablePrefix,
		};

		let options: Options;

		if (theme) {
			options = {
				...baseOptions,
				theme,
			};
		} else if (themes) {
			options = {
				...baseOptions,
				themes,
			};
		} else {
			if (import.meta.env.DEV) {
				console.warn("Either `theme` or `themes` must be provided");
			}
			return;
		}

		codeToHtml.value = await convertCodeToHtml(code.trim(), lang, options);
	},
	{ immediate: true },
);
</script>
<template>
  <div
    class="shiki--code--block" role="region"
    aria-label="codeLabel"
    tabindex="0"
    aria-live="polite"
    aria-roledescription="code block"
    lang="en" v-html="DOMPurify.sanitize(codeToHtml)"
  />
</template>
