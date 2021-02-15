<template>
  <div>
    <h1>Hello Vue</h1>
    <div class="button-wrap">
      <my-button>テキスト</my-button>
    </div>
    <div class="button-wrap">
      <my-button primary block>テキスト</my-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button-wrap {
  margin-top: 15px;
}
</style>

<script>
import '../css/reset.scss';
import MyButton from './components/Button.vue';

export default {
  components: {
    MyButton,
  }
}
</script>