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


