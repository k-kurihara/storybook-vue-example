<template>
  <a :href="link" :target="target" :class="classes">
    <slot />
  </a>
</template>

<style lang="scss">
  .button {
    display: inline-block;
    border: 1px solid #f5f5f5;
    color: #000;
    font-style: 14px;
    padding: 12px;
    &:hover {
      opacity: .7;
    }
    &--primary {
      background: #2196f3;
      color: #fff;
    }
    &--block {
      display: block;
    }
  }
</style>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '_self',
    },
    primary: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classes() {
      return {
        'button': true,
        'button--primary': this.primary,
        'button--block': this.block,
      }
    }
  }
}
</script>