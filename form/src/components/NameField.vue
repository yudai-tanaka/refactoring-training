<template>
  <div class="field">
    <label class="label">名前</label>
    <div class="control">
      <input v-model="value" class="input" type="text" name="name" required>
      <p v-if="!valid" class="help is-danger">名前を入力してください</p>
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