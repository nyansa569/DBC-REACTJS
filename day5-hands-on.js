<!DOCTYPE html>
<html>
<head>
  <title>Day 5: ES6 and Asynchronous JavaScript</title>
</head>
<body>
  <script>
    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 }
    ];

    const formattedUsers = users.map(user => `Name: ${user.name}, Age: ${user.age}`);
    formattedUsers.forEach(str => console.log(str));

    const loadData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() >= 0.5 ? resolve("Data loaded") : reject("Timeout");
        }, 2000);
      });
    };

    loadData()
      .then(msg => console.log(msg))
      .catch(err => console.error(err));

    const loadDataAsync = async () => {
      try {
        const msg = await loadData();
        console.log(msg);
      } catch (error) {
        console.error(error);
      }
    };

    loadDataAsync();

    const fetchUser = async (id) => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error("Invalid user ID");
        }
        const user = await response.json();
        console.log(`User: ${user.name}, Email: ${user.email}`);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    };

    fetchUser(1);
    fetchUser(999);
  </script>
</body>
</html>
