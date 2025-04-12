const myMainDishMenu = [];
const grilledMenu = [];
/* export const createMenuPage = () => {
  const container = document.querySelector("#container");

  const menuWrapperDiv = document.createElement("div");
  menuWrapperDiv.classList.add("menu-wrapper");

  const menuTitle = document.createElement("h2");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Lasa";

  const menuText = document.createElement("p");
  menuText.classList.add("menu-text");
  menuText.textContent = "Filipino Cuisine";

  //menu items

  const MainMenuContent = document.createElement("div");
  MainMenuContent.classList.add("menu-content");

  const MainDishCategory = document.createElement("h2");
  MainDishCategory.classList.add("menu-category");
  MainDishCategory.textContent = "Main Dishes";

  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const itemInfo = document.createElement("div");
  itemInfo.classList.add("item-info");

  const itemName = document.createElement("div");
  itemName.classList.add("item-name");
  itemName.textContent = "Kare-Kare";

  const itemDesc = document.createElement("div");
  itemDesc.classList.add("item-description");
  itemDesc.textContent = "Peanut stew with vegetables and oxtail.";

  const itemPrice = document.createElement("div");
  itemPrice.classList.add("item-price");
  itemPrice.textContent = "₱320";

  container.appendChild(menuWrapperDiv);
  menuWrapperDiv.appendChild(menuTitle);
  menuWrapperDiv.appendChild(menuText);
  menuWrapperDiv.appendChild(MainMenuContent);

  MainMenuContent.appendChild(MainDishCategory);
  MainMenuContent.appendChild(menuItem);

  menuItem.appendChild(itemInfo);
  itemInfo.appendChild(itemName);
  itemInfo.appendChild(itemDesc);

  menuItem.appendChild(itemPrice);
};*/

function MainDishMenu(name, description, price) {
  this.name = name;
  this.description = description;
  this.price = price;
}

const addMainDishMenu = (name, description, price) => {
  const newMainDishMenu = new MainDishMenu(name, description, price);
  myMainDishMenu.push(newMainDishMenu);
};

export const createMenuPage = () => {
  const container = document.querySelector("#container");

  const menuWrapperDiv = document.createElement("div");
  menuWrapperDiv.classList.add("menu-wrapper");

  const menuTitle = document.createElement("h2");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Lasa";

  const menuText = document.createElement("p");
  menuText.classList.add("menu-text");
  menuText.textContent = "Filipino Cuisine";

  const MainMenuContent = document.createElement("div");
  MainMenuContent.classList.add("menu-content");

  const MainDishCategory = document.createElement("h2");
  MainDishCategory.classList.add("menu-category");
  MainDishCategory.textContent = "Main Dishes";

  const GrilledMenuContent = document.createElement("h2");
  GrilledMenuContent.textContent = "Grilled & Fried";

  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  container.appendChild(menuWrapperDiv);
  menuWrapperDiv.appendChild(menuTitle);
  menuWrapperDiv.appendChild(menuText);
  menuWrapperDiv.appendChild(MainMenuContent);
  MainMenuContent.appendChild(MainDishCategory);
  MainMenuContent.appendChild(menuItem);

  MainMenuContent.appendChild(GrilledMenuContent);

  myMainDishMenu.forEach((menu, index) => {
    const itemInfo = document.createElement("div");
    itemInfo.classList.add("item-info");
    menuItem.setAttribute("data-index", index);

    const itemName = document.createElement("div");
    itemName.classList.add("item-name");
    itemName.textContent = `${menu.name}`;

    const itemDesc = document.createElement("div");
    itemDesc.classList.add("item-description");
    itemDesc.textContent = `${menu.description}`;

    const itemPrice = document.createElement("div");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = `${menu.price}`;

    menuItem.appendChild(itemInfo);
    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemDesc);
    menuItem.appendChild(itemPrice);
  });
};

addMainDishMenu("sinigang", "siyr cream", 25);
addMainDishMenu("sinigang", "siyr cream", 25);
addMainDishMenu("sinigang", "siyr cream", 25);
