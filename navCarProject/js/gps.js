export class GPS {
    constructor(currentLocation = "", destination = "", isNavigating = false) {
        this.currentLocation = currentLocation;
        this.destination = destination;
        this.isNavigating = isNavigating;
    }

    setDestination(newDestination) {
        if (!newDestination) {
            return "Ungültiges Ziel.";
        }
        this.destination = newDestination;
        return `Navigating to: ${this.destination}`;
    }

    startNavigation() {
        if (this.isNavigating) {
            return "Navigation läuft bereits";
        } else {
            this.isNavigating = true;
            return "Navigation gestartet";
        }
    }

    stopNavigation() {
        if (!this.isNavigating) {
            return "Navigation ist bereits ausgeschaltet";
        } else {
            this.isNavigating = false;
            return "Navigation ausgeschaltet";
        }
    }

    getCurrentRouteInfo() {
        return this.isNavigating
            ? `Navigation aktiv nach ${this.destination}`
            : "Derzeit keine Navigation aktiv.";
    }
}
