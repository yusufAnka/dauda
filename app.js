import './static/audio.js'
require ('./static/style.css')
import './static/canvas.js'
import  $  from 'jquery'


var canvasScale = document.getElementsByTagName('canvas')[0];
		
		canvasScale.style.width = '230px'
		canvasScale.style.height = '230px'
		canvasScale.parentElement.style.height = '230px'
		canvasScale.parentElement.style.width = '230px'
	
		var canvasScale1 = document.getElementsByTagName('canvas')[1];
		
		canvasScale1.style.width = '230px'
		canvasScale1.style.height = '230px'
		canvasScale.style.overflow = 'hidden'

var name = document.getElementById('name1')
var city = document.getElementById('city')
var phone = document.getElementById('phone')
var email = document.getElementById('email')
var submit = document.getElementById('submit')
var info = document.querySelector('.info')

submit.onclick = ()=>{
	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	  }
	  
	if(name.value != '' && city.value != '' && email.value != ''){
		if (validateEmail(email.value)) {
			$.ajax({
				url: '/user',
				type: 'POST',
				contentType: 'application/json',
				data: JSON.stringify({user : {name : name.value, city : city.value, phone: phone.value, email: email.value} }),
				success: (responce)=>{
					console.log("Successfully get data");
					info.innerHTML = responce
					
				}
			})
		}
		else{
			info.innerHTML = `<small>This email <b>${email.value}</b> is not valid email address, try checking it.</small>`
		}
	}
	else{
		info.innerHTML = `<small>Unable to submit your form, please try filling above form.</small>`
	}
}