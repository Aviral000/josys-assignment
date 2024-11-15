interface Book {
    id: string;
    name: string;
    author: string;
    pages: number;
  }
  
  interface Clothing {
    id: string;
    name: string;
    size: string;
    material: string;
  }
  
  interface Electronics {
    id: string;
    name: string;
    brand: string;
    warranty: boolean;
  }
  
  class Inventory<T extends { id: string; name: string }> {
    private items: T[] = [];
  
    addItem(item: T): void {
      this.items.push(item);
    }
  
    removeItem(id: string): T | undefined {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        return this.items.splice(index, 1)[0];
      }
      return undefined;
    }
  
    findItem(id: string): T | undefined {
      return this.items.find(item => item.id === id);
    }
  
    getItems(): T[] {
      return [...this.items];
    }
  }
  
  const bookInventory = new Inventory<Book>();
  bookInventory.addItem({ id: "1", name: "1984", author: "George Orwell", pages: 328 });
  bookInventory.addItem({ id: "2", name: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 });
  console.log("Book Inventory:", bookInventory.getItems());
  console.log("Find Book by ID '1':", bookInventory.findItem("1"));
  console.log("Remove Book by ID '2':", bookInventory.removeItem("2"));
  console.log("Book Inventory after removal:", bookInventory.getItems());
  
  const clothingInventory = new Inventory<Clothing>();
  clothingInventory.addItem({ id: "1", name: "T-Shirt", size: "M", material: "Cotton" });
  clothingInventory.addItem({ id: "2", name: "Jeans", size: "L", material: "Denim" });
  console.log("Clothing Inventory:", clothingInventory.getItems());
  console.log("Find Clothing by ID '1':", clothingInventory.findItem("1"));
  console.log("Remove Clothing by ID '2':", clothingInventory.removeItem("2"));
  console.log("Clothing Inventory after removal:", clothingInventory.getItems());
  
  const electronicsInventory = new Inventory<Electronics>();
  electronicsInventory.addItem({ id: "1", name: "Smartphone", brand: "XYZ", warranty: true });
  electronicsInventory.addItem({ id: "2", name: "Laptop", brand: "ABC", warranty: false });
  console.log("Electronics Inventory:", electronicsInventory.getItems());
  console.log("Find Electronics by ID '1':", electronicsInventory.findItem("1"));
  console.log("Remove Electronics by ID '2':", electronicsInventory.removeItem("2"));
  console.log("Electronics Inventory after removal:", electronicsInventory.getItems());
  