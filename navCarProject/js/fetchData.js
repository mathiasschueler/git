// Fetch data from data.json file and set it in the form of index.html

export async function loadCars() {
  try {
    const response = await fetch('../data/data.json');
    const cars = await response.json();

    const garage = document.getElementById('garage');
    const markeOpt = document.getElementById('marke');
    const modelOpt = document.getElementById('model');
    const leistungOpt = document.getElementById('ps');
    const fuelOpt = document.getElementById('fuel');

    // Add car options to select
    cars.forEach((car, index) => {
      const option = document.createElement('option');
      option.value = index; // store index to access car later
      option.textContent = `${car.Marke} ${car.Modell} - ${car.Leistung}PS, ${car.Kraftstofftyp}`;
      garage.appendChild(option);
    });

    // Event listener for selection
    garage.addEventListener('change', () => {
      const selectedIndex = garage.value;
      const selectedCar = cars[selectedIndex];

      if (selectedCar) {
        markeOpt.value = selectedCar.Marke;
        modelOpt.value = selectedCar.Modell;
        leistungOpt.value = selectedCar.Leistung;
        fuelOpt.value = selectedCar.Kraftstofftyp;
      }
    });

  } catch (error) {
    console.error('Fehler beim Laden der Fahrzeugdaten:', error);
  }
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', loadCars);
