import {
	type BuiltinTheme,
	type BundledLanguage,
	codeToHtml,
	type ShikiTransformer,
} from "shiki";
import type { Themes } from "@/components/CodeBlock.vue";
export async function convertCodeToHtml(
	code: string,
	lang: BundledLanguage,
	theme: Themes,
	transformers?: ShikiTransformer[],
	defaultColor?: string,
	cssVariablePrefix?: string
) {
	return await codeToHtml(code, {
		lang,
		themes: theme,
		transformers,
		defaultColor,
		cssVariablePrefix
	});
}
