$.support.cors = true
$(document).ready(function(){  
  $('form#enterprise-contact-form').submit(function(e){
    e.preventDefault()

    $this = $(this)
    $this.children("input[type='email']").attr('disabled', 'disabled')
    $this.children("input[name='submit']").val("Thank You!")
    $.ajax({
      type: $this.attr('method'),
      url: $this.attr('action'),
      data: $this.serialize()
    })
  })
});
