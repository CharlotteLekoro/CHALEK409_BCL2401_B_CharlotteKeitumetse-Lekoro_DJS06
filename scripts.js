// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
//This log each name and each province and log each name with a matching province
names.forEach((name) => console.log(name));
provinces.forEach((province) => console.log(province));

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});
//This creates a new array of the province using the map method and logs the array in to the console
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

//Creates a new array using map that contains the length of each name.
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// Using spread operator to avoid mutating the original array
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

//Use filter to remove provinces containing "Cape".
const nonCapeProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(nonCapeProvinces.length);

// Using map to create an array of booleans indicating if each name contains 's'
const containsSArray = names.map((name) => name.toLowerCase().includes("s"));

// Using some to check if any name contains 's'
const anyNameContainsS = names.some((name) => name.toLowerCase().includes("s"));

console.log(containsSArray);
console.log(anyNameContainsS);

//Used reduce to transform the names array into an object mapping names to their respective provinces.
const nameToProvince = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameToProvince);

/*Advanced exercises*/

// 1. Log Products
console.log("Products:");
products.forEach((product) => console.log(product.product));

// 2. Filter by Name Length
console.log("Products with names shorter than or equal to 5 characters:");
const filteredProducts = products.filter(
  (product) => product.product.length <= 5
);
console.log(filteredProducts);

// 3. Price Manipulation
console.log("Total Price of Products with Valid Prices:");

const totalPrice = products
  .filter(
    (product) =>
      typeof product.price === "string" && product.price.trim() !== ""
  ) // Check if product.price is a string before calling trim
  .map((product) => Number(product.price))
  .reduce((acc, price) => acc + price, 0);

console.log(totalPrice);

// 4. Concatenate Product Names
console.log("Concatenated Product Names:");
const concatenatedNames = products
  .reduce((acc, product) => acc + product.product + ", ", "")
  .slice(0, -2);
console.log(concatenatedNames);

// 5. Find Extremes in Prices
console.log("Highest and Lowest Prices:");

const prices = products
  .filter(
    (product) =>
      typeof product.price === "string" && product.price.trim() !== ""
  ) // Check if product.price is a string before calling trim
  .map((product) => Number(product.price));

const result =
  prices.length > 0
    ? `Highest: ${Math.max(...prices)}. Lowest: ${Math.min(...prices)}.`
    : "No valid prices found.";

console.log(result);

// 6. Object Transformation
console.log("Object Transformation:");
const transformedProducts = products.reduce((acc, product) => {
  acc[product.product] = { name: product.product, cost: product.price };
  return acc;
}, {});
console.log(transformedProducts);
