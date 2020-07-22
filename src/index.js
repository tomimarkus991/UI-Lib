import Tooltip from "./ui-stuff/tooltip";
import Dropdown from "./ui-stuff/dropdown";
import Tabs from "./ui-stuff/tabs";
import Snackbar from "./ui-stuff/snackbar";

const getAllTooltips = () => {
  const allTips = document.querySelectorAll(".tooltip");
  allTips.forEach((tip) => {
    new Tooltip(tip).init();
  });
};

const getAllDropdowns = () => {
  const allDropdowns = document.querySelectorAll(".dropdown");
  allDropdowns.forEach((dropdown) => {
    new Dropdown(dropdown).init();
  });
};

const fireTabs = () => {
  const tabs = new Tabs(document.querySelector(".tabs"));
  tabs.init();
};

const fireSnackbar = () => {
  const snackbar = new Snackbar();
  snackbar.init();
  snackbar.show("this is snackbar my friend");
};

getAllTooltips();
getAllDropdowns();
fireTabs();
fireSnackbar();
