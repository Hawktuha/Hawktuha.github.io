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

    if (count === 100) {
        activateBonus();
    }

};

function activateBonus() {
    let img = document.getElementById("mogus");

            // Create a new <a> element
            let link = document.createElement("a");
            link.href = "https://www.youtube.com/watch?v=l6hzRU2d7c0"; // Change this to your desired link
            link.target = "_blank"; // Opens in a new tab
            link.id = "mogus-link";

            // Replace the image with the link containing the image
            img.parentNode.replaceChild(link, img);
            link.appendChild(img);
    
}