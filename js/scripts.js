// function outputButton(){
//   const robotOutput = document.getElementById("robot-output");
//   const robotInput = document.getElementById("number-input");
//   let outputCollector = [];
//   const numberCollected = parseInt(robotInput.value);
//   for(i = 0; i <= parseInt(numberCollected); i++ ){
//     if (i.toString().includes("3")) {
//       outputCollector.push([" Won't you be my neighbor?"]);
//     } else if(i.toString().includes("2")) {
//       outputCollector.push([" Boop!"]);
//     } else if(i.toString().includes("1")) {
//       outputCollector.push([" Beep!"]);
//     } else if (i === 0) {
//       outputCollector.push(i);
//     } else if (true === true) {
//       outputCollector.push(" " + i);
//     }
//   }
//   robotOutput.value = outputCollector.toString();
// }
function robotWork(number) {
  let robotOutput = document.getElementById("robot-output");
  let result = [];
  for(i = 0; i <= number; i++){
    console.log(i)
    if (i.toString().includes("3")) {
      result.push([" Won't you be my neighbor?"]);
    } else if(i.toString().includes("2")) {
      result.push([" Boop!"]);
    } else if(i.toString().includes("1")) {
      result.push([" Beep!"]);
    } else if (i === 0) {
      result.push(i);
    } else if (true === true) {
      result.push(" " + i);
    }
  }
  robotOutput.value = result;
}

function outputButton(number) {
  number = parseInt(document.getElementById("number-input").value);
  console.log(number);
  if (isNaN(number)){
    console.log("is NaN condition triggered?")
    document.getElementById("robot-output").value = "I eat numbers not... " + number;
  } else if (number < 0) {
    robotWork(-1*number);
    console.log("is Negative condition triggered?")
  } else if (parseInt(number) > 0){ 
    robotWork(parseInt(number));
    console.log("is possitive number function condition triggered?")
  }
}

window.addEventListener("load", function(){
  const robotButton = document.getElementById("robot-button");
  console.log("Load sequence initiated.");
  robotButton.addEventListener("click", outputButton);
});