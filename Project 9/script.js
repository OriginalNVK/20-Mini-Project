const heading = document.querySelector(".heading");
const text = heading.textContent;
const chars = text.split("");
heading.textContent = "";

for (let i = 0; i < chars.length; i++)
{
    heading.innerHTML += `<span>` + chars[i] + `</span>`;    
}

let count = 0;
let timer = setInterval(onArrive, 50);

function onArrive()
{
    const char = heading.querySelectorAll("span")[count];
    char.classList.add("fade"); 
    count++;
}

