function writeOnDiv(){
  var selects = document.getElementById("sel2");
  var selectedValue = selects.options[selects.selectedIndex].value;// will gives u 2
  var selectedText = selects.options[selects.selectedIndex].text;// gives u value2

  document.getElementById("favourite_text").style.visibility="visible";
  document.getElementById("favourite_zone").style.visibility="visible";
  document.getElementById("favourite_zone").innerHTML = selectedText;
}

function findMeASpot(){
  document.getElementById("stats_table").style.visibility="visible";
}
