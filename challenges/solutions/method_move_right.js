//////////////////
// kyrel method //
//////////////////

// updated moveRight implementation
function moveRight(n) {
  n = n || 1; // by default move 1 space if n is not defined
  for(var i=0; i<n; i++){
    $(".instructions").append("<div>moveRight</div>");
    if(kyrel.x < row.x - 1) {
      kyrel.x = kyrel.x + 1;
      updateRow();
    }
  }
}
