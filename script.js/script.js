btn=document.getElementById("submit");
let arr=[]
btn.addEventListener("click",()=>{
fullname=document.getElementById("first-name").value;
if(fullname!=""){
    arr.push(fullname);
}
else{
    alert("enter the required field")
}

lastname=document.getElementById("last-name").value;
if(lastname!=""){
    arr.push(lastname);   
}
else{
    alert("enter the required field")
}

pincode=document.getElementById("pincode").value;
if(pincode!=""){
    arr.push(pincode);   
}
else{
    alert("enter the required field")
}
radio=document.getElementsByName("gender");
radio.forEach(element => {
   if(element.checked){
    valueradio=element.value;
    arr.push(valueradio);
   } 
});
checkbox=document.getElementsByName("diet");
let data=[];
checkbox.forEach((item)=>{
  
if(item.checked){
    data.push(item.value)
}
});
arr.push(data)
State=document.getElementById("state").value;
if(State!=""){
    arr.push(State);   
}
else{
    alert("enter the required field")
}

Country=document.getElementById("country").value;
if(Country!=""){
    arr.push(Country);   
}
else{
    alert("enter the required field")
}
console.log(arr);
let tableRow = document.createElement("tr");

arr.forEach(element => {
  let tableData = document.createElement("td");
  tableData.textContent = element;
  tableRow.appendChild(tableData);
});

document.getElementById("tbody").appendChild(tableRow);
document.getElementById("form").reset();
  arr = [];
})

