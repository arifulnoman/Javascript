const programmer = document.getElementById("pro_check");
const html = document.getElementById("html");
const css = document.getElementById("css");
const javascript = document.getElementById("javascript");
const submit = document.getElementById("submit_button");
const para_1 = document.getElementById("para_1");
const para_2 = document.getElementById("para_2");
submit.onclick = function(){
    if(programmer.checked)
    {
        para_1.textContent = "You are a Programmer";
    }
    else
    {
        para_1.textContent = "You are not a Programmer";
    }
    if(!html.checked && !css.checked && !javascript.checked)
    {
        para_2.textContent = "You do not have any skills";
    }
    else
    {
        let s = "You know ";
        if(html.checked)
        {
            s+="HTML ";
        }
        if(css.checked)
        {
            s+="CSS ";
        }
        if(javascript.checked)
        {
            s+="Javascript";
        }
        para_2.textContent = s;
    }
}

