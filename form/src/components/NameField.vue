<template>
  <div class="field">
    <label class="label">名前</label>
    <div class="control">
      <input
        v-model="value"
        class="input"
        :class="{ 'is-danger': invalid }"
        type="text"
        name="name"
        required
        @input="input"
      />
      <p v-if="invalid" class="help is-danger">名前を入力してください</p>
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
