<script lang="ts" setup>
/**
 * This button is used for everything what is the primary
 * action like save, confirm, create, etc.
 */
import type {
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {
  computed, useSlots,
} from 'vue';
import {
  AntButton,
  Position, State, InputState, Size, Grouped,
  hasSlotContent,
} from '@antify/ui';

defineEmits([
  'click',
  'blur',
]);
const props = withDefaults(defineProps<{
  iconLeft?: IconDefinition;
  iconRight?: IconDefinition;
  size?: Size;
  disabled?: boolean;
  grouped?: Grouped;
  state?: State;
  skeleton?: boolean;
  expanded?: boolean;
  filled?: boolean;
  hasPermission?: boolean;
  tooltipPosition?: Position;
  tooltipState?: InputState;
  tooltipDelay?: number;
  submit?: boolean;
  dataE2e?: string;
}>(), {
  state: State.primary,
  hasPermission: true,
  filled: true,
  submit: false,
  dataE2e: 'action-button',
});
const slots = useSlots();
const hasTooltip = computed(() => !props.skeleton && !props.disabled && props.hasPermission && hasSlotContent(slots['tooltipContent']));
const hasPermissionTooltip = computed(() => !props.skeleton && !props.disabled && !props.hasPermission && hasSlotContent(slots['invalidPermissionTooltipContent']));
</script>

<template>
  <AntButton
    :icon-left="iconLeft"
    :icon-right="iconRight"
    :size="size"
    :disabled="disabled || !hasPermission"
    :grouped="grouped"
    :skeleton="skeleton"
    :expanded="expanded"
    :state="state"
    :filled="filled"
    :tooltip-position="tooltipPosition"
    :tooltip-state="hasPermissionTooltip ? InputState.info : tooltipState"
    :tooltip-delay="hasPermissionTooltip ? 300 : tooltipDelay"
    :submit="submit"
    :data-e2e="dataE2e"
    @click="$emit('click')"
    @blur="$emit('blur')"
  >
    <slot />

    <template #tooltip-content>
      <slot
        v-if="hasTooltip"
        name="tooltipContent"
      />

      <slot
        v-if="hasPermissionTooltip"
        name="invalidPermissionTooltipContent"
      />
    </template>
  </AntButton>
</template>
