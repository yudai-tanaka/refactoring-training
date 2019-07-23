<template>
  <div class="field">
    <label class="label">年齢</label>
    <div class="control">
      <input
        v-model="value"
        class="input"
        :class="{ 'is-danger': invalid }"
        type="number"
        min="0"
        max="130"
        name="age"
        required
        @input="input"
      />
      <p v-if="invalid" class="help is-danger">年齢を入力してください</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      value: '',
      invalid: false
    }
  },
  methods: {
    input() {
      this.invalid = this.value == ''
    }
  }
}
</script>
