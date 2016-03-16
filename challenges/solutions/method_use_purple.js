///////////////////
// kyrel setting //
///////////////////

colors = {
  empty: '#fff',
  gray: '#ccc',
  blue: 'blue',
  purple: 'purple', // ADD THIS LINE
  green: 'green'
};

//////////////////
// kyrel method //
//////////////////

// new method
function usePurple() {
  $(".instructions").append("<div>usePurple</div>");
  kyrel.color = colors.purple;
  updateRow();
}

// Bonus: new method
function onPurple() {
  return currentSquare().find(".dot.dot-purple").length > 0;
}
