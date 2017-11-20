<template>
  <div class="payment-links-view">
    <payment-link
      v-for="link in paymentLinks"
      :link="link.value"
      :image="link.image"
      :name="link.name"
      :key="link.id"
    ></payment-link>
  </div>
</template>

<script>
import PaymentLink from '@/components/PaymentLink'

export default {
  name: 'payment-links-view',
  computed: {
    paymentLinks () {
      return this.$store.getters.paymentLinks
    }
  },
  components: {
    'payment-link': PaymentLink
  }
}
</script>

<style lang="scss">
@import "../styles/globals.scss";

.payment-links-view {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-left: -($payment-link-indence);
}
</style>