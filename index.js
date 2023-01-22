let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let toggleBtn = document.querySelector('.toggleBtn');
let body = document.querySelector('body');

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){
        if(this.innerHTML == "="){
            value.innerHTML = eval(value.innerHTML);
        }
        else if(this.innerHTML == "Clear"){
            value.innerHTML = "";
        }
        else if(this.innerHTML == "⇐"){
            value.innerHTML = value.innerHTML.slice(0,-1);
        }
        else{
            value.innerHTML += this.innerHTML;
        }
    })
}

toggleBtn.onclick = function(){
    body.classList.toggle('dark');
}
































// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('button');
// let screenvalue = '';
// for(item of buttons){
//     item.addEventListener('click',(e)=>{
//         buttonText = e.target.innerText;
//         // console.log('button',buttonText);
//         if(buttonText == 'X'){
//             buttonText = '*';
//             screenvalue += buttonText;
//             screen.value = screenvalue; 
//         }       
//         else if(buttonText == 'C'){
//             screenvalue = "";
//             screen.value = screenvalue;
//         }
//         else if(buttonText == '='){
//             screen.value = eval(screenvalue);
//         }
//         // else if(buttonText == '⇚'){
//         //     screen.value = screen.value.slice(0,-1);
//         //     screenvalue = screen.value;
//         // }
//         else{
//             screenvalue += buttonText;
//             screen.value = screenvalue; 
//         }
//     })
// }