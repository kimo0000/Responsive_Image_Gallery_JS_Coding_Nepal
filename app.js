const imgBox = document.querySelectorAll(".image"),
  imgs = document.querySelectorAll('.image img'),
  popupEl = document.querySelector(".popup"),
  closeBtn = popupEl.querySelector(".close"),
  popuImg = popupEl.querySelector(".popup_img img");

// console.log(imgs, popupEl, popuImg);

imgBox.forEach((box) => {
  let randomOrder = Math.floor(Math.random() * imgBox.length);
  box.style.order = randomOrder;
});

imgs.forEach((img) => {
    img.addEventListener("click", () => {
        popupEl.classList.add("show");
        popuImg.src = img.src;
    })
});

closeBtn.addEventListener('click', () => popupEl.classList.remove("show"));