# tik-tak-toe

Tik-Tak-Toe using React components

## Description

This is a two-player game traditionally started by drawing a large pound "#" sign on the board.
Two markers are used, "X" and "O". Each player takes turns drawing their mark on the board.
The first person to draw their mark within three connected tiles wins. A win consists of
the same mark on three connected tiles horizontally, vertially, or diagonally. If the board
fills before a winner is determined then the game is a draw.

## Features

When the game is first loaded a "Start Game!" button appears at the bottom of the playing area.
When the button is pressed the game board is drawn, and the "Start Game!" button is replaced by
a "Clear Board!" button. At anytime this button can be pressed to clear the board. The state
tracking where markers are placed is cleared. The "Clear Board!" button is replaced by the
"Start Game!" button which will re-draw a blank board. Tiles are disabled once a marked is 
placed on it, and can not be overwritten without clearing the board.

![picture gameboard-screenshot](https://github.com/CaptainPoldark/tik-tak-toe/blob/main/images/game-board.PNG "Gameboard Screenshot")

## Future improvements

* <details> <summary>Disable all tiles once a winner is determined.</summary><p>This may already be done with the mounted React state, but hasn't been implemented.</p></details>

* <details> <summary>Allow a human to play against the computer.</summary><p> This feature may initially call a function that adds a marker to a random null value in game state. The computer won't have any strategy yet.</p></details>

* Add content to the sides of the screen on large displays.

* Show past moves, and allow reversing a move when playing with the computer.

## Installation

This app runs in the browser

https://captainpoldark.github.io/tik-tak-toe/dist/

## Source

https://github.com/CaptainPoldark/tik-tak-toe/tree/main

## Version

1.1

## Support

This app is being made available as is. Improvements and
suggestions are welcome. 

## License

[Named Link](https://github.com/CaptainPoldark/tik-tak-toe/blob/main/LICENSE "MIT LICENSE")