;(function ($) {
  'use strict'

  /*==================================================================
    [ Validate ]*/
  var input = $('.validate-input .input100')
  var input1 = $('.validate-input .js-select2')

  $('.validate-form').on('submit', function () {
    var check = true

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i])
        check = false
      }
      //console.log(i+'mm'+$(input[i]).val()+' '+$(input[i]).attr('name'));
    }

    console.log('sdsad' + input1.length)
    for (var i = 0; i < input1.length; i++) {
      //console.log('sdsad'+$(input1[i]).val());
      if (validate(input1[i]) == false) {
        showValidate(input1[i])
        check = false
      }
    }

    /*for(var i=0; i<input2.length; i++) {
           var eduInput=input2;
        
		      console.log(i+' '+$(eduInput[i]).val()+' '+$(input[i]).attr('name'));
		    if (validate(eduInput[i])== false)
			{
		 	    showValidate(eduInput[i]);
                check=false;
			 }
	    }*/

    return check
  })

  $('.validate-form .input100').each(function () {
    $(this).focus(function () {
      hideValidate(this)
    })
  })

  $('.js-select2').change(function () {
    hideValidate(this)
  })

  function validate(input) {
    if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
      if (
        $(input)
          .val()
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
          ) == null
      ) {
        return false
      }
    } else {
      if ($(input).val().trim() == '') {
        return false
      }

      if (
        $(input).attr('name') == 'mobile' &&
        $(input).val().trim().length < 10
      ) {
        return false
      }

      if (
        $(input).attr('name') == 'referral_mobile[]' &&
        $(input).val().trim().length < 10
      ) {
        return false
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent()

    $(thisAlert).addClass('alert-validate')
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent()

    $(thisAlert).removeClass('alert-validate')
  }
})(jQuery)
