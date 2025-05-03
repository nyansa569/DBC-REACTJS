// Task 1: Nested Object Flattener
const flattenObject = (obj, parentKey = "", result = {}) => {
  Object.entries(obj).forEach(([key, value]) => {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      flattenObject(value, fullKey, result);
    } else {
      result[fullKey] = value;
    }
  });
  return result;
};

const nested = {
  user: { name: "Alice", age: 25 },
  address: { city: "NY", zip: 10001 }
};

const flattened = flattenObject(nested);
console.log(`Flattened: ${JSON.stringify(flattened, null, 2)}`);


// Task 2: Array Grouper
const groupBy = (array, key) => {
  return array.reduce((acc, item) => {
    const groupKey = item[key];
    acc[groupKey] = [...(acc[groupKey] || []), item];
    return acc;
  }, {});
};

const items = [
  { id: 1, category: "Electronics", name: "Laptop" },
  { id: 2, category: "Clothing", name: "Shirt" },
  { id: 3, category: "Electronics", name: "Phone" }
];

const grouped = groupBy(items, "category");
console.log(`Grouped: ${JSON.stringify(grouped, null, 2)}`);


// Task 3: Data Transformer
const transformData = (array, config) => {
  if (!Array.isArray(array) || typeof config !== "object") {
    return "Invalid input";
  }

  return array
    .filter(item => {
      return Object.entries(config.filter || {}).every(
        ([key, value]) => item[key] === value
      );
    })
    .map(item => {
      const renamed = {};
      Object.entries(item).forEach(([key, value]) => {
        const newKey = config.rename?.[key] || key;
        renamed[newKey] = value;
      });
      return { ...renamed, ...config.add };
    });
};

const inputData = [
  { id: 1, category: "A", value: 10 },
  { id: 2, category: "B", value: 20 },
  { id: 3, category: "A", value: 30 }
];

const config = {
  rename: { category: "type", value: "amount" },
  filter: { category: "A" },
  add: { status: "active" }
};

const transformed = transformData(inputData, config);
console.log(`Transformed: ${JSON.stringify(transformed, null, 2)}`);
