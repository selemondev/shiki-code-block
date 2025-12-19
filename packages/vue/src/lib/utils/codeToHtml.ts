import { type BundledLanguage, codeToHtml, type ShikiTransformer } from "shiki";
import type { ConvertOptions } from "@/types/theme.interface";
export async function convertCodeToHtml(
	code: string,
	lang: BundledLanguage,
	options: ConvertOptions & {
		transformers?: ShikiTransformer[];
		defaultColor?: string;
		cssVariablePrefix?: string;
	},
) {
	return codeToHtml(code, {
		lang,
		...options,
	});
}
