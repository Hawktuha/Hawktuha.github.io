let count = 0;

document.getElementById("mogus").onclick = function sigma() {
    count += 1;
    document.getElementById("count-el").innerHTML = count;
    console.log(count);

    let img = document.getElementById("mogus");
    
    img.classList.add("bounce");

   
    setTimeout(() => {
        img.classList.remove("bounce");
    }, 100); 
};