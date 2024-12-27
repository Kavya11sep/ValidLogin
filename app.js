let ele = document.getElementsByTagName('input');
let form = document.querySelector('form');
let error = document.getElementById('err');

function validate(event){
    for(let input of ele){
        if(input.value==""){
            error.innerHTML = "Please Fill the form";
            event.preventDefault(); 
        }
        else if(input.value.length<6){
            error.innerHTML = " username or password be Atleast 6 charcaters";
            event.preventDefault();
        }
    }
    
}
form.onsubmit = validate