const head = require('../head');

// TEST CODE
head("Lighthouse Labs", "Bootcamp"); // Should fail
head(1, 1); // Should pass
head(([5,6,7]), 5); // Should pass
head((["Hello", "Lighthouse", "Labs"]), "Hello"); // Should pass
