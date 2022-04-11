# etch-a-sketch
### Paint-by-Pixel Image Creation App

Live Demo:  
https://zl90.github.io/etch-a-sketch/

### Desktop view:

![Project Screenshot](https://zl90.github.io/etch-a-sketch/project-screenshot.png)

This project was created for the [Etch-a-Sketch assignment](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project) as part of [The Odin Project](https://www.theodinproject.com) curriculum. I met all the assignment objectives.

### Objectives

1. Website with 16x16 grid of square `<div>` elements
2. Change color of each `<div>` on mouse-over
3. A "clear" button to clear the grid
4. Adjustable grid size
5. (+) Option to use random color per pixel

### Problem solving steps:
1) Understand:
    - I will be creating a web page with a 16x16 grid on it. When the user mouses over each grid square, it will change colour, giving the illusion of drawing on the grid.
    - I will be adding a button somewhere on the screen to clear the current grid.
    - I will also be adding buttons (or a slider) which allows the user to modify the size of the grid (Maximum 128x128 grid, to limit resource usage).
    - (Optional) I can add transparency to the colour change, so the change is more gradual and requires multiple passes with the mouse to change the grid square to completely saturated.

2) Plan:
    - There will be a GUI which includes buttons, the grid, and sliders.
    - Input: the user will select buttons which modify the grid size.
    - Input: the user's mouse position will determine the colour of each grid square.
    - Desired output:
        - The user should be able to draw lines/shapes on the grid using their mouse.
        - When the user selects a grid-size option, the grid should clear and then update to the desired size.
        - When the user selects the "clear" button, the grid should reset to all white squares.

3) Divide and conquer:
    - Create a grid container.
    - Populate the grid with (n)x(n) squares.
    - Have the squares scale to fill the container (the container should have a fixed size), no matter how many there are.
    - Have each square listen for a 'mouseenter' event.
    - Change the square colour when the 'mouseenter' event is detected.
    - I may need to use 'mouseover' event instead of 'mouseenter'. Check which one is appropriate.
    - Create a 'clearGrid' function which resets all grid squares to the default colour.
    - Decide on a default grid colour.
    - Create an axis display which shows the current (n)x(n) grid size (can place this above or below the grid).
    - Create a transparency effect when the grid changes colour. Figure out how to increment colour values using JS or CSS.
    - Create separate buttons for alternate grid sizes: 16x16, 32x32, 64x64, 128x128.
    - Make sure the 'clearGrid' function is used when these buttons are pressed.
    - Make the grid size dynamic so it can change at any moment when the user clicks a button.

