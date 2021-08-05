function submit(){
    let name=document.querySelector("#name").value;
    let city=document.querySelector("#city").value;
    document.querySelector("#area").innerHTML=`Name: <strong>${name}</strong>  |  City: <strong>${city}</strong>`;
}