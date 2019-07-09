<template>
  <div>
    <div class="field">
      <label class="label">職業</label>
      <div class="control">
        <div class="select">
          <select name="job" id="js-job">
            <option>会社員</option>
            <option>自営業</option>
            <option>公務員</option>
            <option>学生</option>
            <option>その他</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field field-option" id="js-job-name">
      <label class="label">職業名</label>
      <div class="control">
        <input class="input" type="text" name="job-name">
        <p class="help is-danger">職業名を入力してください</p>
      </div>
    </div>
  </div>
</template>
