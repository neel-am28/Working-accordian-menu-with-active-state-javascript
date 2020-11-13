const accordians = document.querySelectorAll(".accordian");

accordians.forEach((currentAccordian) => {
  const btn = currentAccordian.querySelector(".btn-container");
  btn.addEventListener("click", function () {
    currentAccordian.classList.toggle("active");
    // check if current item is not equal to all items
    accordians.forEach((item) => {
      if (currentAccordian.classList !== item.classList) {
        item.classList.remove("active");
      }
    });
  });
});
