const reset_button = document.getElementById("reset_button");
const decrease_button = document.getElementById("decrease_button");
const increase_button = document.getElementById("increase_button");
const label_count = document.getElementById("label_count");
let count = 0;
increase_button.onclick = function(){
    count++;
    label_count.textContent = count;
}
decrease_button.onclick = function(){
    count--;
    label_count.textContent = count;
}
reset_button.onclick = function(){
    count = 0;
    label_count.textContent = count;
}