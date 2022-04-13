let plus = document.getElementById("created1");
let minus = document.getElementById("created2");
let val = document.getElementById("created3");
let start = document.getElementById("created5");
let reset = document.getElementById("created4");

let x = 0;
let y =null;
function yo(){
    if(x <0){
        alert("ERROR : You have set negative time counter.")
        x = 0;
        val.textContent = x;
    }
    else {
        y = setTimeout(function() {
            inc();
        }, 1000)
    }
}

plus.onclick = function (){
    ++x;
    val.textContent = x;
}
minus.onclick = function (){
    --x;
    val.textContent = x;
}

start.onclick = function(){
    yo();
}

reset.onclick = function(){
    x = 0;
    val.textContent = x;
}

function inc(){
    if(x == 0){
        clearInterval(y);
        alert("Time up");
        y = null;
    }
    else{
        --x;
        val.textContent = x;
        yo();
    }
}

