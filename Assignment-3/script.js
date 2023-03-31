//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

var secondRow = document.querySelector('#styleChange');
secondRow.style.backgroundColor="white";

document.getElementById("checkBoxChange").checked = false;



//Grey out the submit button
var submitBtn = document.querySelector('#button');
submitBtn.disabled= true;
submitBtn.style.backgroundColor="grey";
submitBtn.style.border="none";

//Add new Row
var count = 1;

function addNewRow() {
  try{
  var table = document.getElementById("myTable");
  var lastStudent =
  table.lastElementChild?.firstElementChild?.firstElementChild?.
  nextElementSibling?.innerHTML || "Student 1"; 
  var latestIndex = lastStudent.split(" ")[1]; 
  if(latestIndex == undefined){
    latestIndex =0;
  }

  var tbodyRef= document.createElement("tbody");
  var tdNode = document.createElement("tr");
  var trCheckBoxCell = document.createElement("td");
  trCheckBoxCell.innerHTML =
    '<td><input type="checkbox" value="clicked" onclick="checkboxClicked(this)" id="checkBoxChange"/> <br/> <br/> <img value="Off" id="toggle" onClick="toggleImg(this)" src="down.png" width="25px"/></td>';
  var trStudentCell = document.createElement("td");
  
  trStudentCell.innerHTML = "Student " + (parseInt(latestIndex) + 1);
  var trTeacherCell = document.createElement("td");
  trTeacherCell.innerHTML = "Teacher " + (parseInt(latestIndex) + 1);
  var trAwardStatusCell = document.createElement("td");
  trAwardStatusCell.innerHTML = "Approved";
  var trSemesterCell = document.createElement("td");
  trSemesterCell.innerHTML = "Fall" ;
  var trTypeCell = document.createElement("td");
  trTypeCell.innerHTML = "TA";
  var trBudgetCell = document.createElement("td");
  trBudgetCell.innerHTML = "12345";
  var trPercentageCell = document.createElement("td");
  trPercentageCell.innerHTML = "100%";
  var trDeleteEditCell = `<td id="deleteEdit" style="display : none" onClick="deleteClick(this)">
    <button>Delete</button>
  </td>
  <td id="deleteEdit" style="display : none" onClick="editClick(this)">
    <button>Edit</button>
  </td>`;

  tdNode.appendChild(trCheckBoxCell);
  tdNode.appendChild(trStudentCell);
  tdNode.appendChild(trTeacherCell);
  tdNode.appendChild(trAwardStatusCell);
  tdNode.appendChild(trSemesterCell);
  tdNode.appendChild(trTypeCell);
  tdNode.appendChild(trBudgetCell);
  tdNode.appendChild(trPercentageCell);
  tdNode.innerHTML += trDeleteEditCell;

  tbodyRef.appendChild(tdNode);

  var trDescriptionNode = `<tr class="dropDownTextArea" style="display: none">
    <td colspan="8">
      Advisor:<br /><br />
      Award Details<br />
      Summer 1-2014(TA)<br />
      Budget Number: <br />
      Tuition Number: <br />
      Comments:<br /><br /><br />
      Award Status:<br /><br /><br />
    </td>
  </tr>`;

  tbodyRef.innerHTML += trDescriptionNode;
  table.appendChild(tbodyRef);
  alert("Row Added Sucessfully");
  }
  catch(error){
    alert("Error in adding Row!");
  }
}

let deleteBtn = document.querySelectorAll('#deleteEdit');
deleteBtn.forEach((deleteBtn)=>{
  deleteBtn.style.display="none";
})

function toggleImg(btn)
{
  if(btn.getAttribute("value")=="On"){
    btn.setAttribute("value","Off");
    btn.parentElement.parentElement.nextElementSibling.style.display = "none";
    
  }
  else if(btn.getAttribute("value")=="Off"){
    btn.setAttribute("value","On");
    btn.parentElement.parentElement.nextElementSibling.style.display = "";
    
  }
}

var tableBody = document.getElementById("myTable");
var tableHeadingDelete=tableBody.firstElementChild.lastElementChild.lastElementChild;
var tableHeadingEdit=tableBody.firstElementChild.lastElementChild.lastElementChild.previousElementSibling;

function checkboxClicked(click){
  if(click.getAttribute("value")=="clicked"){
    click.setAttribute("value","unclicked");
    click.parentElement.parentElement.style.backgroundColor="yellow";
    click.parentElement.parentElement.lastElementChild.previousElementSibling.style.display="revert";
    click.parentElement.parentElement.lastElementChild.style.display="revert";
    tableHeadingDelete.style.display="revert";
    tableHeadingEdit.style.display="revert";
    submitBtn.disabled= false;
    submitBtn.style.backgroundColor="orange";
    submitBtn.style.border="2px solid orange"; 
  }
  else if(click.getAttribute("value")=="unclicked"){
    click.setAttribute("value","clicked");
    click.parentElement.parentElement.style.backgroundColor="white";
    click.parentElement.parentElement.lastElementChild.previousElementSibling.style.display="none";
    click.parentElement.parentElement.lastElementChild.style.display="none";
    tableHeadingDelete.style.display="none";
    tableHeadingEdit.style.display="none";
    submitBtn.disabled= true;
    submitBtn.style.backgroundColor="grey";
    submitBtn.style.border="none"; 
  }
  var c = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if(c <= 0){
    tableHeadingDelete.style.display="none";
    tableHeadingEdit.style.display="none";
  }
  else{
    tableHeadingDelete.style.display="revert";
  tableHeadingEdit.style.display="revert";
  }
}

function deleteClick(rowObject){

    var tr=rowObject.parentElement.parentElement;
    tr.remove();
    count--;
    var c = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if(c <= 0){
      tableHeadingDelete.style.display="none";
      tableHeadingEdit.style.display="none";
    }
    else{
      tableHeadingDelete.style.display="revert";
    tableHeadingEdit.style.display="revert";
    }
    alert("Row deleted Successfully!");
}

function editClick(rowObj){
  alert("edit text");
}