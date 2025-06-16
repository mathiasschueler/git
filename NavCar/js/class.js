class Engine {
    constructor(horsePower, fuelType, isOn = false) {
        this.horsePower = horsePower;
        this.fuelType = fuelType;
        this.isOn = isOn;



    }
    start() {
        if (this.isOn == false) {
            this.isOn = true;
            console.log("Motor gestartet");
        }
        else {
            console.log("Motor läuft bereits");
        }
    }
    stop() {
        if (this.isOn == false) {
            console.log("Motor ist bereits aus");
        }
        else {
            this.isOn = false;
            console.log("Motor gestoppt");
        }
    }
    getDetails() {
        console.log(`Der Motor hat: ${this.horsePower} PS und fährt mit ${this.fuelType}. Motorstatus: ${this.isOn}`)
    }
}

class GPS {
    constructor(currentLocation = "", destination = "", isNavigating = false) {
        this.currentLocation = currentLocation;
        this.destination = destination;
        this.isNavigating = isNavigating;


    }
    setDestination(newDestination) {
        this.destination = newDestination;
        console.log(`Navigating to: ${this.destination}`);

    }
    startNavigation() {
        if (this.isNavigating == true) {
            console.log("Navigation läuft bereits");
        } else {
            this.isNavigating = true;
            console.log("Navigation gestartet")
        }
    }
    stopNavigation() {
        if (this.isNavigating == false) {
            console.log("Navigation ist bereits ausgeschaltet")
        } else {
            this.isNavigating = false;
            console.log("Navigation ausgeschaltet");
        }
    }
    getCurrentRouteInfo() {
        if (this.isNavigating == false) {
            console.log("Derzeit keine Navigation aktiv.")
        } else {
            console.log(`Navigation aktiv nach ${this.destination}`)
        }
    }

}

class NavigationCar {
    constructor(brand, model, horsePower, fuelType) {
        this.brand = brand;
        this.model = model;
        this.engine = new Engine(horsePower, fuelType);
        this.gps = new GPS();
    }
    startCar() {
        this.engine.start();
    }
    stopCar() {
        this.engine.stop();
    }
    planRoute(destination) {
        if (this.gps.isNavigating == true) {
            console.log("Aktuelle Navigation muss abgebrochen werden, um eine neue Route zu planen.")
        } else {
            this.gps.setDestination(destination);
            this.gps.startNavigation();
        }
    }
    cancelNavigation() {
        this.gps.stopNavigation();
    }
    getCarStatus() {
        console.log(`Marke: ${this.brand}, Modell: ${this.model}`)
        this.engine.getDetails();
        this.gps.getCurrentRouteInfo();

    }
}

let karre = new NavigationCar("Audi", "A8", 119, "Diesel");
karre.getCarStatus();
karre.startCar();
karre.startCar();
karre.cancelNavigation();
karre.planRoute("Las Vegas");
karre.getCarStatus();
karre.planRoute("New York");
karre.cancelNavigation();
karre.planRoute("New York");