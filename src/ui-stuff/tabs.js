import "./styles/tabs.css";

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = document.querySelectorAll(".trigger");
    this.content = document.querySelectorAll(".content");
    this.ul = document.querySelector(".ult");
  }
  init() {
    this.ul.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        this.toggleTabs(e);
        this.toggleContent(e);
      }
    });
  }
  toggleTabs(e) {
    this.tabs.forEach((tab) => tab.classList.remove("active"));
    e.target.classList.add("active");
  }
  toggleContent(e) {
    this.content.forEach((item) => item.classList.remove("active"));

    const selector = e.target.getAttribute("data-target");
    const content = this.container.querySelector(selector);

    content.classList.add("active");
  }
}

export { Tabs as default };
