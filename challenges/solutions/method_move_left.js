//////////////////
// kyrel method //
//////////////////

// updated moveLeft implementation
function moveLeft(n) {
  n = n || 1; // by default move 1 space if n is not defined
  for(var i=0; i<n; i++){
    $(".instructions").append("<div>moveLeft</div>");
    if(kyrel.x > 0) {
      kyrel.x = kyrel.x - 1;
      updateRow();
    }
  }
}
