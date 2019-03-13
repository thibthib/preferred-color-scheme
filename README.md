# 🔆 preferred-color-scheme 🌙

[Really small](https://bundlephobia.com/result?p=preferred-color-scheme@1.0.0) package exporting utility functions to read the user's [preferred color scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme). It can be useful when trying to match web applications colors to macOS theme selection.

## Installation and usage

```bash
yarn add preferred-color-scheme
```

```bash
npm install preferred-color-scheme
```

```js
import { getPreferredColorScheme } from 'preferred-color-scheme';

const preferredColorScheme = getPreferredColorScheme();
```

## API

### getPreferredColorScheme

_Calculate which ColorScheme is the user's preferred one_

➡️ **returns** ColorScheme: either "dark", "ligh", or "no-preference"
