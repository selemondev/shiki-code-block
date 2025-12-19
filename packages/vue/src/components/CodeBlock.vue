<script setup lang="ts">
import type { BuiltinTheme, BundledLanguage, ShikiTransformer } from "shiki";
import { ref, watch } from "vue";
import { convertCodeToHtml } from "@/lib/utils/codeToHtml";
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
	() => props,
	async (val) => {
		const baseOptions = {
			transformers: val.transformers ?? [],
			defaultColor: val.defaultColor,
			cssVariablePrefix: val.cssVariablePrefix,
		};

		let options: Options;

		if (val.theme) {
			options = {
				...baseOptions,
				theme: val.theme,
			};
		} else {
			if (!val.themes) {
				throw new Error("Either `theme` or `themes` must be provided");
			}

			options = {
				...baseOptions,
				themes: val.themes,
			};
		}

		codeToHtml.value = await convertCodeToHtml(
			val.code.trim(),
			val.lang,
			options,
		);
	},
	{ immediate: true, deep: true },
);
</script>
