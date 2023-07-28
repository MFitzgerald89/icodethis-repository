const pageData = {
  name: "Netflix",
  company: "Netflix, Inc.",
  rating: 5,
};

document.getElementById("pageName").innerText = pageData.name;
document.getElementById("pageCompany").innerText = pageData.company;

const ratingContainer = document.getElementById("pageRating");
for (let i = 1; i <= 5; i++) {
  const star = document.createElement("div");
  if (i <= pageData.rating) {
    star.className = "star";
  } else {
    star.className = "blank-star";
  }
  ratingContainer.appendChild(star);
}
