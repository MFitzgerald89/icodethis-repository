const apps = [
  {
    name: "Slack",
    included: true,
    img: "https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/slack.png",
  },
  {
    name: "Trelio",
    included: true,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/trelio.png`,
  },
  {
    name: "Jira",
    included: true,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/jira.png`,
  },
  {
    name: "Dropbox",
    included: true,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/dropbox.png`,
  },
  {
    id: 11,
    name: "Duolingo",
    included: false,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/duolingo.png`,
  },
  {
    id: 17,
    name: "Twitch",
    included: false,
    img: `https://raw.githubusercontent.com/cbolson/icodethis-challenges/main/assets/logos/twitch.png`,
  },
];

const cardsContainer = document.getElementById("apps-list");

// Loop through the apps array and create the cards dynamically
apps.forEach((app) => {
  // Create the card element
  const card = document.createElement("div");
  card.classList.add("card");

  // Create the image element
  const image = document.createElement("img");
  image.src = app.img;
  image.alt = app.name;

  // Create the text element (optional)
  const text = document.createElement("div");
  text.textContent = app.name;

  // Add the image and text to the card element
  card.appendChild(image);
  card.appendChild(text);

  // Add the card to the cards container
  cardsContainer.appendChild(card);

  // Add a click event listener to the card (optional, for making it clickable)
  card.addEventListener("click", () => {
    // Do something when the card is clicked
    console.log(`Clicked on ${app.name}`);
  });
});
