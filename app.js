const names = [
  "sanjay", "ramesh", "suresh", "manu", "sonu",
  "apple", "banana", "orange", "grapes", "kiwi", "mango",
  "mumbai", "delhi", "goa", "pune", "bihar", "fallen", "tasty", "sweet", "sour"
];

const input = document.querySelector("#input");
const result = document.querySelector("#result");

input.addEventListener("input", () => {
  const filter = input.value.toLowerCase();
  result.innerHTML = "";

  const filteredNames = names.filter(name => name.toLowerCase().includes(filter));

  filteredNames.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    result.appendChild(li);
  });
});
