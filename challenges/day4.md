## EXTEND KYREL METHODS
It's time to dig a little deeper into the guts of kyrel. The following functionality doesn't exist in the current implementation of the game. Let's add it!

0. method_is_empty - [solution](/challenges/solutions/method_is_empty.js)

  Create a utility method called `isEmpty` that checks the current cell for color and returns a boolean.

1. method_use_purple - [solution](/challenges/solutions/method_use_purple.js)

  Create a new method called `usePurple` that functions exactly the same as `useBlue` and `useGreen`.

  Bonus: Can you impliment `onPurple` as well, so that the new "purple feature" is fully functional?

2. method_move_right_n - [solution](/challenges/solutions/method_move_right_n.js)

  By default `moveRight` and `moveLeft` move the kyrel one cell at a time. Modify both methods so that they take an integer as an argument, representing the number of times to move in that direction. (Make sure that the default behavior continues to work too!)

3. method_move - [solution](/challenges/solutions/method_move.js)

  Refactor your solution to #2 above. Your goal is to create a generic `move` method tbat takes two arguments: the direction of movement, and the number of steps/movements to take: e.g. `move("r", 4)`.
