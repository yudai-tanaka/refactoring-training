<template>
<div class="container">
  <form novalidate id="js-form" @submit.prevent="submit" method="post" ref="form">

    <name-field v-model="name"></name-field>
    <age-field></age-field>
    <sex-field></sex-field>
    <job-field></job-field>
    <contact-us-field></contact-us-field>



    <div class="field">
      <div class="control">
        <label class="checkbox">
          規約に同意する <input type="checkbox" name="agreement" required>
          <p class="help is-danger">規約に同意してください</p>
        </label>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <button type="submit" class="button is-link">送信</button>
      </div>
    </div>
  </form>
</div>
</template>

<script>
import AgeField from './components/AgeField.vue'
import ContactUsField from './components/ContactUsField.vue'
import NameField from './components/NameField.vue'
import JobField from './components/JobField.vue'
import SexField from './components/SexField.vue'

export default {
  name: 'app',
  components: {
    NameField,
    AgeField,
    SexField,
    JobField,
    ContactUsField
  },
  data: function() { 
    return {
      name: null
    }
  },
  methods: {
    submit: function(e) {
      // eslint-disable-next-line no-console
      console.log(this.name)
      // eslint-disable-next-line no-console
      console.log(e)

      var data = {};
      new FormData(this.$refs.form).forEach((value, key) => {
        data[key] = value;
       });
      // eslint-disable-next-line no-console
      console.log(data)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
