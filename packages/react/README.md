 <p align="center">
<img align="center" src="https://raw.githubusercontent.com/selemondev/shiki-code-block/master/assets/logo/shiki-logo.svg" />
<h1 align="center">
Shiki Block React ✨
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

## React Usage

React Marquee uses shiki-block-react. You can check it out [here](https://marquee-dev.vercel.app/).

```js
import CodeBlock from 'shiki-block-react'
const code = `pnpm add shiki-block-react`
```

```js
<CodeBlock
  lang="bash"
  theme={{
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
    <CodeBlock lang="typescript" :code="code" :theme="{
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

| name          |     type      |       description         |
|:-------------:|:-------------:|:-------------------------:|
|  lang         | [BundledLanguage](https://shiki.style/languages) |  The language for the provided code. |
|  code         | `string` |  The code snippet. |
|  theme        | [BuiltinTheme](https://shiki.style/themes) |  A theme object with `light` and `dark` properties for dark and light mode support. |
|  transformers | [ShikiTransformer[]](https://shiki.style/packages/transformers) |  Adds extra features on top of Shiki |

## Credits go to this amazing project:

- [Shiki](https://shiki.style/) - A beautiful yet powerful syntax highlighter.

## License

[MIT](https://github.com/selemondev/shiki-code-block/blob/main/LICENSE) © [Selemon Brahanu](https://selemon.dev)
