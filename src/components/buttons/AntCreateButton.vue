<script lang="ts" setup>
import AntActionButton from './AntActionButton.vue';
import {
  Position, Size, Grouped, State,
} from '@antify/ui';
import {
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

defineEmits([
  'click',
  'blur',
]);
withDefaults(defineProps<{
  iconVariant?: boolean;
  size?: Size;
  disabled?: boolean;
  grouped?: Grouped;
  skeleton?: boolean;
  expanded?: boolean;
  canCreate?: boolean;
  tooltipPosition?: Position;
}>(), {
  iconVariant: false,
  canCreate: true,
});
</script>

<template>
  <AntActionButton
    :filled="false"
    :state="State.primary"
    :size="size"
    :disabled="disabled"
    :icon-left="iconVariant ? faPlus : undefined"
    :grouped="grouped"
    :skeleton="skeleton"
    :expanded="expanded"
    :has-permission="canCreate"
    :tooltip-position="tooltipPosition"
    data-e2e="create-button"
    @click="$emit('click')"
    @blur="$emit('blur')"
  >
    <template
      v-if="!iconVariant"
      #default
    >
      Erstellen
    </template>

    <template #invalidPermissionTooltipContent>
      <div>
        Du hast keine Berechtigung um Einträge zu erstellen.<br> Bitte kontaktiere deinen Administrator
      </div>
    </template>
  </AntActionButton>
</template>
