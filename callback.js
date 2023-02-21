const names = [
  "Abigail", "Alexandra", "Alison",
  "Amanda", "Angela", "Bella",
  "Carol", "Caroline", "Carolyn",
  "Deirdre", "Diana", "Elizabeth",
  "Ella", "Faith", "Olivia", "Penelope"]


function searchNames(query, limit, callback) {
  const results = names.filter(name => name.toLowerCase().includes(query.toLowerCase())).slice(0, limit);
  if (query === "") {
    console.error("masukkan query!")
  } else {
    return callback(results);
  }
}

function displayResults(results) {
  return console.log(results)
}

searchNames("an", 3, displayResults);




