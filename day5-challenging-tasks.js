<!DOCTYPE html>
<html>
<head>
  <title>Challenging Tasks: ES6 & Async</title>
</head>
<body>
  <script>
    const fetchParallel = async ids => {
      try {
        const promises = ids.map(id =>
          fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.ok ? res.json() : Promise.reject("Invalid ID"))
        );
        const users = await Promise.all(promises);
        const longUsernames = users.filter(user => user.username.length > 10);
        longUsernames.forEach(user => console.log(`User: ${user.name}, Username: ${user.username}`));
        return longUsernames;
      } catch (error) {
        console.error(`Error: ${error}`);
        return [];
      }
    };

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    const pollUntil = async (postId, maxAttempts = 5) => {
      let attempts = 0;
      const poll = async () => {
        try {
          attempts++;
          console.log(`Attempt ${attempts} for post ${postId}`);
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
          if (!response.ok) throw new Error("Fetch failed");
          const post = await response.json();
          if (post.userId === 1) {
            console.log(`Success: Post ${post.id} by user ${post.userId}`);
            return post;
          }
          if (attempts >= maxAttempts) {
            console.log(`Failed: Max attempts reached`);
            return null;
          }
          await delay(2000);
          return poll();
        } catch (error) {
          console.error(`Error on attempt ${attempts}: ${error.message}`);
          return null;
        }
      };
      return poll();
    };

    const aggregateData = async () => {
      try {
        const [usersRes, postsRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users"),
          fetch("https://jsonplaceholder.typicode.com/posts")
        ]);
        if (!usersRes.ok || !postsRes.ok) throw new Error("Failed to fetch data");
        const [users, posts] = await Promise.all([usersRes.json(), postsRes.json()]);
        const postCounts = users.reduce((acc, user) => {
          const count = posts.filter(post => post.userId === user.id).length;
          return { ...acc, [user.username]: count };
        }, {});
        Object.entries(postCounts).forEach(([username, count]) =>
          console.log(`${username}: ${count} posts`)
        );
        return postCounts;
      } catch (error) {
        console.error(`Error: ${error.message}`);
        return {};
      }
    };

    fetchParallel([1, 2, 3]).then(result => console.log(`Found: ${result.length} users`));
    pollUntil(1);
    aggregateData();
  </script>
</body>
</html>
