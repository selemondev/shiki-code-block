<script lang="ts">
  import type { BuiltinTheme, BundledLanguage, ShikiTransformer } from "shiki";
  import { convertCodeToHtml } from "../utils/codeToHtml.js";
  import type { ConvertOptions, Themes } from "../types/theme.interface.js";

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
  let codeToHtml = $state("");

  let {
        code,
		lang,
		theme,
		themes,
		transformers,
		defaultColor,
		cssVariablePrefix
  }: SingleThemeProps | MultiThemeProps = $props();

  const handleConvertCodeToHTML = async () => {
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
    return (codeToHtml = await convertCodeToHtml(
      code.trim(), lang, options
    ));
  };

  $effect(() => {
    handleConvertCodeToHTML();
  });
</script>

<div
  role="region"
  aria-labelledby="codeLabel"
  tabIndex={0}
  aria-live="polite"
  aria-roledescription="code block"
  lang="en"
  class="shiki--code--block"
>
  {@html codeToHtml}
</div>
