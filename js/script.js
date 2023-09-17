let outputScreen = document.getElementById("outputScreen");

const display = (num) =>{
    outputScreen.value += num;
}

const calculate = () =>{
    try{
        if(outputScreen.value == ""){
            alert("Enter something to work on!!");
            return;
        }
        outputScreen.value = eval(outputScreen.value);
    }catch(err){
        alert("Invalid input");
    }
}

const del = () =>{
    outputScreen.value = outputScreen.value.slice(0, -1); 
}


const clearDisplay = () => {
    document.getElementById("outputScreen").value = "";
}


