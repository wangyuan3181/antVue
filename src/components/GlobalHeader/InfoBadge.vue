<template>
  <div class='info_badge'>
    <a-badge :count="count">
      <a-icon class="head-example" style="font-size: 16px; padding: 4px" type="bell" />
    </a-badge>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 5
    }
  },
  methods: {}
}
</script>
