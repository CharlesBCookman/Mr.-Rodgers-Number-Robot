Describe: outputButton()

Test: "It takes a value grabbed from the input and returns every number from 0 to that number."
Code: output Button(42);
Expected Output: [0, 1, 2, 3, 4, 5, 6, ... 42]

Test: "it takes every value with a 1 in it and replaces it with "Beep!".
Code: output Button(5);
Expected Output: [0, Beep!, 2, 3, 4, 5]

Test: "It takes every value with a 2 in it and replaces it with "Boop!".
Code: output Button(5);
Expected Output: [0, Beep!, Boop!, 3, 4, 5]

Test: "It takes every value with a 3 in it and replaces it with "Wont you be my neightbor".
Code: output Button(5);
Expected Output: [0, Beep!, Boop!, Wont you be my neightbor, 4, 5]

Test: "It fixes the spacing issue where there is no space in between the numbers and the commas".
Code: output Button(5);
Expected Output: [0, Beep!, Boop!, Wont you be my neightbor, 4, 5]

Test: "It takes the output of the function and puts it into an output so that it can be viewed in a webpage."
Code: output Button(5);
Expected Output: [0, Beep!, Boop!, Wont you be my neightbor, 4, 5]