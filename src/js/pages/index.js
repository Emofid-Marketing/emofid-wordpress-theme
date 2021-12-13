function loadPageModules() {
  switch (window.EMOFID.current_page_id) {
    case "home":
      import("./home");
      break;
    case "contact":
      import("./contact");
      break;
    case "about":
      import("./about");
      break;
    case "investment":
      import("./investment");
      import("../apps/performance-calculator");
      break;
    case "funds":
      import("../apps/funds-table");
      break;
  }
}

loadPageModules();
