const inventory = [
  { id: 1, name: "Laptop", price: 1000, stock: 5 },
  { id: 2, name: "Phone", price: 500, stock: 10 },
  { id: 3, name: "Tablet", price: 300, stock: 0 }
];

const manageInventory = (items, action) => {
  switch (action.type) {
    case "filterStock":
      const minStock = action.minStock ?? 0;
      return items.filter(item => item.stock > minStock);
    case "highValue":
      return items.filter(item => item.price > 600);
    case "summary":
      const totalValue = items.reduce((sum, item) => sum + (item.price * item.stock), 0);
      return {
        itemCount: items.length,
        totalValue
      };
    default:
      return "Invalid action type";
  }
};

const result1 = manageInventory(inventory, { type: "filterStock" });
console.log("Action: filterStock");
console.log(JSON.stringify(result1, null, 2));

const result2 = manageInventory(inventory, { type: "highValue" });
console.log("Action: highValue");
console.log(JSON.stringify(result2, null, 2));

const result3 = manageInventory(inventory, { type: "summary" });
console.log("Action: summary");
console.log(JSON.stringify(result3, null, 2));
