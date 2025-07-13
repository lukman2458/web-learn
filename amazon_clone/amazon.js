const prev_btn = document.querySelector(".prev")
const next_btn = document.querySelector(".next")
const headers = document.querySelectorAll(".headers img")

let n = 0;
function change(){
 for(let i = 0;i<headers.length;i++){
      headers[i].style.display = "none"
     }
    headers[n].style.display = "block"
    }
    change();

next_btn.addEventListener("click",()=>{
     if(n == headers.length - 1){
          n = 0
     }
     else{
          n = n+1
     }
     change();
     clearInterval(time)
})
prev_btn.addEventListener("click",()=>{
     if(n == 0){
          n = headers.length - 1
     }
     else{
          n = n-1
     }
     change();
     clearInterval(time)
})
    
const time = setInterval(()=>
{
     if(n==headers.length-1){
          n = 0
     }
     else{
          n=n+1
     }
     change();
},5000)