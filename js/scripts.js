const robotInput = document.getElementById("number-input");
const robotOutput = document.getElementById("robot-output");


let numberAll;
let outputCollector = [];
function outputButton(){
  for(numberAll = 0; numberAll < parseInt(robotInput.value); numberAll++ ){
    if(isNaN(parseInt(robotInput.value)) === true) {
      alert("Your value isn't working.")
    } else if (robotInput.value.includes("3")) {
      outputCollector.push(["Won't you be my neighbor?"]);
    } else if(robotInput.value.includes("2")) {
      outputCollector.push(["Boop!"]);
    } else if(robotInput.value.includes("1")) {
      outputCollector.push(["Beep!"]);
    } else if (true === true) {
      outputCollector.push([numberAll]);
    }
  }
  outputCollector.forEach(function(element) {
    robotOutput.value.push(element);
  });
}