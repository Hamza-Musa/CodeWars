//P num + cant be any num >10
//R mult table, string
//E
//P
function multiTable(number) {
  if (number > 10 || number < 1) {
    return "Pick a number between 1 and 10";
  } else {
    let table = "";
    for (let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}\n`; // Ensure spaces are added between each component
    }
    return table.trim();
  }
}

console.log(multiTable(5));
