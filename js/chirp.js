function chirp(n){
  if(n === 1){
    return 'chirp';
  } else {
    return 'chirp ' + chirp(n-1);
  }
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});