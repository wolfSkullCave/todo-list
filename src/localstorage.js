export function populateStorage(itemName, item) {
  localStorage.setItem(item.name, JSON.stringify(item));
}

export function retrieveStorage(item) {
  return JSON.parse(localStorage.getItem(item));
}

export function clearStorage() {
  localStorage.clear();
}

// localStorage.setItem("firstProject", JSON.stringify(defaultProject));
// const retrieved = JSON.parse(localStorage.getItem("firstProject"));
// console.log("retrieved: ", retrieved);
