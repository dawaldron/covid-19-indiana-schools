$(document).ready(function(){ 	
	$("button#submit").click(function(){
		$.ajax({
			type: "POST",
			url: "_admin/includes/save.php",
			data: $('form.updateStates').serialize(),
			success: function(message){
				$("#updateStates").html(message)
				$("#updateStates-modal").modal('hide');
				location.reload();
			},
			error: function(){
				alert("Error");
			}
		});
	});
	$("button#submit2").click(function(){
		$.ajax({
			type: "POST",
			url: "../includes/save.php",
			data: $('form.ColorStyle').serialize(),
			success: function(message){
				$("#ColorStyle").html(message)
				$("#ColorStyle-modal").modal('hide');
				location.reload();
			},
			error: function(){
				alert("Error");
			}
		});
	});
	$("button#submit3").click(function(){
		$.ajax({
			type: "POST",
			url: "../includes/save.php",
			data: $('form.LogoNotes').serialize(),
			success: function(message){
				$("#LogoNotes").html(message)
				$("#LogoNotes-modal").modal('hide');
				location.reload();
			},
			error: function(){
				alert("Error");
			}
		});
	});
	$("button#submit4").click(function(){
		$.ajax({
			type: "POST",
			url: "../includes/save.php",
			data: $('form.LogoDate').serialize(),
			success: function(message){
				$("#LogoDate").html(message)
				$("#LogoDate-modal").modal('hide');
				location.reload();
			},
			error: function(){
				alert("Error");
			}
		});
	});
	$("button#submit5").click(function(){
		var mode= $(this).prop('checked');
		$.ajax({
			type: "POST",
			url: "../includes/save.php",
			data: $('form.LogoTrademark').serialize(),
			success: function(message){
				$("#LogoTrademark").html(message)
				$("#LogoTrademark-modal").modal('hide');
				location.reload();
			},
			error: function(){
				alert("Error");
			}
		});
	});
});