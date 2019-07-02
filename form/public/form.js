(function() {
  var $form = $('#js-form')
  var $inputs = $form.find(':input')

  $inputs.each(function(i, input) {
    $(input).on('input', function(e) {
      var $ele = $(e.target)
      if ($ele.attr('required') && !$ele.val()) {
        $ele.addClass('is-danger')
      } else {
        $ele.removeClass('is-danger')
      }
    }).on('change', function(e) {
      var $ele = $(e.target)
      if ($ele.attr('required') && !$ele.val()) {
        $ele.addClass('is-danger')
      } else {
        $ele.removeClass('is-danger')
      }
    })
  })

  $('#js-job').on('change', function(e) {
    if (e.target.value === 'その他') {
      $('#js-job-name').find('input').attr('required', true)
      $('#js-job-name').show()
    } else {
      $('#js-job-name').find('input').attr('required', false)
      $('#js-job-name').hide()
    }
  })

  $form.on('submit', function(e) {
    e.preventDefault()
    var hasError = false
    $inputs.each(function(i, input) {
      var $input = $(input)
      if ($input.attr('required')) {
        if ($input.attr('type') === 'checkbox') {
          if (!$input.is(':checked')) {
            $input.addClass('is-danger')
            hasError = true
            $input.removeClass('is-danger')
          } else {
          }
        } else {
          if ($input.attr('required') && !$input.val()) {
            $input.addClass('is-danger')
            hasError = true
          } else {
            $input.removeClass('is-danger')
          }
        }
      }
    })
    if (hasError) {
      return alert('入力エラーがあります')
    }

    var data = {};
    new FormData(this).forEach(function(value, key){
      data[key] = value;
    });
    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/messages',
      data: data
    }).done(function(res, status, xhr) {
      console.log(res)
      alert('送信しました')
      location.reload()
    }).fail(function(xhr, status, error) {
      console.error(e)
    });
  })
})()