const pageData = [
  {
    name: "30 Day Fit",
    pageRating: 3,
  },
  {
    name: "Sandstorm",
    pageRating: 4,
  },
];

const ratingContainer = document.getElementById("pageRating");

pageData.forEach(({ name, pageRating }) => {
  const pageContainer = document.createElement("div");

  const pageNameElement = document.createElement("div");
  pageNameElement.innerText = "Name: " + name;
  pageContainer.appendChild(pageNameElement);

  const ratingStarsElement = document.createElement("div");
  ratingStarsElement.innerHTML = getRatingStarsHTML(pageRating);
  pageContainer.appendChild(ratingStarsElement);

  document.getElementById("pageList").appendChild(pageContainer);
});

function getRatingStarsHTML(rating) {
  let starsHTML = "";
  for (let i = 1; i <= 5; i++) {
    const star = i <= rating ? "★" : "☆";
    starsHTML += `<span class="${i <= rating ? "star" : "blank-star"}">${star}</span>`;
  }
  return starsHTML;
}
