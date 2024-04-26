// 1
const sliderImg = document.querySelector(".slider__img")

const sliderInput = document.querySelector(".slider__input")

function imgSizeChange(event) {
    const sliderValue = event.target.value;
    const imgSize = 100 + sliderValue * 2;
    sliderImg.style.width = ` ${imgSize}px `;
    sliderImg.style.height = ` ${imgSize}px `;
  }

sliderInput.addEventListener('input', _.debounce(imgSizeChange, 500))

// 2
const box = document.querySelector("#box")

function moveBox (event) {
    box.style.left = `${event.clientX}px`;
    box.style.top = `${event.clientY}px`;
}
document.addEventListener('mousemove', _.debounce(moveBox, 100));