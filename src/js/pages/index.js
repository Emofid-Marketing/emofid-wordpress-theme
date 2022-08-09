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
      import("../apps/advanced-calculator");
      break;
    case "trades":
      import("./trades");
      break;
    case "branches":
      import("../apps/branches");
      break;
    case "funds":
      import("./funds");
      import("../apps/funds-table");
      break;
    case "archive":
      import("./archive");
      break;
    case "news":
      import("./news");
      break;
    case "jobs":
      import("./jobs");
      break;
    case "single-post":
      import("./single-post");
      break;
    case "search":
      import("./search");
      break;
    case "bankaccounts":
      import("./bankaccounts");
      break;
    }
}

loadPageModules();
