import { Engine } from "./engine.js";
import { GPS } from "./gps.js";

export class NavigationCar {
    constructor(brand, model, horsePower, fuelType) {
        this.brand = brand;
        this.model = model;
        this.engine = new Engine(horsePower, fuelType);
        this.gps = new GPS();
    }

    startCar() {
        return this.engine.start();
    }

    stopCar() {
        return this.engine.stop();
    }

    planRoute(destination) {
        if (this.gps.isNavigating) {
            return "Aktuelle Navigation muss abgebrochen werden, um eine neue Route zu planen.";
        } else {
            const setDest = this.gps.setDestination(destination);
            const startNav = this.gps.startNavigation();
            return `${setDest}\n${startNav}`;
        }
    }

    cancelNavigation() {
        return this.gps.stopNavigation();
    }

    getCarStatus() {
        return {
            basicInfo: `Marke: ${this.brand}, Modell: ${this.model}`,
            engineInfo: this.engine.getDetails(),
            gpsInfo: this.gps.getCurrentRouteInfo()
        };
    }

}
