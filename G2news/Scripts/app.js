const Jebediah = {
  SW: null,
  init() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((registration) => {
          Jebediah.SW =
            registration.installing ||
            registration.waiting ||
            registration.active;
          console.log("Jebediah is existing.");
        });
      if (navigator.serviceWorker.controller) {
        console.log("Jebediah");
      }
    } else {
      console.log("Jebediah does not exist.");
    }
  },
};

document.addEventListener("DOMContentLoaded", Jebediah.init);
console.log("DEN FINKAR");
