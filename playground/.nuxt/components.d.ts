
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'NuxtWelcome': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'AntActionButton': typeof import("@antify/ui/components")['AntActionButton']
    'AntButton': typeof import("@antify/ui/components")['AntButton']
    'AntColorInput': typeof import("@antify/ui/components")['AntColorInput']
    'AntCreateButton': typeof import("@antify/ui/components")['AntCreateButton']
    'AntDatePicker': typeof import("@antify/ui/components")['AntDatePicker']
    'AntDeleteButton': typeof import("@antify/ui/components")['AntDeleteButton']
    'AntDuplicateButton': typeof import("@antify/ui/components")['AntDuplicateButton']
    'AntEditButton': typeof import("@antify/ui/components")['AntEditButton']
    'AntSaveAndNewButton': typeof import("@antify/ui/components")['AntSaveAndNewButton']
    'AntSaveButton': typeof import("@antify/ui/components")['AntSaveButton']
    'AntCrud': typeof import("@antify/ui/components")['AntCrud']
    'AntCrudDetail': typeof import("@antify/ui/components")['AntCrudDetail']
    'AntCrudDetailActions': typeof import("@antify/ui/components")['AntCrudDetailActions']
    'AntCrudDetailNav': typeof import("@antify/ui/components")['AntCrudDetailNav']
    'AntCrudTableFilter': typeof import("@antify/ui/components")['AntCrudTableFilter']
    'AntCrudTableNav': typeof import("@antify/ui/components")['AntCrudTableNav']
    'AntDeleteDialog': typeof import("@antify/ui/components")['AntDeleteDialog']
    'AntDialog': typeof import("@antify/ui/components")['AntDialog']
    'AntField': typeof import("@antify/ui/components")['AntField']
    'AntFormGroup': typeof import("@antify/ui/components")['AntFormGroup']
    'AntFormGroupLabel': typeof import("@antify/ui/components")['AntFormGroupLabel']
    'AntBaseInput': typeof import("@antify/ui/components")['AntBaseInput']
    'AntDropDown': typeof import("@antify/ui/components")['AntDropDown']
    'AntInputDescription': typeof import("@antify/ui/components")['AntInputDescription']
    'AntInputLabel': typeof import("@antify/ui/components")['AntInputLabel']
    'AntInputLimiter': typeof import("@antify/ui/components")['AntInputLimiter']
    'AntCheckbox': typeof import("@antify/ui/components")['AntCheckbox']
    'AntCheckboxGroup': typeof import("@antify/ui/components")['AntCheckboxGroup']
    'AntDateInput': typeof import("@antify/ui/components")['AntDateInput']
    'AntNumberInput': typeof import("@antify/ui/components")['AntNumberInput']
    'AntPasswordInput': typeof import("@antify/ui/components")['AntPasswordInput']
    'AntRadio': typeof import("@antify/ui/components")['AntRadio']
    'AntRadioGroup': typeof import("@antify/ui/components")['AntRadioGroup']
    'AntRangeSlider': typeof import("@antify/ui/components")['AntRangeSlider']
    'AntSearch': typeof import("@antify/ui/components")['AntSearch']
    'AntSelect': typeof import("@antify/ui/components")['AntSelect']
    'AntSwitch': typeof import("@antify/ui/components")['AntSwitch']
    'AntSwitcher': typeof import("@antify/ui/components")['AntSwitcher']
    'AntTagInput': typeof import("@antify/ui/components")['AntTagInput']
    'AntTextarea': typeof import("@antify/ui/components")['AntTextarea']
    'AntTextInput': typeof import("@antify/ui/components")['AntTextInput']
    'AntUnitInput': typeof import("@antify/ui/components")['AntUnitInput']
    'AntImageInput': typeof import("@antify/ui/components")['AntImageInput']
    'AntNavLeftLayout': typeof import("@antify/ui/components")['AntNavLeftLayout']
    'AntNavbar': typeof import("@antify/ui/components")['AntNavbar']
    'AntNavbarItem': typeof import("@antify/ui/components")['AntNavbarItem']
    'AntTable': typeof import("@antify/ui/components")['AntTable']
    'AntTabs': typeof import("@antify/ui/components")['AntTabs']
    'AntTransitionCollapseHeight': typeof import("@antify/ui/components")['AntTransitionCollapseHeight']
    'AntAccordion': typeof import("@antify/ui/components")['AntAccordion']
    'AntAccordionItem': typeof import("@antify/ui/components")['AntAccordionItem']
    'AntAlert': typeof import("@antify/ui/components")['AntAlert']
    'AntCard': typeof import("@antify/ui/components")['AntCard']
    'AntContent': typeof import("@antify/ui/components")['AntContent']
    'AntDropdown': typeof import("@antify/ui/components")['AntDropdown']
    'AntIcon': typeof import("@antify/ui/components")['AntIcon']
    'AntKeycap': typeof import("@antify/ui/components")['AntKeycap']
    'AntListGroup': typeof import("@antify/ui/components")['AntListGroup']
    'AntListGroupItem': typeof import("@antify/ui/components")['AntListGroupItem']
    'AntModal': typeof import("@antify/ui/components")['AntModal']
    'AntPagination': typeof import("@antify/ui/components")['AntPagination']
    'AntPopover': typeof import("@antify/ui/components")['AntPopover']
    'AntSkeleton': typeof import("@antify/ui/components")['AntSkeleton']
    'AntSpinner': typeof import("@antify/ui/components")['AntSpinner']
    'AntTag': typeof import("@antify/ui/components")['AntTag']
    'AntToast': typeof import("@antify/ui/components")['AntToast']
    'AntToaster': typeof import("@antify/ui/components")['AntToaster']
    'AntTooltip': typeof import("@antify/ui/components")['AntTooltip']
    'NuxtPage': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyAntActionButton': LazyComponent<typeof import("@antify/ui/components")['AntActionButton']>
    'LazyAntButton': LazyComponent<typeof import("@antify/ui/components")['AntButton']>
    'LazyAntColorInput': LazyComponent<typeof import("@antify/ui/components")['AntColorInput']>
    'LazyAntCreateButton': LazyComponent<typeof import("@antify/ui/components")['AntCreateButton']>
    'LazyAntDatePicker': LazyComponent<typeof import("@antify/ui/components")['AntDatePicker']>
    'LazyAntDeleteButton': LazyComponent<typeof import("@antify/ui/components")['AntDeleteButton']>
    'LazyAntDuplicateButton': LazyComponent<typeof import("@antify/ui/components")['AntDuplicateButton']>
    'LazyAntEditButton': LazyComponent<typeof import("@antify/ui/components")['AntEditButton']>
    'LazyAntSaveAndNewButton': LazyComponent<typeof import("@antify/ui/components")['AntSaveAndNewButton']>
    'LazyAntSaveButton': LazyComponent<typeof import("@antify/ui/components")['AntSaveButton']>
    'LazyAntCrud': LazyComponent<typeof import("@antify/ui/components")['AntCrud']>
    'LazyAntCrudDetail': LazyComponent<typeof import("@antify/ui/components")['AntCrudDetail']>
    'LazyAntCrudDetailActions': LazyComponent<typeof import("@antify/ui/components")['AntCrudDetailActions']>
    'LazyAntCrudDetailNav': LazyComponent<typeof import("@antify/ui/components")['AntCrudDetailNav']>
    'LazyAntCrudTableFilter': LazyComponent<typeof import("@antify/ui/components")['AntCrudTableFilter']>
    'LazyAntCrudTableNav': LazyComponent<typeof import("@antify/ui/components")['AntCrudTableNav']>
    'LazyAntDeleteDialog': LazyComponent<typeof import("@antify/ui/components")['AntDeleteDialog']>
    'LazyAntDialog': LazyComponent<typeof import("@antify/ui/components")['AntDialog']>
    'LazyAntField': LazyComponent<typeof import("@antify/ui/components")['AntField']>
    'LazyAntFormGroup': LazyComponent<typeof import("@antify/ui/components")['AntFormGroup']>
    'LazyAntFormGroupLabel': LazyComponent<typeof import("@antify/ui/components")['AntFormGroupLabel']>
    'LazyAntBaseInput': LazyComponent<typeof import("@antify/ui/components")['AntBaseInput']>
    'LazyAntDropDown': LazyComponent<typeof import("@antify/ui/components")['AntDropDown']>
    'LazyAntInputDescription': LazyComponent<typeof import("@antify/ui/components")['AntInputDescription']>
    'LazyAntInputLabel': LazyComponent<typeof import("@antify/ui/components")['AntInputLabel']>
    'LazyAntInputLimiter': LazyComponent<typeof import("@antify/ui/components")['AntInputLimiter']>
    'LazyAntCheckbox': LazyComponent<typeof import("@antify/ui/components")['AntCheckbox']>
    'LazyAntCheckboxGroup': LazyComponent<typeof import("@antify/ui/components")['AntCheckboxGroup']>
    'LazyAntDateInput': LazyComponent<typeof import("@antify/ui/components")['AntDateInput']>
    'LazyAntNumberInput': LazyComponent<typeof import("@antify/ui/components")['AntNumberInput']>
    'LazyAntPasswordInput': LazyComponent<typeof import("@antify/ui/components")['AntPasswordInput']>
    'LazyAntRadio': LazyComponent<typeof import("@antify/ui/components")['AntRadio']>
    'LazyAntRadioGroup': LazyComponent<typeof import("@antify/ui/components")['AntRadioGroup']>
    'LazyAntRangeSlider': LazyComponent<typeof import("@antify/ui/components")['AntRangeSlider']>
    'LazyAntSearch': LazyComponent<typeof import("@antify/ui/components")['AntSearch']>
    'LazyAntSelect': LazyComponent<typeof import("@antify/ui/components")['AntSelect']>
    'LazyAntSwitch': LazyComponent<typeof import("@antify/ui/components")['AntSwitch']>
    'LazyAntSwitcher': LazyComponent<typeof import("@antify/ui/components")['AntSwitcher']>
    'LazyAntTagInput': LazyComponent<typeof import("@antify/ui/components")['AntTagInput']>
    'LazyAntTextarea': LazyComponent<typeof import("@antify/ui/components")['AntTextarea']>
    'LazyAntTextInput': LazyComponent<typeof import("@antify/ui/components")['AntTextInput']>
    'LazyAntUnitInput': LazyComponent<typeof import("@antify/ui/components")['AntUnitInput']>
    'LazyAntImageInput': LazyComponent<typeof import("@antify/ui/components")['AntImageInput']>
    'LazyAntNavLeftLayout': LazyComponent<typeof import("@antify/ui/components")['AntNavLeftLayout']>
    'LazyAntNavbar': LazyComponent<typeof import("@antify/ui/components")['AntNavbar']>
    'LazyAntNavbarItem': LazyComponent<typeof import("@antify/ui/components")['AntNavbarItem']>
    'LazyAntTable': LazyComponent<typeof import("@antify/ui/components")['AntTable']>
    'LazyAntTabs': LazyComponent<typeof import("@antify/ui/components")['AntTabs']>
    'LazyAntTransitionCollapseHeight': LazyComponent<typeof import("@antify/ui/components")['AntTransitionCollapseHeight']>
    'LazyAntAccordion': LazyComponent<typeof import("@antify/ui/components")['AntAccordion']>
    'LazyAntAccordionItem': LazyComponent<typeof import("@antify/ui/components")['AntAccordionItem']>
    'LazyAntAlert': LazyComponent<typeof import("@antify/ui/components")['AntAlert']>
    'LazyAntCard': LazyComponent<typeof import("@antify/ui/components")['AntCard']>
    'LazyAntContent': LazyComponent<typeof import("@antify/ui/components")['AntContent']>
    'LazyAntDropdown': LazyComponent<typeof import("@antify/ui/components")['AntDropdown']>
    'LazyAntIcon': LazyComponent<typeof import("@antify/ui/components")['AntIcon']>
    'LazyAntKeycap': LazyComponent<typeof import("@antify/ui/components")['AntKeycap']>
    'LazyAntListGroup': LazyComponent<typeof import("@antify/ui/components")['AntListGroup']>
    'LazyAntListGroupItem': LazyComponent<typeof import("@antify/ui/components")['AntListGroupItem']>
    'LazyAntModal': LazyComponent<typeof import("@antify/ui/components")['AntModal']>
    'LazyAntPagination': LazyComponent<typeof import("@antify/ui/components")['AntPagination']>
    'LazyAntPopover': LazyComponent<typeof import("@antify/ui/components")['AntPopover']>
    'LazyAntSkeleton': LazyComponent<typeof import("@antify/ui/components")['AntSkeleton']>
    'LazyAntSpinner': LazyComponent<typeof import("@antify/ui/components")['AntSpinner']>
    'LazyAntTag': LazyComponent<typeof import("@antify/ui/components")['AntTag']>
    'LazyAntToast': LazyComponent<typeof import("@antify/ui/components")['AntToast']>
    'LazyAntToaster': LazyComponent<typeof import("@antify/ui/components")['AntToaster']>
    'LazyAntTooltip': LazyComponent<typeof import("@antify/ui/components")['AntTooltip']>
    'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const NuxtWelcome: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const AntActionButton: typeof import("@antify/ui/components")['AntActionButton']
export const AntButton: typeof import("@antify/ui/components")['AntButton']
export const AntColorInput: typeof import("@antify/ui/components")['AntColorInput']
export const AntCreateButton: typeof import("@antify/ui/components")['AntCreateButton']
export const AntDatePicker: typeof import("@antify/ui/components")['AntDatePicker']
export const AntDeleteButton: typeof import("@antify/ui/components")['AntDeleteButton']
export const AntDuplicateButton: typeof import("@antify/ui/components")['AntDuplicateButton']
export const AntEditButton: typeof import("@antify/ui/components")['AntEditButton']
export const AntSaveAndNewButton: typeof import("@antify/ui/components")['AntSaveAndNewButton']
export const AntSaveButton: typeof import("@antify/ui/components")['AntSaveButton']
export const AntCrud: typeof import("@antify/ui/components")['AntCrud']
export const AntCrudDetail: typeof import("@antify/ui/components")['AntCrudDetail']
export const AntCrudDetailActions: typeof import("@antify/ui/components")['AntCrudDetailActions']
export const AntCrudDetailNav: typeof import("@antify/ui/components")['AntCrudDetailNav']
export const AntCrudTableFilter: typeof import("@antify/ui/components")['AntCrudTableFilter']
export const AntCrudTableNav: typeof import("@antify/ui/components")['AntCrudTableNav']
export const AntDeleteDialog: typeof import("@antify/ui/components")['AntDeleteDialog']
export const AntDialog: typeof import("@antify/ui/components")['AntDialog']
export const AntField: typeof import("@antify/ui/components")['AntField']
export const AntFormGroup: typeof import("@antify/ui/components")['AntFormGroup']
export const AntFormGroupLabel: typeof import("@antify/ui/components")['AntFormGroupLabel']
export const AntBaseInput: typeof import("@antify/ui/components")['AntBaseInput']
export const AntDropDown: typeof import("@antify/ui/components")['AntDropDown']
export const AntInputDescription: typeof import("@antify/ui/components")['AntInputDescription']
export const AntInputLabel: typeof import("@antify/ui/components")['AntInputLabel']
export const AntInputLimiter: typeof import("@antify/ui/components")['AntInputLimiter']
export const AntCheckbox: typeof import("@antify/ui/components")['AntCheckbox']
export const AntCheckboxGroup: typeof import("@antify/ui/components")['AntCheckboxGroup']
export const AntDateInput: typeof import("@antify/ui/components")['AntDateInput']
export const AntNumberInput: typeof import("@antify/ui/components")['AntNumberInput']
export const AntPasswordInput: typeof import("@antify/ui/components")['AntPasswordInput']
export const AntRadio: typeof import("@antify/ui/components")['AntRadio']
export const AntRadioGroup: typeof import("@antify/ui/components")['AntRadioGroup']
export const AntRangeSlider: typeof import("@antify/ui/components")['AntRangeSlider']
export const AntSearch: typeof import("@antify/ui/components")['AntSearch']
export const AntSelect: typeof import("@antify/ui/components")['AntSelect']
export const AntSwitch: typeof import("@antify/ui/components")['AntSwitch']
export const AntSwitcher: typeof import("@antify/ui/components")['AntSwitcher']
export const AntTagInput: typeof import("@antify/ui/components")['AntTagInput']
export const AntTextarea: typeof import("@antify/ui/components")['AntTextarea']
export const AntTextInput: typeof import("@antify/ui/components")['AntTextInput']
export const AntUnitInput: typeof import("@antify/ui/components")['AntUnitInput']
export const AntImageInput: typeof import("@antify/ui/components")['AntImageInput']
export const AntNavLeftLayout: typeof import("@antify/ui/components")['AntNavLeftLayout']
export const AntNavbar: typeof import("@antify/ui/components")['AntNavbar']
export const AntNavbarItem: typeof import("@antify/ui/components")['AntNavbarItem']
export const AntTable: typeof import("@antify/ui/components")['AntTable']
export const AntTabs: typeof import("@antify/ui/components")['AntTabs']
export const AntTransitionCollapseHeight: typeof import("@antify/ui/components")['AntTransitionCollapseHeight']
export const AntAccordion: typeof import("@antify/ui/components")['AntAccordion']
export const AntAccordionItem: typeof import("@antify/ui/components")['AntAccordionItem']
export const AntAlert: typeof import("@antify/ui/components")['AntAlert']
export const AntCard: typeof import("@antify/ui/components")['AntCard']
export const AntContent: typeof import("@antify/ui/components")['AntContent']
export const AntDropdown: typeof import("@antify/ui/components")['AntDropdown']
export const AntIcon: typeof import("@antify/ui/components")['AntIcon']
export const AntKeycap: typeof import("@antify/ui/components")['AntKeycap']
export const AntListGroup: typeof import("@antify/ui/components")['AntListGroup']
export const AntListGroupItem: typeof import("@antify/ui/components")['AntListGroupItem']
export const AntModal: typeof import("@antify/ui/components")['AntModal']
export const AntPagination: typeof import("@antify/ui/components")['AntPagination']
export const AntPopover: typeof import("@antify/ui/components")['AntPopover']
export const AntSkeleton: typeof import("@antify/ui/components")['AntSkeleton']
export const AntSpinner: typeof import("@antify/ui/components")['AntSpinner']
export const AntTag: typeof import("@antify/ui/components")['AntTag']
export const AntToast: typeof import("@antify/ui/components")['AntToast']
export const AntToaster: typeof import("@antify/ui/components")['AntToaster']
export const AntTooltip: typeof import("@antify/ui/components")['AntTooltip']
export const NuxtPage: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyAntActionButton: LazyComponent<typeof import("@antify/ui/components")['AntActionButton']>
export const LazyAntButton: LazyComponent<typeof import("@antify/ui/components")['AntButton']>
export const LazyAntColorInput: LazyComponent<typeof import("@antify/ui/components")['AntColorInput']>
export const LazyAntCreateButton: LazyComponent<typeof import("@antify/ui/components")['AntCreateButton']>
export const LazyAntDatePicker: LazyComponent<typeof import("@antify/ui/components")['AntDatePicker']>
export const LazyAntDeleteButton: LazyComponent<typeof import("@antify/ui/components")['AntDeleteButton']>
export const LazyAntDuplicateButton: LazyComponent<typeof import("@antify/ui/components")['AntDuplicateButton']>
export const LazyAntEditButton: LazyComponent<typeof import("@antify/ui/components")['AntEditButton']>
export const LazyAntSaveAndNewButton: LazyComponent<typeof import("@antify/ui/components")['AntSaveAndNewButton']>
export const LazyAntSaveButton: LazyComponent<typeof import("@antify/ui/components")['AntSaveButton']>
export const LazyAntCrud: LazyComponent<typeof import("@antify/ui/components")['AntCrud']>
export const LazyAntCrudDetail: LazyComponent<typeof import("@antify/ui/components")['AntCrudDetail']>
export const LazyAntCrudDetailActions: LazyComponent<typeof import("@antify/ui/components")['AntCrudDetailActions']>
export const LazyAntCrudDetailNav: LazyComponent<typeof import("@antify/ui/components")['AntCrudDetailNav']>
export const LazyAntCrudTableFilter: LazyComponent<typeof import("@antify/ui/components")['AntCrudTableFilter']>
export const LazyAntCrudTableNav: LazyComponent<typeof import("@antify/ui/components")['AntCrudTableNav']>
export const LazyAntDeleteDialog: LazyComponent<typeof import("@antify/ui/components")['AntDeleteDialog']>
export const LazyAntDialog: LazyComponent<typeof import("@antify/ui/components")['AntDialog']>
export const LazyAntField: LazyComponent<typeof import("@antify/ui/components")['AntField']>
export const LazyAntFormGroup: LazyComponent<typeof import("@antify/ui/components")['AntFormGroup']>
export const LazyAntFormGroupLabel: LazyComponent<typeof import("@antify/ui/components")['AntFormGroupLabel']>
export const LazyAntBaseInput: LazyComponent<typeof import("@antify/ui/components")['AntBaseInput']>
export const LazyAntDropDown: LazyComponent<typeof import("@antify/ui/components")['AntDropDown']>
export const LazyAntInputDescription: LazyComponent<typeof import("@antify/ui/components")['AntInputDescription']>
export const LazyAntInputLabel: LazyComponent<typeof import("@antify/ui/components")['AntInputLabel']>
export const LazyAntInputLimiter: LazyComponent<typeof import("@antify/ui/components")['AntInputLimiter']>
export const LazyAntCheckbox: LazyComponent<typeof import("@antify/ui/components")['AntCheckbox']>
export const LazyAntCheckboxGroup: LazyComponent<typeof import("@antify/ui/components")['AntCheckboxGroup']>
export const LazyAntDateInput: LazyComponent<typeof import("@antify/ui/components")['AntDateInput']>
export const LazyAntNumberInput: LazyComponent<typeof import("@antify/ui/components")['AntNumberInput']>
export const LazyAntPasswordInput: LazyComponent<typeof import("@antify/ui/components")['AntPasswordInput']>
export const LazyAntRadio: LazyComponent<typeof import("@antify/ui/components")['AntRadio']>
export const LazyAntRadioGroup: LazyComponent<typeof import("@antify/ui/components")['AntRadioGroup']>
export const LazyAntRangeSlider: LazyComponent<typeof import("@antify/ui/components")['AntRangeSlider']>
export const LazyAntSearch: LazyComponent<typeof import("@antify/ui/components")['AntSearch']>
export const LazyAntSelect: LazyComponent<typeof import("@antify/ui/components")['AntSelect']>
export const LazyAntSwitch: LazyComponent<typeof import("@antify/ui/components")['AntSwitch']>
export const LazyAntSwitcher: LazyComponent<typeof import("@antify/ui/components")['AntSwitcher']>
export const LazyAntTagInput: LazyComponent<typeof import("@antify/ui/components")['AntTagInput']>
export const LazyAntTextarea: LazyComponent<typeof import("@antify/ui/components")['AntTextarea']>
export const LazyAntTextInput: LazyComponent<typeof import("@antify/ui/components")['AntTextInput']>
export const LazyAntUnitInput: LazyComponent<typeof import("@antify/ui/components")['AntUnitInput']>
export const LazyAntImageInput: LazyComponent<typeof import("@antify/ui/components")['AntImageInput']>
export const LazyAntNavLeftLayout: LazyComponent<typeof import("@antify/ui/components")['AntNavLeftLayout']>
export const LazyAntNavbar: LazyComponent<typeof import("@antify/ui/components")['AntNavbar']>
export const LazyAntNavbarItem: LazyComponent<typeof import("@antify/ui/components")['AntNavbarItem']>
export const LazyAntTable: LazyComponent<typeof import("@antify/ui/components")['AntTable']>
export const LazyAntTabs: LazyComponent<typeof import("@antify/ui/components")['AntTabs']>
export const LazyAntTransitionCollapseHeight: LazyComponent<typeof import("@antify/ui/components")['AntTransitionCollapseHeight']>
export const LazyAntAccordion: LazyComponent<typeof import("@antify/ui/components")['AntAccordion']>
export const LazyAntAccordionItem: LazyComponent<typeof import("@antify/ui/components")['AntAccordionItem']>
export const LazyAntAlert: LazyComponent<typeof import("@antify/ui/components")['AntAlert']>
export const LazyAntCard: LazyComponent<typeof import("@antify/ui/components")['AntCard']>
export const LazyAntContent: LazyComponent<typeof import("@antify/ui/components")['AntContent']>
export const LazyAntDropdown: LazyComponent<typeof import("@antify/ui/components")['AntDropdown']>
export const LazyAntIcon: LazyComponent<typeof import("@antify/ui/components")['AntIcon']>
export const LazyAntKeycap: LazyComponent<typeof import("@antify/ui/components")['AntKeycap']>
export const LazyAntListGroup: LazyComponent<typeof import("@antify/ui/components")['AntListGroup']>
export const LazyAntListGroupItem: LazyComponent<typeof import("@antify/ui/components")['AntListGroupItem']>
export const LazyAntModal: LazyComponent<typeof import("@antify/ui/components")['AntModal']>
export const LazyAntPagination: LazyComponent<typeof import("@antify/ui/components")['AntPagination']>
export const LazyAntPopover: LazyComponent<typeof import("@antify/ui/components")['AntPopover']>
export const LazyAntSkeleton: LazyComponent<typeof import("@antify/ui/components")['AntSkeleton']>
export const LazyAntSpinner: LazyComponent<typeof import("@antify/ui/components")['AntSpinner']>
export const LazyAntTag: LazyComponent<typeof import("@antify/ui/components")['AntTag']>
export const LazyAntToast: LazyComponent<typeof import("@antify/ui/components")['AntToast']>
export const LazyAntToaster: LazyComponent<typeof import("@antify/ui/components")['AntToaster']>
export const LazyAntTooltip: LazyComponent<typeof import("@antify/ui/components")['AntTooltip']>
export const LazyNuxtPage: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.6_@types+node@20.19.30_cac@6.7.14_db0@0.3.4_ioredis@5.9_bcb9828f51a29e7b0a9054c71d12fac0/node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
