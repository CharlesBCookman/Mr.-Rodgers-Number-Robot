Describe: outputButton()

Test: "It takes a value grabbed from the input and returns every number from 0 to that number."
Code: outputButton(42);
Expected Output: [0,1,2,3,4,5,6, ... ,42]

Test: "Take the output of the function and puts it into an output so that it can be viewed in a webpage."
Code: output Button(5);
Expected Output: 0,1,2,3,4,5

Test: "Fix the spacing issue where there is no space in between the numbers and the commas".
Code: outputButton(5);
Expected Output: 0, 1, 2, 3, 4, 5

Test: "It takes every value with a 1 in it and replaces it with "Beep!".
Code: outputButton(5);
Expected Output: 0, Beep!, 2, 3, 4, 5

Test: "It takes every value with a 2 in it and replaces it with "Boop!".
Code: output Button(5);
Expected Output: 0, Beep!, Boop!, 3, 4, 5

Test: "It takes every value with a 3 in it and replaces it with "Wont you be my neightbor".
Code: outputButton(5);
Expected Output: 0, Beep!, Boop!, Wont you be my neightbor, 4, 5

Test: "Sets priority of 3 before 2 and 1, and 2 before 1 on text change priority."
Code: outputButton(32);
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, Won't you be my neighbor?, Boop!, Boop!, Boop!, Boop!, Boop!, Boop!, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?

Test: "Set condition for NaN values in input that return a prompt that it isn't a number."
Code: outputButton(q);
Expected Output: I eat numbers not... q

Test: "Set condition for negative numbers that turns them possitive."
Code: outputButton(-5)
Expected Output: 0, 1, 2, 3, 4, 5

