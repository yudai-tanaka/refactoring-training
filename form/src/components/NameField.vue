<template>
  <div class="field">
    <label class="label">名前</label>
    <div class="control">
      <input :value="value" class="input" type="text" name="name" required>
      <p class="help is-danger">名前を入力してください</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  }
}
</script>
