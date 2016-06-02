var equilateral = function(side1, side2, side3) {
  if (side1 === side2 && side1 === side3) {
  return true;
  } else {
  return false;
}
}

var isosceles = function(side1, side2, side3) {
  if (side1 === side2 || side1 === side3 || side2 === side3) {
  return true;
  } else {
  return false;
}
}

var scalene = function(side1, side2, side3) {
  if (side1 != side2 && side1 != side3 && side2 != side3) {
  return true;
  } else {
  return false;
}
}

var triangleCheck = function(side1, side2, side3) {
  if ( side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1 ) {
  return false;
  } else {
  return true;
}
}

$(function() {
  $('form#triangle').submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    $(".scalene").hide();
    $(".equilateral").hide();
    $(".isosceles").hide();

    if ( !triangleCheck(side1, side2, side3) ) {
      alert("this is not a triangle");
    } else {
      if ( scalene(side1, side2, side3) ) {
        $(".scalene").show();

      } else if ( equilateral(side1, side2, side3) ) {
        $(".equilateral").show();

        } else if ( isosceles(side1, side2, side3) ) {
          $(".isosceles").show();

        }
    }
    event.preventDefault();
  });
});
