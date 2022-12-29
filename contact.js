function fullname() {
  var x = document.getElementById("nm1").value;
  var y = document.getElementById("nm2").value;
  document.getElementById("p1").innerHTML = x ;
  document.getElementById("p2").innerHTML = y;
  document.getElementById("p3").innerHTML = x + " " + y;
  //document.getElementById("lnm").innerHTML = y;
  console.log(x);
  console.log(y);

}
// <button type="button" onclick ="fullname()">Submit</button>