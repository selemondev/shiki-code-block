import type { BuiltinTheme } from "shiki";

type SingleThemeOptions = {
	theme: BuiltinTheme;
	themes?: never;
};

type MultiThemeOptions = {
	themes: Themes;
	theme?: never;
};

export type ConvertOptions = SingleThemeOptions | MultiThemeOptions;

export interface Themes {
	[key: string]: BuiltinTheme;
}
