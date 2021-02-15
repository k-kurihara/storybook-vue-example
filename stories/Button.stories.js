// ストーリーブックでは、UIコンポーネントをキャプチャしているページを「ストーリー」と呼ぶ
import MyButton from '../_src/js/components/Button.vue';

/**
 * default exportするオブジェクトには、ストーリーに対するメタ情報を定義していく
 */
export default {
  title: 'Components/Button',
  component: MyButton,
  argTypes: {
    link: {
      defaultValue: 'https://google.com',
    },
    default: { // default slot
      control: {
        type: 'text',
      },
      defaultValue: 'Default Label',
    },
  },
}

const Template = (args, { argTypes }) => {
  return ({
    props: Object.keys(argTypes),
    components: { MyButton },
    template: '<my-button v-bind="$props">{{$props.default}}</my-button>',
  });
}

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
