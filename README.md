 <p align="center">
<img align="center" src="https://raw.githubusercontent.com/selemondev/shiki-code-block/master/assets/logo/shiki-logo.svg" />
<h1 align="center">
Shiki Code Block ✨
</h1>
</p>

Shiki Code Block is a Shiki based component that allows you to render code in any language and theme. It is highly customizable and supports both light and dark themes.

## Installation

You can use Shiki Code Block with your favourite framework or library. Install it as shown below

### React
<!-- automd:pm-install name="shiki-block-react" -->

```sh
# ✨ Auto-detect
npx nypm install shiki-block-react

# npm
npm install shiki-block-react

# yarn
yarn add shiki-block-react

# pnpm
pnpm install shiki-block-react

# bun
bun install shiki-block-react

# deno
deno install shiki-block-react
```

<!-- /automd -->

### Vue
<!-- automd:pm-install name="shiki-block-vue" -->

```sh
# ✨ Auto-detect
npx nypm install shiki-block-vue

# npm
npm install shiki-block-vue

# yarn
yarn add shiki-block-vue

# pnpm
pnpm install shiki-block-vue

# bun
bun install shiki-block-vue

# deno
deno install shiki-block-vue
```

<!-- /automd -->

### Svelte
<!-- automd:pm-install name="shiki-block-svelte" -->

```sh
# ✨ Auto-detect
npx nypm install shiki-block-svelte

# npm
npm install shiki-block-svelte

# yarn
yarn add shiki-block-svelte

# pnpm
pnpm install shiki-block-svelte

# bun
bun install shiki-block-svelte

# deno
deno install shiki-block-svelte
```

<!-- /automd -->


## Svelte Usage

Svelte Marquee uses shiki-block-svelte. You can check it out [here](https://svelte-marquee.vercel.app/).

```js
import CodeBlock from 'shiki-block-svelte'
const code = `pnpm add shiki-block-svelte`
```
```js
<div style="display: grid; place-items: center; height: 100vh; width: 100vw">
  <CodeBlock
    lang="typescript"
    themes={{
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    }}
    code={code}
  />
</div>
```

### Svelte Styles

```css
/* Dark mode */
@media (prefers-color-scheme: dark) {
:global(.shiki),
:global(.shiki span) {
      color: var(--shiki-dark) !important;
      background-color: var(--shiki-dark-bg) !important;
      /* Optional, if you also want font styles */
      font-style: var(--shiki-dark-font-style) !important;
      font-weight: var(--shiki-dark-font-weight) !important;
      text-decoration: var(--shiki-dark-text-decoration) !important;
  }
}
:global(html.dark .shiki),
:global(html.dark .shiki span) {
    color: var(--shiki-dark) !important;
    background-color: var(--shiki-dark-bg) !important;
    font-style: var(--shiki-dark-font-style) !important;
    font-weight: var(--shiki-dark-font-weight) !important;
    text-decoration: var(--shiki-dark-text-decoration) !important;
}

:global(.shiki--code--block) {
    width: 100%;
}
:global(pre) {
    z-index: 1;
    padding: 24px;
    border-radius: 10px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    position: relative;
    background-color: #f9f9f9 !important;
}
:global(code) {
    display: block;
    line-height: 1.7;
    font-size: 15px;
}
```

## React Usage

React Marquee uses shiki-block-react. You can check it out [here](https://marquee-dev.vercel.app/).

```js
import CodeBlock from 'shiki-block-react'
const code = `pnpm add shiki-block-react`
```

```js
<CodeBlock
  lang="bash"
  themes={{
    light: 'vitesse-light',
    dark: 'vitesse-dark',
  }}
  code={code}
/>
```

### React Styles
```css
/* Dark mode */
@media (prefers-color-scheme: dark) {
    .shiki,
    .shiki span {
      color: var(--shiki-dark) !important;
      background-color: var(--shiki-dark-bg) !important;
      /* Optional, if you also want font styles */
      font-style: var(--shiki-dark-font-style) !important;
      font-weight: var(--shiki-dark-font-weight) !important;
      text-decoration: var(--shiki-dark-text-decoration) !important;
    }
}

html.dark .shiki,
html.dark .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}

.shiki--code--block {
  width: 100%;
}

pre {
  z-index: 1;
  padding: 24px;
  border-radius: 10px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;
  background-color: #F9F9F9 !important;
}

code {
  display: block;
  line-height: 1.7;
  font-size: 15px;
}
```

## Vue 3 Usage

Vue 3 Marquee uses shiki-block-vue. You can check it out [here](https://vue3-marquee-component.vercel.app/).

```js
import CodeBlock from 'shiki-block-vue'
const code = `pnpm add shiki-block-vue`
```

```js
<div style="display: grid; place-items: center; height: 100vh; width: 100vw;">
    <CodeBlock lang='typescript' :code="code" :themes="{
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }" />
</div>
```

### Vue 3 Styles

```css
<style>
/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .shiki,
  .shiki span {
    color: var(--shiki-dark) !important;
    background-color: var(--shiki-dark-bg) !important;
    /* Optional, if you also want font styles */
    font-style: var(--shiki-dark-font-style) !important;
    font-weight: var(--shiki-dark-font-weight) !important;
    text-decoration: var(--shiki-dark-text-decoration) !important;
  }
}

html.dark .shiki,
html.dark .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}

.shiki--code--block {
  width: 100%;
}

pre {
  z-index: 1;
  padding: 24px;
  border-radius: 10px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;
  background-color: #F9F9F9 !important;
}

code {
  display: block;
  line-height: 1.7;
  font-size: 15px;
}
</style>
```

## Usage With A Shiki Transformer

Check out the [shiki-transformer-copy-button](https://github.com/selemondev/shiki-transformer-copy-button).

Install the **shiki-transformer-copy-button** as shown below:

```bash
pnpm add @selemondev/shiki-transformer-copy-button
```

### Import

```js
import { transformerCopyButton } from '@selemondev/shiki-transformer-copy-button'
```

```js
<div style="display: grid; place-items: center; height: 100vh; width: 100vw;">
    <CodeBlock lang="typescript" :code="code" :themes="{
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }" :transformers="[
      transformerCopyButton({
        duration: 3000,
        display: 'ready',
        successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
        copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
      })
    ]" />
</div>
```

## Props

| name | type | description |
|:----:|:----:|:-----------:|
| `lang` | [BundledLanguage](https://shiki.style/languages) | The language for the provided code snippet. |
| `code` | `string` | The code snippet to highlight. |
| `theme` | [BuiltinTheme](https://shiki.style/themes) | **Single theme mode.** Use one static theme. Mutually exclusive with `themes`. |
| `themes` | `{ light: BuiltinTheme; dark: BuiltinTheme }` | **Multi-theme mode.** Enables light/dark theming using CSS variables. Mutually exclusive with `theme`. |
| `defaultColor` | `"light" \| "dark"` | Initial active theme when using `themes`. Defaults to `"light"`. |
| `cssVariablePrefix` | `string` | Prefix for generated CSS variables when using `themes`. Defaults to `"shiki"`. |
| `transformers` | [ShikiTransformer[]](https://shiki.style/packages/transformers) | Adds extra features on top of Shiki. |

- Use **either** `theme` **or** `themes`, never both.
- `defaultColor` and `cssVariablePrefix` only apply when using `themes`.
- The API enforces these rules at the type level.

## Credits go to this amazing project:

- [Shiki](https://shiki.style/) - A beautiful yet powerful syntax highlighter.
