var light=document.querySelector("#light");
var bulb=document.querySelector('img');
var btn=document.querySelector('#btn');
var count=1;
btn.addEventListener('click',function(){
    count=count+1;
    if(count%2==0){
        bulb.setAttribute("src","images/light-on.png");
        light.textContent=("ON");
        light.style.color="green";
        
    }
    else{
        bulb.setAttribute("src","images/light-off.png");
        light.textContent=("OFF");
        light.style.color="red";
        }
});