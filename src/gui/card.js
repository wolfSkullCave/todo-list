// Example data
const data = [
  {
    title: "Card One",
    description: "This is the first card.",
    img: "img1.jpg",
  },
  {
    title: "Card Two",
    description: "This is the second card.",
    img: "img2.jpg",
  },
];

const container = document.getElementById("card-container");
const template = document.getElementById("card-template");

// data.forEach((item) => {
//   // Clone the template content
//   const card = template.content.cloneNode(true);
//
//   // Populate fields
//   card.querySelector(".card-title").textContent = item.title;
//   card.querySelector(".card-description").textContent = item.description;
//   card.querySelector(".card-img").src = item.img;
//
//   // Append to container
//   container.appendChild(card);
// });

export function createCard(data) {
  data.forEach((item) => {
    // Clone the template content
    const card = template.content.cloneNode(true);

    // Populate fields
    card.querySelector(".card-title").textContent = item.title;
    card.querySelector(".card-description").textContent = item.description;

    // Append to container
    container.appendChild(card);
  });
}
