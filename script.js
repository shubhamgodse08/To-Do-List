const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must enter something!!!")
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""; //clears text from text box after we add text
  saveData();
}

//to remove task when we click on cross button
//we have added function to listcontainer class
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    //in listcontainer if we click on LI it add checked class name and if checked class name is already there it will remove it because we used toggle here from target element which is LI element
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    //if we click on SPAN element then it will remove the parent element i.e LI as a result task will be deleted
    saveData();
  }
}, false)

//whwever we refresh the page our data will be gone we wanted it to be stored back whenever we open the to do list
//we also need to call it whenever we add data remove data so that storage will be updated
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data")
  //for showing the data stored on local storage of browser
}
showTask();