var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.items = [];
    }
    Inventory.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Inventory.prototype.removeItem = function (id) {
        var index = this.items.findIndex(function (item) { return item.id === id; });
        if (index !== -1) {
            return this.items.splice(index, 1)[0];
        }
        return undefined;
    };
    Inventory.prototype.findItem = function (id) {
        return this.items.find(function (item) { return item.id === id; });
    };
    Inventory.prototype.getItems = function () {
        return __spreadArray([], this.items, true);
    };
    return Inventory;
}());
var bookInventory = new Inventory();
bookInventory.addItem({ id: "1", name: "1984", author: "George Orwell", pages: 328 });
bookInventory.addItem({ id: "2", name: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 });
console.log("Book Inventory:", bookInventory.getItems());
console.log("Find Book by ID '1':", bookInventory.findItem("1"));
console.log("Remove Book by ID '2':", bookInventory.removeItem("2"));
console.log("Book Inventory after removal:", bookInventory.getItems());
var clothingInventory = new Inventory();
clothingInventory.addItem({ id: "1", name: "T-Shirt", size: "M", material: "Cotton" });
clothingInventory.addItem({ id: "2", name: "Jeans", size: "L", material: "Denim" });
console.log("Clothing Inventory:", clothingInventory.getItems());
console.log("Find Clothing by ID '1':", clothingInventory.findItem("1"));
console.log("Remove Clothing by ID '2':", clothingInventory.removeItem("2"));
console.log("Clothing Inventory after removal:", clothingInventory.getItems());
var electronicsInventory = new Inventory();
electronicsInventory.addItem({ id: "1", name: "Smartphone", brand: "XYZ", warranty: true });
electronicsInventory.addItem({ id: "2", name: "Laptop", brand: "ABC", warranty: false });
console.log("Electronics Inventory:", electronicsInventory.getItems());
console.log("Find Electronics by ID '1':", electronicsInventory.findItem("1"));
console.log("Remove Electronics by ID '2':", electronicsInventory.removeItem("2"));
console.log("Electronics Inventory after removal:", electronicsInventory.getItems());
