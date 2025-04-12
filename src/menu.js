export const createMenuPage = () => {
  const menuData = {
    sections: [
      {
        name: "Main Dishes",
        items: [
          {
            name: "Sisig",
            desc: "Crispy chopped pork, calamansi, chilies, and onions.",
            price: "₱320",
          },
          {
            name: "Sinigang na Baboy",
            desc: "Tamarind-based pork soup with native vegetables.",
            price: "₱350",
          },
          {
            name: "Kare-Kare",
            desc: "Peanut stew with vegetables and oxtail.",
            price: "₱420",
          },
          {
            name: "Bringhe",
            desc: "Rice dish with coconut milk and turmeric.",
            price: "₱320",
          },
        ],
      },
      {
        name: "Grilled & Fried",
        items: [
          {
            name: "Inihaw na Manok sa Gata",
            desc: "Grilled chicken with coconut milk marinade.",
            price: "₱300",
          },
          {
            name: "Tocino Aling Lita",
            desc: "Sweet-cured pork belly, caramelized.",
            price: "₱260",
          },
        ],
      },
      {
        name: "Desserts",
        items: [
          {
            name: "Halo-Halo",
            desc: "Shaved ice with ube, flan, and toppings.",
            price: "₱300",
          },
          {
            name: "Leche Flan",
            desc: "Classic creamy caramel custard.",
            price: "₱260",
          },
        ],
      },
      {
        name: "Beverages",
        items: [
          { name: "Sago't Gulaman", price: "₱90" },
          { name: "Calamansi Juice", price: "₱80" },
          { name: "Kapeng Barako", price: "₱100" },
        ],
      },
    ],
  };

  const container = document.querySelector(".container");

  const MenuCard = document.createElement("div");
  MenuCard.classList.add("menu-card");

  //header
  const menuHeader = document.createElement("div");
  menuHeader.classList.add("menu-header");

  //menu title
  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Lasa";

  //menu subtitle
  const menuSubtitle = document.createElement("p");
  menuSubtitle.classList.add("menu-subtitle");
  menuSubtitle.textContent = "Filipino Cuisine";

  container.appendChild(MenuCard);
  MenuCard.appendChild(menuHeader);
  menuHeader.appendChild(menuTitle);
  menuHeader.appendChild(menuSubtitle);

  //sections
  menuData.sections.forEach((sections) => {
    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-sections");
    menuSection.innerHTML = `<h2> ${sections.name}`;

    sections.items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("menu-item");

      const itemInfo = document.createElement("div");
      itemInfo.classList.add("item-info");

      const itemName = document.createElement("div");
      itemName.classList.add("item-name");
      itemName.textContent = item.name;

      const itemDesc = document.createElement("div");
      itemDesc.classList.add("item-description");
      itemDesc.textContent = item.desc;

      const itemPrice = document.createElement("div");
      itemPrice.classList.add("item-price");
      itemPrice.textContent = `${item.price}`;

      itemDiv.appendChild(itemInfo);
      itemInfo.appendChild(itemName);
      itemInfo.appendChild(itemDesc);
      itemDiv.appendChild(itemPrice);
      menuSection.appendChild(itemDiv);
    });

    MenuCard.appendChild(menuSection);
  });
};
