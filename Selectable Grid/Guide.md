# Selectable Grid

## Css

- Create a grid that will have a dynamic template, i.e the no of rows and cols can be changed based on user input.
- Since the no of rows and cols are dynamic so, we will be using variable.
  ```css
  grid-template-columns: repeat(var(--cols, 10), 35px);
  grid-template-rows: repeat(var(--rows, 10), 35px);
  ```
  ```js
    style={{ "--rows": rows, "--cols": cols }}
  ```

## React

- We keep track of the starting point i.e the coordinate where the First mouse down was located.
- We also find the block where the last mouse entry was located.
- we then find all the coordinated that will be in between then when selected.
- We also maintain a selected array that will be used to keep track of the calculated cells, and will be used to colour the grid.

## JS

- We need to make `rows` x `cols` grid, and since we can only use pure function to achieve that, we cannot run for loops, so we create a matrix and run the `map` function on it.
- We also try to fill in each grid with it's index values (1 based indexing)
- We use the latest entry to get the end coordinate and not the mouse up as we will have the last coordinate inside the grid even if we go out of the grid.

  ```js
  // Method 01
  [...Array(rows * cols).keys()].map((i) => <div key={i}>{i + 1}</div>);
  // Method 02
  Array(rows * cols)
    .fill(0)
    .map((ele, index) => <div key={index + 1}>{index + 1}</div>);
  ```

- We get the 2d coordinated from 1D indexed matrix by using the simple formula
  ```js
  i = index / cols;
  j = index % cols;
  // i and j are 2d index
  // index is 1d index
  // cols is the no of coloumns
  ```
