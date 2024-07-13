let tasbiix = document.querySelector("#tasbiix")
let incrementButton = document.querySelector("#incrementBtn")
let resetButton = document.querySelector("#resetBtn")


let initialValue = 0  

incrementButton.addEventListener("click", function() {
 initialValue++
 tasbiix.innerHTML = initialValue

 if(initialValue == 4) {
    document.body.style.backgroundColor = "red"
 }

 else if (initialValue ==5) {
     document.body.style.backgroundColor = "blue"
 }

 else if  (initialValue ==6) {
     document.body.style.backgroundColor = "green"
 }
  else if (initialValue ==7) {
     document.body.style.backgroundColor = "orange"
 }
 else if(initialValue ==8) {
     document.body.style.backgroundColor = "yellow"
 }


 else {
    document.body.style.backgroundColor = ""
 }
 
})


resetButton.addEventListener("click", function() {

    initialValue= 0
    tasbiix.innerHTML = initialValue
}

)