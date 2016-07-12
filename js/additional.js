$.support.cors = true
$(document).ready(function(){  
  // $('form#enterprise-contact-form').submit(function(e){
  //   e.preventDefault()

  //   $this = $(this)
  //   $this.children("input[type='email']").attr('disabled', 'disabled')
  //   $this.children("input[name='submit']").val("Thank You!")
  //   $.ajax({
  //     type: $this.attr('method'),
  //     url: $this.attr('action'),
  //     data: $this.serialize()
  //   })
  // })

  $('.hide-placeholder-on-focus').on('focus', function(){
    $this = $(this)
    placeholder = $this.attr('placeholder')
    $this.data('placeholder', placeholder)
    $this.attr('placeholder', '')
  }).on('blur', function(){
    $this = $(this)
    placeholder = $this.data('placeholder')
    $this.attr('placeholder', placeholder)
  })
});

