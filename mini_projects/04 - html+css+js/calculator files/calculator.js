const output = document.getElementById("output")
const buttons = document.querySelectorAll("#centre_box #area button")
let reset = false

buttons.forEach(function(butt){
    butt.addEventListener("click",function(){
     const id = butt.id
     const value = butt.textContent
     const last = output.value.slice(-1)
     if(id == "equal"){
     try{output.value = eval(output.value)}
      catch{output.value = "Error"}
      reset = true
     }
     else if(id == "x"){
       output.value = (output.value).slice(0,-1)
     }
     else if(output.value == "0"){
        output.value = butt.textContent
     }
     else if(butt.id == "AC"){
         output.value = ""
     }
     else{
        const num = /[0-9]/.test(value)
        const sam = /[+%*/-]/.test(last)
         if(reset && num && !sam){
            output.value = ""
            reset = false
         }
    
         output.value += butt.textContent
        }
    })
});

