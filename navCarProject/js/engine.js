export class Engine {
  constructor(horsePower, fuelType, isOn = false) {
    this.horsePower = horsePower;
    this.fuelType = fuelType;
    this.isOn = isOn;
  }

  start() {
    const now = new Date().toLocaleString();
    if (!this.isOn) {
      this.isOn = true;
      return `Motor gestartet: ${now}`;
    } else {
      return `Motor läuft bereits: ${now}`;
    }
  }

  stop() {
    const now = new Date().toLocaleString();
    if (!this.isOn) {
      return `Motor ist bereits aus: ${now}`;
    } else {
      this.isOn = false;
      return `Motor gestoppt: ${now}`;
    }
  }

  getDetails() {
    return `Der Motor hat: ${this.horsePower} PS und fährt mit ${this.fuelType}. Motorstatus: ${
      this.isOn ? 'an' : 'aus'
    }`;
  }
}
