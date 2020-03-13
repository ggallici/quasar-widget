<template>
  <div class="grid-stack-item" data-gs-x=x data-gs-y=y data-gs-width=w data-gs-height=h>
    <div class="grid-stack-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    w: {
      type: Number,
      required: true
    },
    h: {
      type: Number,
      required: true
    }
  }
};
</script>
