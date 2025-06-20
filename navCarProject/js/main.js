import { NavigationCar } from "./navCar.js";
let car;

document
  .querySelector("#createCar")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const marke = form.elements["marke"].value;
    const model = form.elements["model"].value;
    const ps = parseInt(form.elements["ps"].value);
    const fuelType = form.elements["fuel"].value;
    car = new NavigationCar(marke, model, ps, fuelType);

    const status = car.getCarStatus();
    document.querySelector("#fahrzeugBasicInfo").textContent = status.basicInfo;
    document.querySelector("#engineInfo").textContent = status.engineInfo;
    document.querySelector("#gpsInfo").textContent = status.gpsInfo;
    document.querySelector("#carDetails").style.display = "flex";
  });

document.querySelector("#motorStarten").addEventListener("click", function () {
  const logField = document.querySelector("#log");
  const newLog = document.createElement("div");
  newLog.textContent = car.startCar();
  logField.insertBefore(newLog, logField.firstChild);
});
