let target = Math.random();
const mini = 1;
const maxi = 100;
const submit = document.getElementById("submit");
const number_field = document.getElementById("number_input");
const result = document.getElementById("result");
target = Math.floor(target * maxi) + mini;
let count = 0;
submit.onclick = function(){
    let number = number_field.value;
    if(number == target)
    {
        result.textContent = "Congratulation. You have cracked the number on " + ++count + " no attempt";
    }
    else
    {
        count++;
        if(number > target)
        {
            result.textContent = "You have guessed too large number";
        }
        else
        {
            result.textContent = "You have guessed too small number";
        }
    }
};
