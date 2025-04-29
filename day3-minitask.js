const tasks = [
  { name: "Study", priority: 3 },
  { name: "Shop", priority: 1 },
  { name: "Call", priority: 2 }
];

const createTaskCounter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const taskCounter = createTaskCounter();

const prioritizeTasks = (taskList, minPriority = 1) => {
  return taskList
    .filter(task => task.priority >= minPriority)
    .sort((a, b) => b.priority - a.priority);
};

const result1 = prioritizeTasks(tasks, 2);
console.log(`Call ${taskCounter()}:`, result1);

const result2 = prioritizeTasks(tasks, 1);
console.log(`Call ${taskCounter()}:`, result2);
