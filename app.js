const colorBtn = document.getElementById("btn");
let colors = ["#618264", "#219ebc", "#ffafcc", "#ef233c"];

colorBtn.addEventListener("click", changeColor);

let index = 0;
function changeColor() {
  if (index < colors.length) {
    document.documentElement.style.backgroundColor = colors[index];
    index++;
  } else {
    document.documentElement.style.backgroundColor = "#FFFFFF";
    index = 0;
  }
}
