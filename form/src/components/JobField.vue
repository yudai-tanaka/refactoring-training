<template>
  <div>
    <div class="field">
      <label class="label">職業</label>
      <div class="control">
        <div class="select">
          <select @change="clearJobName" v-model="job" name="job" id="js-job">
            <option>会社員</option>
            <option>自営業</option>
            <option>公務員</option>
            <option>学生</option>
            <option>その他</option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="job == 'その他'" class="field field-option" id="js-job-name">
      <label class="label">職業名</label>
      <div class="control">
        <input
          v-model="jobName"
          class="input"
          :class="{ 'is-danger': invalid }"
          type="text"
          name="job-name"
          @input="input"
        />
        <p v-if="invalid" class="help is-danger">職業名を入力してください</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      job: '会社員',
      jobName: '',
      invalid: false
    }
  },
  methods: {
    clearJobName: function() {
      if (this.job != 'その他') {
        this.jobName = ''
      }
    },
    input() {
      this.invalid = this.job == 'その他' && !this.jobName
    }
  }
}
</script>
