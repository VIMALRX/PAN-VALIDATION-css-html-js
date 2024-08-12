function check(){
    var c=document.getElementById("input").value;
    var d=/^[A-Z]{3}[0-9]{4}$/;
    if(d.test(c)){
        let v=document.getElementById("valid").textContent="valid";
        valid.style.color="green";
    }
    else{
        let s=document.getElementById("valid").textContent="Notvalid"; 
        valid.style.color="red";
    }
}
