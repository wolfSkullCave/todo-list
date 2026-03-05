export function populateStorage(itemName, item) {
  localStorage.setItem(item.name, JSON.stringify(item));
}

export function retrieveStorage(item) {
  if (localStorage.getItem(item)) {
    return JSON.parse(localStorage.getItem(item));
  } else {
    console.error("Error:", item, "Does not exist in local storage.");
  }
}

export function clearStorage() {
  localStorage.clear();
}

export function getAllLocalStorageItems() {
  let items = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    try {
      value = JSON.parse(value);
    } catch (e) {}

    items.push({ key, value });
  }
  return items;
}

export function editStorage(itemName, callback) {
  // 1. Retrieve the object from localStorage
  let item = localStorage.getItem(itemName); // returns a string
  if (item) {
    item = JSON.parse(item); // convert string back to object
  } else {
    item = {}; // default object if nothing exists
  }

  // 2. Make changes to the object
  callback();

  // 3. Save it back to localStorage
  localStorage.setItem("user", JSON.stringify(item));
}
