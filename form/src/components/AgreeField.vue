<template>
  <div class="field">
    <div class="control">
      <label class="checkbox">
        規約に同意する
        <input
          v-model="value"
          :class="{ 'is-danger': invalid }"
          type="checkbox"
          name="agreement"
          required
          @input="input"
        />
        <p v-if="invalid" class="help is-danger">規約に同意してください</p>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      value: false,
      invalid: false
    }
  },
  methods: {
    input() {
      this.invalid = this.value
    }
  }
}
</script>
