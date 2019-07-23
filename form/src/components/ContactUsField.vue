<template>
  <div class="field">
    <label class="label">お問い合わせ内容</label>
    <div class="control">
      <textarea
        v-model="value"
        ref="contactUs"
        class="textarea"
        :class="{ 'is-danger': invalid }"
        name="body"
        required
        @input="input"
      ></textarea>
      <p v-if="invalid" class="help is-danger">
        お問い合わせ内容を入力してください
      </p>
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
