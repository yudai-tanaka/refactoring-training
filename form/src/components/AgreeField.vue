<template>
  <div class="field">
    <div class="control">
      <label class="checkbox">
        規約に同意する <input v-model="value" type="checkbox" name="agreement" required>
        <p v-if="!valid" class="help is-danger">規約に同意してください</p>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      value: false
    }
  },
  computed: {
    valid: function() {
      return this.value != ''
    }
  }
}
</script>
