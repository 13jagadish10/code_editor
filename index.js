const htmlCodeEl = document.querySelector("#html");
const cssCodeEl = document.querySelector("#css");
const jsCodeEl = document.querySelector("#js");
const outputEl = document.querySelector("#output");

function run() {

    // Storing the data in Local Storage
    localStorage.setItem('htmlCodeEl', htmlCodeEl.value);
    localStorage.setItem('cssCodeEl', cssCodeEl.value);
    localStorage.setItem('jsCodeEl', jsCodeEl.value);

    // executing & Evaluating HTML, CSS & JS code
    outputEl.contentDocument.body.innerHTML = `<style>${localStorage.cssCodeEl}</style>` + localStorage.htmlCodeEl;
    outputEl.contentWindow.eval(localStorage.jsCodeEl);
}

// If user type anything in the respective code element then it automatically runs and it will show in the output
htmlCodeEl.addEventListener("keyup",()=>{run()})
cssCodeEl.addEventListener("keyup",()=>{run()})
jsCodeEl.addEventListener("keyup",()=>{run()})

// Accessing data stored in Local Storage.
htmlCodeEl.value = localStorage.htmlCodeEl || "";
cssCodeEl.value = localStorage.cssCodeEl || "";
jsCodeEl.value = localStorage.jsCodeEl || "";



const itemEls = document.querySelectorAll(".item");
const pages = document.querySelectorAll(".left div")
itemEls.forEach((event,index) => {
    event.addEventListener("click",()=>{
        
        // remove previous active class and adding active class to user clicked icon.
        document.querySelector(".active").classList.remove("active")
        event.classList.add("active");
      
        // moving dot to the place of active class icon
		const dotEl = document.querySelector(".dot");
        dotEl.style.left = `${index*100 + 80}px`
        if (index === 0) {
            pages[0].classList.remove('hide')
            pages[1].classList.add('hide')
            pages[2].classList.add('hide')
        } else if(index === 1){
            pages[0].classList.add('hide')
            pages[1].classList.remove('hide')
            pages[2].classList.add('hide')
        } else if(index === 2){
            pages[0].classList.add('hide')
            pages[1].classList.add('hide')
            pages[2].classList.remove('hide')
        }
    })
});