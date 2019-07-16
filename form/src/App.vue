<template>
<div class="container">
  <form novalidate id="js-form" @submit.prevent="submit" method="post" ref="form">

    <name-field ref="name"></name-field>
    <age-field ref="age"></age-field>
    <sex-field ref="sex"></sex-field>
    <job-field ref="job"></job-field>
    <contact-us-field ref="contactUs"></contact-us-field>
    <agree-field ref="agree"></agree-field>

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
import AgreeField from './components/AgreeField.vue'
import axios from 'axios'

const POST_URL = 'http://localhost:3000/messages'

export default {
  name: 'app',
  components: {
    NameField,
    AgeField,
    SexField,
    JobField,
    ContactUsField,
    AgreeField
  },
  data: function() { 
    return {
      name: null
    }
  },
  methods: {
    submit: async function() {
      let validities = [
        this.$refs.name.valid,
        this.$refs.age.valid,
        // valid無いので除外。インターフェース合わせて入れる？
        //this.$refs.age,
        this.$refs.job.valid,
        this.$refs.contactUs.valid,
        this.$refs.agree.valid
      ]
      if (validities.every(e => e == true)) {
        var data = {};
        new FormData(this.$refs.form).forEach((value, key) => {
          data[key] = value;
        });
        const res = await axios.post(POST_URL, data)
        // eslint-disable-next-line no-console
        console.log(res)
      }
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
