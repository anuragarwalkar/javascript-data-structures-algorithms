function blockEventLoop(i) {
  console.log(i);
  blockEventLoop(i + 1);
}

const btn = document.getElementById("myButton");
btn.addEventListener("click", () => blockEventLoop(0));
