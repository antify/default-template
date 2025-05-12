import {
  type Meta, type StoryObj,
} from '@storybook/vue3';
import AntDeleteDialog from '../AntDeleteDialog.vue';
import AntDeleteButton from '../../buttons/AntDeleteButton.vue';

const meta: Meta<typeof AntDeleteDialog> = {
  title: 'Components/Dialogs/Delete Dialog',
  component: AntDeleteDialog,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AntDeleteDialog>;

export const Docs: Story = {
  render: (args) => ({
    components: {
      AntDeleteDialog,
      AntDeleteButton,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <div class="h-96">
      <AntDeleteButton @click="() => args.open = true"/>

      <AntDeleteDialog
        v-model:open="args.open"
        :entity="args.entity"
        v-bind="args"
      />
    </div>
    `,
  }),
  args: {
    open: false,
    entity: 'Lorem ipsum',
  },
};
