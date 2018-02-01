let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let span = document.querySelectorAll('span')[1];
let em = document.querySelectorAll('em')[1];
let u = document.querySelector('u');
let timer = null;
//let str  = '';
//let num = 0;


u.onclick = function(){
	em.innerHTML = text1.value.length;
	console.log(text1.value.length)
	if(!text1.value)return;
	text2.value = '';
	timer = setInterval(function(){
		text2.value += text1.value.charAt(0);
	   	text1.value = text1.value.slice(1);
	   	span.innerText = text2.value.length;
	    if(!text1.value){
			clearInterval(timer);
		}
     	
    },30);
//	timer = setInterval(function(){
//		str = text1.value.split('')[num];
//		text1.value =  text1.value.split(str).join('');
//		text2.value += str;
//		span.innerText = text2.value.length;
//		
//			
//		if(!text1.value){
//			clearInterval(timer);
//		}
//   
//	},30)
}
