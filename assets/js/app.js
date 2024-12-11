cl = console.log;

const options = document.getElementById("options");

const allFlowers = [...document.querySelectorAll(".all")];

onColorChange = (eve) => {
  let SelectedClassName = eve.target.value;

  allFlowers.forEach((flower) => {
    flower.classList.add("d-none");
  });

  let selectedFlowers = [...document.querySelectorAll("." + SelectedClassName)];

  selectedFlowers.forEach((flower) => {
    flower.classList.remove("d-none");
  });
};

options.addEventListener("change", onColorChange);
