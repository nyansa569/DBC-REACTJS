<!DOCTYPE html>
<html>
<head>
  <title>Mini-Project: API-Driven User List</title>
</head>
<body>
  <script>
    const getUserList = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const users = await response.json();
        const comUsers = users.filter(user => user.email.endsWith(".com"));
        const formatted = comUsers.map(user => `${user.name} (${user.email})`);
        formatted.forEach(line => console.log(line));
        console.log(`Total users: ${comUsers.length}`);
        return formatted;
      } catch (error) {
        console.error(`Error: ${error.message}`);
        return [];
      }
    };

    getUserList();
  </script>
</body>
</html>
