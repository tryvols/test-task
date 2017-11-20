<template>
  <a :href="link">
    <div class="payment-link">
      <div class="payment-link__helper">
        <slot name="helper"></slot>
      </div>
      <div class="payment-link__image">
        <img :src="image">
      </div>
      <span class="payment-link__name">
        {{ name }}
      </span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'payment-link',
  props: {
    link: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "../styles/globals.scss";

.payment-link {
  display: flex;
  box-sizing: border-box;
  width: 172px;
  height: 172px;
  padding: 15px;
  background: $white;
  border-radius: $border-radius;
  box-shadow: 0 1px 1px 0 rgba(215, 216, 219, 0.5);
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: $payment-link-indence;
  margin-left: $payment-link-indence;
  color: $dark;

  &:hover {
    box-shadow: 0 5px 10px 0 rgba(45, 52, 64, 0.2);
  }

  &__helper {
    position: absolute;
    top: 11px;
    right: 11px;
  }

  &__name {
    font-size: $font-middle;
    font-family: $font-family-regular;
    height: 20px;
  }

  &__image img {
    width: 100px;
    height: 100px;
  }
}
</style>