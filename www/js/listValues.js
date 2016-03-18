/*
This file is part of Asphalt
  Asphalt is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
 Asphalt is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with Asphalt.  If not, see <http://www.gnu.org/licenses/>.

Copyright © 2016 4Loop
*/

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
