// initial_state = [ 'b', '.', '.', '.', '.' ];
// end_state =     [ 'b', 'b', 'b', 'b', 'b' ];

// initial_state = [ 'g', '.', '.', '.', '.' ];
// end_state =     [ 'g', 'g', 'g', 'g', 'g' ];

//////////
// main //
//////////

if ( onBlue() ) {
  useBlue()
} else if ( onGreen() ) {
  useGreen();
}

for(var j=0; j<5; j++) {
  draw();
  moveRight();
}


/* 
Note that the above solution actually moves off the Kyrel board.  Maybe that's OK.

Sometimes in software development the instructions you're given are not 100% clear.  There are frequently edge-cases, or other possibilities that hadn't been thought of yet.
You may have to improvise or ask questions.  That's OK.  Considering those other possibilities is actually part of the job of a good engineer.

A possible alternative would be to change the solution to moveRight before drawing.  We don't really need to draw the first square anyway.
*/

/*
For example:

if ( onBlue() ) {
  useBlue()
} else if ( onGreen() ) {
  useGreen();
}

for(var j=0; j<4; j++) {
  moveRight();
  draw();
}

*/

/*
Additional challenge:  What if the first square is empty?  Should we move that to the end as well and make the last square empty?  
Can you think of a solution for this too?
*/
