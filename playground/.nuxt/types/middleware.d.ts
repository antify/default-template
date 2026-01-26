import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = never
declare module "../../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}