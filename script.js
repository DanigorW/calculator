const calc = () => {
  const button = document.querySelectorAll(".btn");
  const screen = document.querySelector(".screen");
  const equalBtn = document.querySelector(".btn-equal");
  const clearBtn = document.querySelector(".btn-clear");

  button.forEach(btn => {
    btn.addEventListener("click", () => {
      let value = btn.getAttribute("data-num");
      screen.value += value;
    });
  });

  equalBtn.addEventListener("click", () => {
    if (screen.value === "") {
      screen.value = `No Data...`;
      setTimeout(() => {
        screen.value = "";
      }, 1000);
    } else {
      let value = eval(screen.value);
      screen.value = value;
    }
  });

  clearBtn.addEventListener("click", () => {
    screen.value = "";
  });
};

calc();
