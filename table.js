function s1() {
let a1=Number(document.getElementById("a").value);
let a2=Number(document.getElementById("b").value);
let a3=Number(document.getElementById("c").value);
let a4=Number(document.getElementById("d").value);
let a5=Number(document.getElementById("e").value);

// ---------------------------a1------------
let a6=document.getElementById("d1");
    a6.innerText=a1;
let aa6=document.getElementById("b1");
   

if (a1>=35 && a1<=100) {
a6.style.backgroundColor="green";

a6.style.color = "white";
    document.getElementById("b1").innerText="pass";
    document.getElementById("b1").style.color="green";
    b1.style.backgroundColor="green";
    document.getElementById("b1").style.color="white";


}
else{
a6.style.backgroundColor="red";

    document.getElementById("d1").style.color="white";
    document.getElementById("b1").innerText="fail";
    document.getElementById("b1").style.color="red";
    document.getElementById("b1").style.color="white";
    
    b1.style.backgroundColor="red";
    
}



// -----------------------a2---------

let a7=document.getElementById("d2");
a7.innerText=a2;
let aa7=document.getElementById("b2");    

if (a2>=35 && a2<=100) {
    
a7.style.backgroundColor="green";

    document.getElementById("d2").style.color="white";
    document.getElementById("b2").innerText="pass";
    document.getElementById("b2").style.color="green";
    b2.style.backgroundColor="green";
    document.getElementById("b2").style.color="white";
    

}
else{

a7.style.backgroundColor="red";

    document.getElementById("d2").style.color="white";
    document.getElementById("b2").innerText="fail";
    document.getElementById("b2").style.color="red";
    document.getElementById("b2").style.color="white";
    
    b2.style.backgroundColor="red";
    
    
}

// --------------------------a3------

let a8=document.getElementById("d3");
a8.innerText=a3;
let aa8=document.getElementById("b3")    
if (a3>=35 && a3<=100) {
a8.style.backgroundColor="green";

    document.getElementById("d3").style.color="white";
    document.getElementById("b3").innerText="pass";
    document.getElementById("b3").style.color="green";
    b3.style.backgroundColor="green";
    document.getElementById("b3").style.color="white";
    

}
else{
a8.style.backgroundColor="red";

    document.getElementById("d3").style.color="white";
    document.getElementById("b3").innerText="fail";
    document.getElementById("b3").style.color="red";
    document.getElementById("b3").style.color="white";
    
    b3.style.backgroundColor="red";
    
    
}
// ------------------a4------------

let a9=document.getElementById("d4");
a9.innerText=a4;

let aa9=document.getElementById("b4")    
if (a4>=35 && a4<=100) {

  a9.style.backgroundColor="green";

    document.getElementById("d4").style.color="white";
    document.getElementById("b4").innerText="pass";
    document.getElementById("b4").style.color="green";
    b4.style.backgroundColor="green";
    document.getElementById("b4").style.color="white";
    

}
else{
a9.style.backgroundColor="red";

    document.getElementById("d4").style.color="white";
    document.getElementById("b4").innerText="fail";
    document.getElementById("b4").style.color="red";
    document.getElementById("b4").style.color="white";
    
    b4.style.backgroundColor="red";
    
    
}


// ----------------a5--------------

let a10=document.getElementById("d5");
a10.innerText=a5;
let aa10=document.getElementById("b5")    
if (a5>=35 && a5<=100) {
a10.style.backgroundColor="green";

    document.getElementById("d5").style.color="white";
    document.getElementById("b5").innerText="pass";
    document.getElementById("b5").style.color="green";
    b5.style.backgroundColor="green";
    document.getElementById("b5").style.color="white";
    

}
else{
a10.style.backgroundColor="red";

document.getElementById("b5").style.color="red";

    document.getElementById("d5").style.color="white";
    document.getElementById("b5").innerText="fail";
    document.getElementById("b5").style.color="white";
    
    b5.style.backgroundColor="red";
    
}

// -----------------------------------

let a11=a1+a2+a3+a4+a5;
let a12=document.getElementById("d6").innerText=a11;
if (a11>=175) {
    d6.style.color = "white";
    d6.style.backgroundColor = "green";
    
}
else{
    d6.style.color = "white";
    d6.style.backgroundColor = "red";

}


}




function s2(params) {
 let a1=Number(document.getElementById("a").value="");
let a2=Number(document.getElementById("b").value="");
let a3=Number(document.getElementById("c").value="");
let a4=Number(document.getElementById("d").value="");
let a5=Number(document.getElementById("e").value="");
let a6=document.getElementById("d1");
a6.style.backgroundColor="";
a6.innerText="";
let a7=document.getElementById("d2");
a7.innerText="";
a7.style.backgroundColor="";

let a8=document.getElementById("d3");
a8.innerText="";
a8.style.backgroundColor="";

let a9=document.getElementById("d4");
a9.innerText="";
a9.style.backgroundColor="";

let a10=document.getElementById("d5").innerText="";
a10=document.getElementById("d5").style.backgroundColor="";

let a11=a1+a2+a3+a4+a5;
let a12=document.getElementById("d6").innerText="";
a12=document.getElementById("d6").style.backgroundColor="";
let aa=document.getElementById("b1").innerText="";
document.getElementById("b1").style.backgroundColor="";
let a1a=document.getElementById("b2").innerText="";
document.getElementById("b2").style.backgroundColor="";

let a2a=document.getElementById("b3").innerText="";
document.getElementById("b3").style.backgroundColor="";
let a3a=document.getElementById("b4").innerText="";
document.getElementById("b4").style.backgroundColor="";
let a4a=document.getElementById("b5").innerText="";
document.getElementById("b5").style.backgroundColor="";




}




