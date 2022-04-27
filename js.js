"use strict"

document.addEventListener('DOMContentLoaded',function(){
	const form = document.getElementById("form");
	form.addEventListener('submit',formSend);

	async function formSend(e){
		e.preventDefault();
		let error=formValidate (form);

		let formData= new FormData(form);


		 if (error === 0){
		 	let response= await fetch('mail.php', {
		 		mathod: 'POST',
		 		body: formData
		 	});
		 	if (response.ok){
		 		form.reset();
		 		alert("yas-2");
		 	}else{
		 		alert("no-2");
		 	}
		 	alert('yas');
		 }else{
		 	alert('no-1');
		 }
	}

	function formValidate(form){
		let error=0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++){
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)){
					formAddError(input);
					error++;
				}else{
					if(input.value === ''){
						formAddError(input);
						error++;
					}
				}
			}
		}
		return error;
	}
	function formAddError(input){
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input){
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input){
		return  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value);
	}
});