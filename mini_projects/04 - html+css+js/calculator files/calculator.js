const output = document.getElementById("output")
const buttons = document.querySelector("#centre_box #area button")
buttons.forEach(function(butt){
    butt.addEventListener("click",function(){
        output.value = butt.textContent
    })
});

