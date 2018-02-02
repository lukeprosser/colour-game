# The RGB Colour Game

This project formed part of The Web Developer Bootcamp, an online course taught by Colt Steele.

It draws together many of the skills I've learned in HTML, CSS and JavaScript.

Not only can the game be played for fun, but it also helps me to brush up on my RGB knowledge!

## How it works

When the script initialises, it generates a random RGB colour and displays it in the header. An array of coloured squares is displayed, one of which contains the correct colour.

There are two difficulty settings: 'Easy' and 'Hard'. In the Hard setting, displayed by default, there are 6 colours to choose from. 

When the player chooses the Easy setting, 3 colours are hidden from the array and 3 remain. The Easy button also triggers the colours to reset, in order to ensure that a new correct answer is featured in the array.

The 'New Colours' button generates a new array of random RGB colours, with a new correct answer.

If the player guesses incorrectly, the clicked square fades away and a 'Try Again' message is displayed.

If the player guesses correctly, all of the squares change to the correct colour, as well as the header, and a 'Correct!' message is displayed.

After the player guesses correctly, the New Colours button changes to 'Play Again?', allowing the player to begin a new game at the same difficulty level.