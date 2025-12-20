import { useEffect, useState } from "react";
import type { BuiltinTheme, BundledLanguage, ShikiTransformer } from "shiki";
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
function CodeBlock({
	code,
	lang,
	theme,
	themes,
	transformers,
	defaultColor,
	cssVariablePrefix,
}: SingleThemeProps | MultiThemeProps) {
	const [codeToHtml, setCodeToHtml] = useState("");

	const setInnerHTML = () => {
		return { __html: codeToHtml };
	};
	useEffect(() => {
		let isCancelled = false;
		const handleConvertCodeToHTML = async () => {
			const baseOptions = {
				transformers: transformers ?? [],
				defaultColor,
				cssVariablePrefix,
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
			const html = await convertCodeToHtml(code.trim(), lang, options);
			if (!isCancelled) {
				setCodeToHtml(html);
			}
		};
		handleConvertCodeToHTML();
		return () => {
			isCancelled = true;
		};
	}, [
		code,
		lang,
		theme,
		themes,
		transformers,
		defaultColor,
		cssVariablePrefix,
	]);
	return (
		<div
			role="region"
			aria-labelledby="codeLabel"
			aria-live="polite"
			aria-roledescription="code block"
			lang="en"
			className="shiki--code--block"
			dangerouslySetInnerHTML={setInnerHTML()}
		/>
	);
}

export default CodeBlock;
