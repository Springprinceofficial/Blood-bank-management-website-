const donors = [];

document.getElementById("donorForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll("input");
  const donor = {
    name: inputs[0].value,
    bloodType: inputs[1].value.toUpperCase(),
    city: inputs[2].value
  };
  donors.push(donor);
  document.getElementById("confirmation").innerText = "Donor registered successfully!";
  this.reset();
});

function searchBlood() {
  const query = document.getElementById("searchInput").value.toUpperCase();
  const results = donors.filter(d => d.bloodType === query);
  const resultsList = document.getElementById("searchResults");
  resultsList.innerHTML = results.length
    ? results.map(d => `<li>${d.name} (${d.city})</li>`).join("")
    : "<li>No donors found.</li>";
}
