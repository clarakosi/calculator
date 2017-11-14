$(document).ready(function() {
  var second = "";

  $("#AC").on("click", function() {
    second = "";
    $(".form-control").val("");
    console.log(second);
  });

  $("#plusminus").on("click", function() {
    /* jshint ignore:start */
    second += "*-1";
    var third = eval(second);
    $(".form-control").val(third);
    console.log(eval(second));
    /* jshint ignore:end */
  });

  $("#percent").on("click", function() {
    /* jshint ignore:start */
    second += "/100";
    var fourth = eval(second);
    $(".form-control").val(fourth);
    console.log(eval(second));
    /* jshint ignore:end */
  });

  $("#7").on("click", function() {
    second += 7;
    $(".form-control").val(second);
    console.log(second);
  });

  $("#8").on("click", function() {
    second += 8;
    $(".form-control").val(second);
    console.log(second);
  });

  $("#9").on("click", function() {
    second += 9;
    $(".form-control").val(second);
    console.log(second);
  });

  $("#4").on("click", function() {
    second += 4;
    $(".form-control").val(second);
    console.log(second);
  });

  $("#5").on("click", function() {
    second += 5;
    $(".form-control").val(second);
    console.log(second);
  });

  $("#6").on("click", function() {
    second += 6;
    $(".form-control").val(second);
    console.log(second);
  });

  $("#1").on("click", function() {
    second += 1;
    $(".form-control").val(second);
    console.log(second);
  });

  $("#2").on("click", function() {
    second += 2;
    $(".form-control").val(second);
    console.log(second);
  });

  $("#3").on("click", function() {
    second += 3;
    $(".form-control").val(second);
    console.log(second);
  });

  $("#0").on("click", function() {
    second += 0;
    $(".form-control").val(second);
    console.log(second);
  });

  $("#decimal").on("click", function() {
    second += ".";
    $(".form-control").val(second);
    console.log(second);
  });

  $("#divide").on("click", function() {
    second += "/";
    $(".form-control").val(second);
    console.log(second);
  });

  $("#x").on("click", function() {
    second += "*";
    $(".form-control").val(second);
    console.log(second);
  });

  $("#subtract").on("click", function() {
    second += "-";
    $(".form-control").val(second);
  });

  $("#add").on("click", function() {
    second += "+";
    $(".form-control").val(second);
  });

  $("#equal").on("click", function() {
    var total = second.toString().replace(/(,)/g, " ");
    /* jshint ignore:start */
    var final = eval(total);
    $(".form-control").val(final);
    console.log(final);
    /* jshint ignore:end */
  });
});