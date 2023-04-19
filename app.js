const allitems = document.querySelectorAll(".img-wrapper .col");
const allImgs = document.querySelectorAll(".img-wrapper .col img");
const imgWrapper = document.querySelector(".img-wrapper");
const modal = document.querySelector(".modal");
const modalBox = document.querySelector(".modal .modal-img");
const modalImg = document.querySelector(".modal .modal-img img");
const btns = document.querySelector(".btns");
const btnAll = document.querySelector(".btns .all-btn");

// open modal annd set clicked img in modal img
imgWrapper.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    modal.style.transform = "scale(1)";
    const clickingSrc = e.target.getAttribute("src");
    modalImg.src = clickingSrc;
    // set transform origin for modal
    modal.style.transformOrigin = `${e.clientX}px ${e.clientY}px`;
  }
});

//   close modal with click
modal.addEventListener("click", function (e) {
  this.style.transform = "scale(0)";
});
modalBox.addEventListener("click", function (e) {
  e.stopPropagation();
});
//   set gray scale effect for imgs
for (const img of allImgs) {
  img.addEventListener("mouseenter", function () {
    allImgs.forEach((img) => (img.style.filter = "grayscale(100%)"));
    this.style.filter = "grayscale(0%)";
  });
  img.addEventListener("mouseleave", function () {
    allImgs.forEach((img) => (img.style.filter = "grayscale(0%)"));
  });
}
// set effect for modal img
modalBox.addEventListener("mousemove", function (e) {
  modalImg.style.transform = `rotateX(${
    (e.offsetY * -1) / 10 - 10 * -1
  }deg) rotateY(${e.offsetX / 10 - 15}deg)`;
});
modalBox.addEventListener("mouseleave", function (e) {
  modalImg.style.transform = `rotate(${0}deg)`;
});
// filter items by btn
btns.addEventListener("click", function (e) {
  if (e.target.className === "btn") {
    const datatarget = e.target.dataset.target;
    for (const img of allitems) {
      if (img.dataset.select === datatarget) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    }
  }
});
btnAll.addEventListener("click", function () {
  allitems.forEach((img) => (img.style.display = "block"));
});
