class assign3 {
    constructor() {
      this.items = [];
    }
  
    //adding the element into the item constructor
    addItem(item) {
      if (!this.items.includes(item)) {
        this.items.push(item);
        console.log(`Item "${item}" added.`);
      } else {
        console.log(`Item "${item}" already exists. Duplicates are not allowed.`);
      }
    }
  
    //deleting the element into the item constructor using its name
    deleteItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
        console.log(`Item "${item}" deleted.`);
      } else {
        console.log(`Item "${item}" does not exist.`);
      }
    }
  
    //displaying the element which are currently present
    displayItems() {
      console.log("Current items:", this.items);
    }
  }
  
  const array = new assign3();
  array.addItem("apple");
  array.addItem("banana");
  array.addItem("apple");
  array.displayItems();
  array.deleteItem("orange");
  array.deleteItem("banana");
  array.displayItems();
  