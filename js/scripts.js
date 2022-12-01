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
  const robotOutput = document.getElementById("robot-output");
  let outputCollector = [];
  for(i = 0; i <= number; i++){
    console.log(i)
    if (i.toString().includes("3")) {
      outputCollector.push([" Won't you be my neighbor?"]);
    } else if(i.toString().includes("2")) {
      outputCollector.push([" Boop!"]);
    } else if(i.toString().includes("1")) {
      outputCollector.push([" Beep!"]);
    } else if (i === 0) {
      outputCollector.push(i);
    } else if (true === true) {
      outputCollector.push(" " + i);
    }
  }
  robotOutput.value = outputCollector;
}

function outputButton() {
  const robotOutput = document.getElementById("robot-output");
  const robotInput = parseInt(document.getElementById("number-input").value);
  console.log(robotInput);
  if(isNaN(robotInput)){
    console.log("is NaN condition triggered?");
    robotOutput.value = "Zip! Zap! This is not a number.";
  } if(robotInput < 0) {
    robotWork(-1*robotInput);
  }else{ 
    robotWork(robotInput);
  }
}


window.addEventListener("load", function(){
  const robotButton = document.getElementById("robot-button");
  console.log("Load sequence initiated.");
  robotButton.addEventListener("click", outputButton);
});