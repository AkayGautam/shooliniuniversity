<!DOCTYPE html>
<html lang="en">
<head>
	<title>Buddy Referrals</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->
</head>
<body>


	<div class="container-contact100" >
		<div class="wrap-contact100">
			<form class="contact100-form validate-form" style="padding:30px 30px 30px 30px" action="buddy.php"  method="post">
				<span class="contact100-form-title">
					Buddy Referral Form
				</span>
				<?php if($message){ ?>
				<div class="alert alert-success">
				    <?php echo $message; unset($_SESSION['message']);?>
				</div>
				<?php } ?>
               <div class="row">
                <div class="col-md-12 mb-2">
                 <div class="card" >
                    <div class="card-header"><span class="text-uppercase" >
					Your Information</span></div>
					</div>
				  </div>
				</div>
                <div class="row" >
				<div class="col-md-6">
				    <div class="wrap-input100 validate-input"  data-validate="Name is required">
					<label class="label-input100" for="name">Full name</label>
					<input id="name" class="input100 nonref" type="text" name="name" placeholder="Enter your name...">
					<span class="focus-input100"></span>
					</div>
				</div>
				<div class="col-md-6" >
				     <div class="wrap-input100 validate-input" data-validate="Reg. No. is required">
    					<label class="label-input100" for="reg_no">Reg. No.</label>
    					<input id="reg_no" class="input100 nonref" type="text" name="reg_no" placeholder="Enter your registration no...">
    					<span class="focus-input100"></span>
					</div>
				</div>
				</div>
				<div class="row" >
                    <div class="col-md-6">
                      <div class="wrap-input100 validate-input" data-validate = "Valid course & semester is required">
					    <label class="label-input100" for="course">Course & Semester</label>
					    <input id="course" class="input100 nonref" type="text" name="course" placeholder="Enter your course & semester">
					    <span class="focus-input100"></span>
				     </div>
				    </div>
				     <div class="col-md-6">
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					    <label class="label-input100" for="email">Email Address</label>
					    <input id="email" class="input100 nonref" type="email" name="email" placeholder="Enter your email...">
					    <span class="focus-input100"></span>
				    </div>
				    </div>
				</div>
				<div class="row" >
				    <div class="col-md-6">
				    <div class="wrap-input100 validate-input" data-validate = "Valid Contact No. is required">
					    <label class="label-input100" for="mobile">Contact No.</label>
				    	<input id="mobile" class="input100 nonref" type="number" name="mobile" minlength="10" placeholder="Enter your contact no...">
				    	<span class="focus-input100"></span>
				    </div>
				    </div>
				    <div class="col-md-6">
                    <div class="wrap-input100 ">
				    	<div class="label-input100">Student Type</div>
				    	<div class="validate-input" data-validate = "Student type is required">
						<select class="js-select2 options" name="student_type">
							<option value="">Please select one</option>
							<option value="Current Student">Current Student</option>
							<option value="Alumni">Alumni</option>
						</select>
						<div class="dropDownSelect2"></div>
					</div>
				    	<span class="focus-input100"></span>
			    	</div>
			    	</div>
                </div>
                <div class="row">
                  <div class="col-md-12 mb-2">
                    <div class="card" >
                    <div class="card-header"><span class="text-uppercase" >
					Referrals</span></div>
					</div>
				  </div>
				</div>
					
                <div id="referrals" data-referral-count="1">
                 <div class="row">   
                 <div class="col-md-12">
                    <div class="wrap-input100">
				    	<div class="label-input100">My buddy is currently in</div>
				    	<div class="validate-input" data-validate = "Buddy qualification is required">
						<select class="js-select2 options" id="referral_qualification" name="referral_qualification">
							<option value="">Please select one</option>
							<option value="+2">+2</option>
							<option value="UG (Final Year)">UG (Final Year)</option>
							<option value="PG (Final Year)">PG (Final Year)</option>
						</select>
						<div class="dropDownSelect2"></div>
					</div>
				    	<span class="focus-input100"></span>
			    	</div>
			    	</div>  
			    </div>
                <div class="card" >
                 <div class="card-header"><span class="text-uppercase" >
					Referral Information 1</span></div>
				   <div class="card-body">
    				 <div class="row" >
    				<div class="col-md-6">
    				    <div class="wrap-input100 validate-input"  data-validate="Full Name is required">
    					<label class="label-input100" for="referral_name">Full name</label>
    					<input id="referral_name" class="input100 ref" type="text" name="referral_name[]" placeholder="Enter buddy name...">
    					<span class="focus-input100"></span>
    					</div>
    				</div>
    				<div class="col-md-6" >
    				     <div class="wrap-input100 validate-input" data-validate="Father Name is required">
        					<label class="label-input100" for="referral_father_name">Father Name</label>
        					<input id="referral_father_name" class="input100 ref" type="text" name="referral_father_name[]" placeholder="Enter buddy's father name...">
        					<span class="focus-input100"></span>
    					</div>
    				</div>
    </div>
    				<div class="row" >
                        <div class="col-md-6">
                          <div class="wrap-input100 validate-input" data-validate = "Location is required">
    					    <label class="label-input100" for="referral_location">Location</label>
    					    <input id="referral_location" class="input100 ref" type="text" name="referral_location[]" placeholder="Enter buddy's location">
    					    <span class="focus-input100"></span>
    				     </div>
    				    </div>
    				     <div class="col-md-6">
                        <div class="wrap-input100 plus2 ">
    				    	<div class="label-input100">Interested In</div>
    				    	<div class="validate-input" data-validate = "Interest is required">
    						<!--<select class="js-select2 ref" name="referral_discipline[]">
    							<option value="">Please select one</option>
    							<option value="Medical">Medical</option>
    							<option value="Non Medical">Non Medical</option>
    							<option value="Commerce">Commerce</option>
    							<option value="Arts">Arts</option>
    						</select>-->
    						<select id="referral_discipline" name="referral_discipline[]"  class="js-select2 required" required>
                                    <option value="">Select Interest</option>
                                    <?php echo getAdmissionCourses($res['course'],$con); ?>
                                                                   
                            </select>
    						<div class="dropDownSelect2"></div>
    					</div>
    				    	<span class="focus-input100"></span>
    			    	</div>
    			    	<!-- <div class="wrap-input100  ug" style="display:none" data-validate = "Discipline is required">
    				     <label class="label-input100" for="referral_discipline">Discipline</label>
    					    <input id="referral_discipline" class="input100 ref" type="text" name="referral_discipline[]" placeholder="Enter buddy's discipline">
    				    	<span class="focus-input100"></span>
    			    	</div>-->
    			    	</div>
    				     
    </div>
    				<div class="row" >
    				    <div class="col-md-6">
    				    <div class="wrap-input100 validate-input" data-validate = "Valid Contact No. is required">
    					    <label class="label-input100" for="referral_mobile">Contact No.</label>
    				    	<input id="referral_mobile" class="input100 ref" type="number" name="referral_mobile[]" minlength="10" placeholder="Enter buddy's contact">
    				    	<span class="focus-input100"></span>
    				    </div>
    				    </div>
    				    <div class="col-md-6">
    					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
    					    <label class="label-input100" for="referral_email">Email Address</label>
    					    <input id="referral_email" class="input100 ref" type="email" name="referral_email[]" placeholder="Enter  buddy's email...">
    					    <span class="focus-input100"></span>
    				    </div>
    				    </div>
    				   
                </div>
                  </div>
                </div>
                </div>
                
                <div class="mb-2 mt-2 text-white" ><a class="btn btn-primary" style="cursor:pointer;" id="add_more">Add More</a></div>
			

				<div class="container-contact100-form-btn">
					<button class="contact100-form-btn" type="submit" name="submit">
						Submit
					</button>
				</div>

				<!--<div class="contact100-form-social flex-c-m">
					<a href="#" class="contact100-form-social-item flex-c-m bg1 m-r-5">
						<i class="fa fa-facebook-f" aria-hidden="true"></i>
					</a>

					<a href="#" class="contact100-form-social-item flex-c-m bg2 m-r-5">
						<i class="fa fa-twitter" aria-hidden="true"></i>
					</a>

					<a href="#" class="contact100-form-social-item flex-c-m bg3">
						<i class="fa fa-youtube-play" aria-hidden="true"></i>
					</a>
				</div>-->
			</form>

			<div class="contact100-more flex-col-c-m" style="background-image: url('images/bg-05a.jpg');">

			</div>
		</div>
	</div>





<!--===============================================================================================-->
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
	<script>
		$(".js-select2").each(function(){
			$(this).select2({
				minimumResultsForSearch: 20,
				dropdownParent: $(this).next('.dropDownSelect2')
			});
		})
		$(".js-select2").each(function(){
			$(this).on('select2:open', function (e){
				$(this).parent().next().addClass('eff-focus-selection');
			});
		});
		$(".js-select2").each(function(){
			$(this).on('select2:close', function (e){
				$(this).parent().next().removeClass('eff-focus-selection');
			});
		});
		
	/*	$("#referral_qualification").change(function(){
		    if($(this).val() ==='+2'){
		        $('.plus2').show();
		        $('.ug').hide();
		    }
		     if($(this).val() ==='UG (Final Year)'){
		        $('.plus2').hide();
		        $('.ug').show();
		    }
		});*/
		
		
		$("#add_more").click(function(){
		    let referral_qualification = $('#referral_qualification').val();
		    let plusTwoStyle='block';
		    let ugStyle='none';
		    if(referral_qualification==='+2'){
		        plusTwoStyle='block';
		        ugStyle='none';
		    }
		    if(referral_qualification==='UG (Final Year)'){
		        plusTwoStyle='none';
		        ugStyle='block';
		    }
		   let referral_count = parseInt($('#referrals').data('referral-count'))+1;
		   $('#referrals').data('referral-count',referral_count);
		   console.log(referral_count);
		    let referral='<div class="card mt-2">'+
                 '<div class="card-header"><span class="text-uppercase" >'+
				'	Referral Information '+ referral_count +'</span></div>'+
				   '<div class="card-body">'+
    				 '<div class="row" >'+
    				'<div class="col-md-6">'+
    				    '<div class="wrap-input100 validate-input"  data-validate="Full Name is required">'+
    					'<label class="label-input100" for="referral_name">Full name</label>'+
    					'<input id="referral_name" class="input100 ref" type="text" name="referral_name[]" placeholder="Enter buddy name...">'+
    					'<span class="focus-input100"></span>'+
    					'</div>'+
    				'</div>'+
    			'	<div class="col-md-6" >'+
    				     '<div class="wrap-input100 validate-input" data-validate="Father Name is required">'+
        				'	<label class="label-input100" for="referral_father_name">Father Name</label>'+
        					'<input id="referral_father_name" class="input100 ref" type="text" name="referral_father_name[]" placeholder="Enter buddy\'s father name...">'+
        				'	<span class="focus-input100"></span>'+
    					'</div>'+
    				'</div>'+
                '</div>'+
    				'<div class="row" >'+
                        '<div class="col-md-6">'+
                          '<div class="wrap-input100 validate-input" data-validate = "Location is required">'+
    					    '<label class="label-input100" for="referral_location">Location</label>'+
    					    '<input id="referral_location" class="input100 ref" type="text" name="referral_location[]" placeholder="Enter buddy\'s location">'+
    					    '<span class="focus-input100"></span>'+
    				     '</div>'+
    				    '</div>'+
    				     '<div class="col-md-6">'+
                        '<div class="wrap-input100  plus2">'+
    				    	'<div class="label-input100">Interested In</div>'+
    				    	'<div class="validate-input" data-validate = "Interest is required" style="padding:6%">'+
    					    "<select id='referral_discipline' name='referral_discipline[]'  class='js-select2 input100' required>"+
                                "<option value=''>Select Interest</option>"+
                                "<?php echo getAdmissionCourses($res['course'],$con); ?>"+
                                                                   
                            "</select>"+
    						'<div class="dropDownSelect2"></div>'+
    					'</div>'+
    				    	'<span class="focus-input100"></span>'+
    			    	'</div>'+
    			    	 
    			    	'</div>'+
    				     
                '</div>'+
    				'<div class="row" >'+
    				    '<div class="col-md-6">'+
    				   '<div class="wrap-input100 validate-input" data-validate = "Valid Contact No. is required">'+
    					    '<label class="label-input100" for="referral_mobile">Contact No.</label>'+
    				    	'<input id="referral_mobile" class="input100 ref" type="number" name="referral_mobile[]" placeholder="Enter buddy\'s contact">'+
    				    	'<span class="focus-input100"></span>'+
    				    '</div>'+
    				   '</div>'+
    				    '<div class="col-md-6">'+
    					'<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">'+
    					    '<label class="label-input100" for="referral_email">Email Address</label>'+
    					    '<input id="referral_email" class="input100 ref" type="email" name="referral_email[]" placeholder="Enter  buddy\'s email...">'+
    					    '<span class="focus-input100"></span>'+
    				    '</div>'+
    				    '</div>'+
    				   
                '</div>'+
                  '</div>'+
                '</div>';
			$('#referrals').append(referral);
		});

	</script>
<!--===============================================================================================-->
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>
	<!-- Global site tag (gtag.js) - Google Analytics -->

</body>
</html>
