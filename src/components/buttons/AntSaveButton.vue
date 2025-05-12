<script lang="ts" setup>
import AntActionButton from './AntActionButton.vue';
import {
  Position, Size, Grouped, State,
} from '@antify/ui';
import {
  faFloppyDisk,
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
  canSave?: boolean;
  tooltipPosition?: Position;
}>(), {
  iconVariant: false,
  canSave: true,
});
</script>

<template>
  <AntActionButton
    :filled="true"
    :state="State.primary"
    :size="size"
    :disabled="disabled"
    :icon-left="iconVariant ? faFloppyDisk : undefined"
    :grouped="grouped"
    :skeleton="skeleton"
    :expanded="expanded"
    :submit="true"
    :has-permission="canSave"
    :tooltip-position="tooltipPosition"
    data-e2e="save-button"
    @click="$emit('click')"
    @blur="$emit('blur')"
  >
    <template
      v-if="!iconVariant"
      #default
    >
      Speichern
    </template>

    <template #invalidPermissionTooltipContent>
      <div>
        Du hast keine Berechtigung um Einträge zu speichern.<br> Bitte kontaktiere deinen Administrator
      </div>
    </template>
  </AntActionButton>
</template>
