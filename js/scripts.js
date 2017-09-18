$(document).ready(function() {
  $("form#fun").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentenceForFun").val();
    var funArray = sentence.split(" ");
    var mostFunArray = [];
    var fullLength = [];

    funArray.forEach(function(stringLength) {
      var fullLength = stringLength.length;
      if (fullLength >= 3) {
        mostFunArray.push(stringLength);

      }
    });
    mostFunArray.reverse();
    mostFunArray.toString();
    mostFunArray.replace(",","")
    alert(mostFunArray);
    mostFunArray.join();
    alert(mostFunArray);
    $("#output").text(mostFunArray);
  });
});
