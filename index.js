console.log("Hello, Códica!");

import _ from "lodash";

console.log(_.last(["one", "two"]));

import getLocation from "./src/index.js";

console.log("¿Cuál es tu ubicación?");
const location = "South: 3228";

const address = getLocation(location);
console.log(`Tu dirección es ${address}`);
