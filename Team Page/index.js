let btn = document.getElementById("button");
let navbar = document.getElementById("navbar");

navbar.style.display = "none";
let x =0;

btn.onclick = function(){
    if(x%2 != 0){
        navbar.style.display = "none";
        btn.innerHTML="<"
        x++;  
    } 
    else if(x%2 == 0){
        navbar.style.display = "block";
        btn.innerHTML=">"
        x++;
    } 
}