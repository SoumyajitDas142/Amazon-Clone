const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');
let n = 0;
let intervalId;
let buttonClicked = false;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) { // reset
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
};

changeSlide();

prev_btn.addEventListener("click", (e) => {
    buttonClicked = true;
    clearInterval(intervalId);
    if (n > 0) {
        n--;
    }
    else{
        n = imgs.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener("click", (e) => {
    buttonClicked = true;
    clearInterval(intervalId);
    if (n < imgs.length-1) {
        n++;
    }else{
        n = 0;
    }
    changeSlide();
});

intervalId = setInterval(() => {
    if (!buttonClicked) {
        if (n < imgs.length-1) {
            n++;
        }else{
            n = 0;
        }
        changeSlide();
    }
    buttonClicked = false;
}, 3000); // change the interval time as needed

document.addEventListener("mousemove", () => {
    if (buttonClicked) {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            if (n < imgs.length-1) {
                n++;
            }else{
                n = 0;
            }
            changeSlide();
        }, 3000);
        buttonClicked = false;
    }
});

const scrollContainer = document.querySelectorAll(".products");
for (const item of scrollContainer) {
    item.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
});
}