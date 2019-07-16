<template>
  <div class="field">
    <label class="label">お問い合わせ内容</label>
    <div class="control">
      <textarea v-model='value' ref="contactUs" class="textarea" name="body" required></textarea>
      <p v-if="!valid" class="help is-danger">お問い合わせ内容を入力してください</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
     return {
       value: ''
     }
  },
  computed: {
    valid: function() {
      return this.value != ''
    }
  }
}
</script>