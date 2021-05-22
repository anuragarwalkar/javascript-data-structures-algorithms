function blockEventLoop() {
  console.log("anurag");
  while (true);
}

const btn = document.getElementById("myButton");
btn.addEventListener("click", blockEventLoop);
