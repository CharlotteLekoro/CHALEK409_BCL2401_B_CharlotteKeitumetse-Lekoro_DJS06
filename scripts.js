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
