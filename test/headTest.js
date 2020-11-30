const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // Should fail
assertEqual(1, 1); // Should pass
assertEqual(head([5,6,7]), 5); // Should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Should pass
