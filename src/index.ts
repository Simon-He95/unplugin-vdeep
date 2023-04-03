import fsp from 'fs/promises'
import { createUnplugin } from 'unplugin'

function isVue(src: string) {
  return src.endsWith('.vue')
}

export const unplugin = createUnplugin(() => {
  return {
    name: 'unplugin-vdeep',
    // webpack's id filter is outside of loader logic,
    // an additional hook is needed for better perf on webpack
    transformInclude(id) {
      return id.endsWith('.vue')
    },
    // just like rollup transform
    transform(src: any, id: string) {
      if (id.endsWith('.vue')) {
        const transformData = src.replace(
          /(?:\/deep\/|>>>)([\w.,\n\s-]+){$/gms,
          (e: string, r: string) => `:deep(${r}){`,
        )
        if (transformData !== src)
          fsp.writeFile(id, transformData, 'utf-8')

        return transformData
      }
    },
    handleHotUpdate({ file, server }: any) {
      if (isVue(file)) {
        console.log('reloading vue file...')
        server.ws.send({
          type: 'full-reload',
          path: '*',
        })
      }

      return []
    },
    // more hooks coming
  }
})

export const vitePlugin = unplugin.vite
export const rollupPlugin = unplugin.rollup
export const webpackPlugin = unplugin.webpack
export const rspackPlugin = unplugin.rspack
export const esbuildPlugin = unplugin.esbuild
