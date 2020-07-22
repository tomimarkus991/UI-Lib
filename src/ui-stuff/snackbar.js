import "./styles/snackbar.css";

class Snackbar {
  constructor() {
    this.snackbar = document.createElement("div");
  }
  init() {
    this.snackbar.classList.add("snackbar");
    document.querySelector("body").appendChild(this.snackbar);
  }
  show(message) {
    const button = document.querySelector(".snackbar-trigger");
    button.addEventListener("click", () => {
      this.snackbar.textContent = message;
      this.snackbar.classList.add("active");
      setTimeout(() => {
        this.snackbar.classList.remove("active");
      }, 2000);
    });
  }
}

export { Snackbar as default };
