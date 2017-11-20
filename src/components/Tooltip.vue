<template>
  <div class="tooltip" v-if="visible">
    <div class="tooltip__activator">
      <slot name="activator"></slot>
    </div>
    <span :class="getPosition">
      <span class="tooltip__text__header">
        {{ header }}
      </span>
      <br>
      <span class="tooltip__text__content">
        {{ content }} 
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'tooltip',
  props: {
    position: {
      type: String,
      required: true,
      validator (val) {
        let allowable = ['top', 'bottom']
        return allowable.indexOf(val) !== -1
      }
    },
    header: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getPosition () {
      return [
        'tooltip__text',
        'tooltip__text--' + this.position
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../styles/globals.scss";

.tooltip {
  position: relative;
  display: inline-block;
  box-sizing: border-box;

  &__activator {
    box-sizing: border-box;
  }

  &__text {
    visibility: hidden;
    width: $tooltip-width;
    background: $dark;
    color: $white;
    text-align: center;
    border-radius: $border-radius;
    padding: $tooltip-padding;
    position: absolute;
    z-index: 1;
    font-family: $font-family-regular;

    &__header {
      font-size: $font-small;
      padding-bottom: $tooltip-padding;
      font-weight: bold;
    }

    &__content {
      font-size: $font-small;
    }

    &--top {
      bottom: 100%;
      margin-left: -($tooltip-width/2)-5px;
    }

    &--bottom {
      top: 100%;
      left: 50%;
      margin-left: -($tooltip-width/2)-15px;
    }

    &--top::after {
      @include arrow;
      top: 100%;
      border-color: $dark transparent transparent transparent;
    }

    &--bottom::after {
      @include arrow;
      bottom: 100%;
      border-color: transparent transparent $dark transparent;
    }    
  }

  &:hover &__text {
    visibility: visible;
  }
}
</style>