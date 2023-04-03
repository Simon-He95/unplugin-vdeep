<p align="center"><img src="./assets/kv.png" /></p>

Convert: deep and >>> in style to: deep()

## 📦 Install
```
npm i unplugin-vdeep
```

## 🌈 Usage

<details>
<summary>Vite</summary>

```ts
// vite.config.ts
import { vitePlugin } from 'unplugin-vdeep'
export default defineConfig({
  plugins: [vitePlugin()],
})
```

</details>
<br>
<details>
<summary>Rollup</summary>

```ts
// rollup.config.js
import { resolve } from 'path'
import { rollupTransformToUnocss } from 'unplugin-vdeep'
export default {
  plugins: [rollupTransformToUnocss(/* options */)],
}

</details>
<br>
<details>
<summary>Webpack</summary>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-vdeep').webpackTransformToUnocss({
      /* options */
    }),
  ],
}
```

</details>
<br>
<details>
<summary>Vue CLI</summary>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-vdeep').webpackTransformToUnocss({
        /* options */
      }),
    ],
  },
}
```

</details>
<br>
<details>
<summary>Esbuild</summary>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import { esbuildPlugin } from 'unplugin-vdeep'

build({
  plugins: [esbuildPlugin(/* options */)],
})
```

</details>


## License
[MIT](./LICENSE) License © 2022 [Simon He](https://github.com/Simon-He95)

<a href="https://github.com/Simon-He95/sponsor" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>


<span><div align="center">![sponsors](https://www.hejian.club/images/sponsors.jpg)</div></span>
