$(function() {
    
    $("#senha").bind('keyup', function(){

    	var txt = $(this).val();
    	var forca = 0;

    	//letras, numeros, caracteres especiais, min. de caracteres

    	if(txt.length > 6) {
    		forca +=  25;
    	}

    	var reg = new RegExp(/[a-z]/i);
    	if(reg.test(txt)) {
    		forca += 25;
    	}

    	var reg = new RegExp(/[0-9]/i);
    	if(reg.test(txt)) {
    		forca += 25;
    	}

    	var reg = new RegExp(/[^a-z0-9]/i);
    	if(reg.test(txt)) {
    		forca += 25;
    	}

    	if(forca >= 75){
    		var aceita = "<span class='alert alert-success font-weight-bolder'>ACEITA!</span>";
    	} else {
    		var aceita = "<span class='alert alert-danger font-weight-bolder'>NÃO ACEITA, SUA FORÇA DE SENHA TEM QUE ESTÀ MAIOR QUE 75!!</span>";
    	}

    	$('#forca').html('Força da senha: '+forca+'%'+' '+'<br>'+'Sua senha: '+'('+txt+') - '+aceita);
    });
   

});
