// initial_state = ['.', '.', '.', '.', '.'];
// end_state =     ['b', 'b', 'b', 'b', 'b'];

//////////
// main //
//////////

useBlue();
for(var j=0; j<5; j++) { // 5 loops
  draw();
  moveRight(); // on the 5th loop we "fall" off the row!
}

//* alternate solution *//

useBlue();
draw(); // draw first
for(var i=0; i<4; i++) { // 4 loops
  moveRight();
  draw();
}

//* alternate solution *//

useBlue();
for(var l=0; l<4; l++) { // 4 loops
  draw();
  moveRight();
}
draw(); // draw last
