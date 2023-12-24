function mergeCars(car1, car2) {
    var mergedCar = {};

    for (var prop in car1) {
        if (car1.hasOwnProperty(prop)) {
            mergedCar[prop] = car1[prop];
        }
    }

    for (var prop in car2) {
        if (car2.hasOwnProperty(prop)) {
            mergedCar[prop] = car2[prop];
        }
    }

    return mergedCar;
}


var car1 = { brand: 'Nissan', model: 'GT-R', year: 2024 };
var car2 = { color: 'Jet Black Pearl', fuel: 'Gas Prem' };
var mergedCar = mergeCars(car1, car2);
console.log(mergedCar);
/* Output: {
  brand: 'Nissan',
  model: 'GT-R',
  year: 2024,
  color: 'Jet Black Pearl',
  fuel: 'Gas Prem'
}*/
