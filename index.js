const submit = document.querySelector('#submitbutton');
const div = document.querySelector('#container');
const guesses = document.querySelector('#guessarray');
const userinput = document.querySelector('#submission');
const remaining = document.querySelector('#Remaining');
let newgamee = document.createElement('p');
newgamee.textContent = 'Start a New Game';
newgamee.classList.add('Tarun');
let random = parseInt(Math.random()*100 +1);
console.log(random);
let denote =1;
let flag = true ;
    submit.addEventListener('click',function(e){
    e.preventDefault();
    if(userinput.value<1 || userinput.value>100 || !Number(userinput.value)){
        document.querySelector('#display').innerHTML = `Please enter a valid number`;
        userinput.value = "";
    }
    else{
        if(parseInt(userinput.value) === random){
            document.querySelector('#display').innerHTML = `correct guess`;
            document.querySelector('#display').innerHTML += `You WON Game Over`;
            div.appendChild(newgamee);
            flag = false; 
            newgamee.addEventListener('click',newgame);
        }
        else{
            document.querySelector('#display').innerHTML = 
            `Sorry wrong guess taken chances ${denote}`;
        }
        if(denote>=3 && flag){
            document.querySelector('#display').innerHTML = 
            `Sorry you lost the correct answer was ${random} `;
            userinput.disabled = true;
            submit.disabled = true;
            div.appendChild(newgamee);
            flag = false; 
            newgamee.addEventListener('click',newgame)
        }
        userinput.value = "";        
        remaining.value = remaining.value - 1;
        denote++;
    
    }
});

function newgame(){
    denote =1;
    remaining.value = 3;
    flag = true;
    userinput.disabled = false;
    submit.disabled = false;
    document.querySelector('#display').innerHTML = "";
    div.removeChild(newgamee);
    random = parseInt(Math.random()*100 +1);
    console.log(random);
}



