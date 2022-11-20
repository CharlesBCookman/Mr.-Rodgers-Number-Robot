function outputButton(){
  const robotOutput = document.getElementById("robot-output");
  const robotInput = document.getElementById("number-input");
  let outputCollector = [];
  const numberCollected = parseInt(robotInput.value);
  console.log(numberCollected)
  for(i = 0; i < parseInt(numberCollected); i++ ){
    console.log(i);
    console.log(outputCollector);
    if(isNaN(numberCollected) === true) {
      alert("Your value is NaN.");
      console.log("test if value is number");
    } else if (i.toString().includes("3")) {
      outputCollector.push([" Won't you be my neighbor?"]);
      console.log("second test");
    } else if(i.toString().includes("2")) {
      outputCollector.push([" Boop!"]);
      console.log("third test");
    } else if(i.toString().includes("1")) {
      outputCollector.push([" Beep!"]);
      console.log("fourth test");
    } else if (i === 0) {
      outputCollector.push(i);
      console.log("fifth test");
    } else if (true === true) {
      outputCollector.push(" " + i);
      console.log("fifth test");
    }
  }
  robotOutput.value = outputCollector.toString();
}

window.addEventListener("load", function(){
  const robotButton = document.getElementById("robot-button");
  console.log("Load sequence initiated.");
  robotButton.addEventListener("click", outputButton);
});