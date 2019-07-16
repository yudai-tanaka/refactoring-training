<template>
  <div class="field">
    <label class="label">年齢</label>
    <div class="control">
      <input v-model="value" class="input" type="number" min="0" max="130" name="age" required>
      <p v-if="!valid" class="help is-danger">年齢を入力してください</p>
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