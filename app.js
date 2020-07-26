var list=document.getElementById("list");
function addTodo(){
    var todo_Item;
    todo_Item=document.getElementById("todo-item");
    var li=document.createElement('li');
    var litext=document.createTextNode(todo_Item.value);
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("onclick","deleteItem(this)");

    var editBtn=document.createElement("button");
    var editText=document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick","editItem(this)");
    delBtn.appendChild(delText);
    li.appendChild(litext);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
    todo_Item.value="";
}
function deleteItem(e){
    e.parentNode.remove();
   // console.log(e.parentNode);
}
function deleteall(){
    list.innerHTML="";
}
function editItem(e){
    var val=e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit Value",val);
    e.parentNode.firstChild.nodeValue = "ghous";
}