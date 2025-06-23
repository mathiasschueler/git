import { NavigationCar } from "./navCar.js";
import { loadCars } from "./fetchData.js";
let car;
loadCars();
function log(message) {
  const logField = document.querySelector("#log");
  const newLog = document.createElement("div");
  const now = new Date().toLocaleString();

  newLog.textContent = `[${now}]  ${message}`;
  logField.insertBefore(newLog, logField.firstChild);
}

function updateCarStatusDisplay() {
  if (!car) return;

  const status = car.getCarStatus();

  document.querySelector("#fahrzeugBasicInfo").textContent = status.basicInfo;
  document.querySelector("#gpsInfo").textContent = status.gpsInfo;

  const engineInfo = document.querySelector("#engineInfo");
  engineInfo.innerHTML = ""; // alles löschen, um neu zu befüllen

  // Signalleuchte erstellen oder aktualisieren
  const signal = document.createElement("span");
  signal.classList.add("signal-light");

  // ✅ Immer eine Farbe setzen – auch wenn Motor nie gestartet wurde
  if (car.engine.isOn) {
    signal.classList.add("signal-green");
  } else {
    signal.classList.add("signal-red");
  }

  const textNode = document.createTextNode(status.engineInfo);

  engineInfo.appendChild(signal);
  engineInfo.appendChild(textNode);
}

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
    updateCarStatusDisplay();
  });

document.querySelector("#motorStarten").addEventListener("click", function () {
  const logField = document.querySelector("#log");
  const newLog = document.createElement("div");
  if (!car) {
    newLog.textContent = log("Bitte erstellen Sie erst ein Auto");
    logField.insertBefore(newLog, logField.firstChild);
  } else {
    newLog.textContent = log(car.startCar());
    logField.insertBefore(newLog, logField.firstChild);
  }
  updateCarStatusDisplay();
});

document.querySelector("#motorStoppen").addEventListener("click", function () {
  const logField = document.querySelector("#log");
  const newLog = document.createElement("div");
  if (!car) {
    newLog.textContent = log("Bitte erstellen Sie erst ein Auto");
    logField.insertBefore(newLog, logField.firstChild);
  } else {
    newLog.textContent = log(car.stopCar());
    logField.insertBefore(newLog, logField.firstChild);
  }
  updateCarStatusDisplay();
});

document.querySelector("#motorDetails").addEventListener("click", function () {
  const logField = document.querySelector("#log");
  const newLog = document.createElement("div");
  if (!car) {
    newLog.textContent = log("Bitte erstellen Sie erst ein Auto");
    logField.insertBefore(newLog, logField.firstChild);
  } else {
    newLog.textContent = log(car.getMotorDetails());
    logField.insertBefore(newLog, logField.firstChild);
  }
  updateCarStatusDisplay();
});

document.querySelector("#zielSetzen").addEventListener("click", function () {
  const logField = document.querySelector("#log");
  const newLog = document.createElement("div");
  if (!car) {
    newLog.textContent = log("Bitte erstellen Sie erst ein Auto");
    logField.insertBefore(newLog, logField.firstChild);
  } else {
    const newDestination = document.querySelector("#ziel").value;
    newLog.textContent = log(car.setNewDestination(newDestination));
    logField.insertBefore(newLog, logField.firstChild);
  }
  updateCarStatusDisplay();
});

document.querySelector("#navigationStarten").addEventListener("click", function () {
  const logField = document.querySelector("#log");
  const newLog = document.createElement("div");
  if (!car) {
    newLog.textContent = log("Bitte erstellen Sie erst ein Auto");
    logField.insertBefore(newLog, logField.firstChild);
  } else {
    newLog.textContent = log(car.startCarNavigation());
    logField.insertBefore(newLog, logField.firstChild);
  }
  updateCarStatusDisplay();
});

document.querySelector("#navigationStoppen").addEventListener("click", function () {
  const logField = document.querySelector("#log");
  const newLog = document.createElement("div");
  if (!car) {
    newLog.textContent = log("Bitte erstellen Sie erst ein Auto");
    logField.insertBefore(newLog, logField.firstChild);
  } else {
    newLog.textContent = log(car.stopCarNavigation());
    logField.insertBefore(newLog, logField.firstChild);
  }
  updateCarStatusDisplay();
});

document.querySelector("#routeAnzeigen").addEventListener("click", function () {
  const logField = document.querySelector("#log");
  const newLog = document.createElement("div");
  if (!car) {
    newLog.textContent = log("Bitte erstellen Sie erst ein Auto");
    logField.insertBefore(newLog, logField.firstChild);
  } else {
    newLog.textContent = log(car.getCurrentRoute());
    logField.insertBefore(newLog, logField.firstChild);
  }
  updateCarStatusDisplay();
});


