(async () => {
  const authToken = "your_token_here"; // Add your ChatGPT auth token here, instructions on how to find it in README.md
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`,
  };

  let allIds = [];
  let offset = 0;
  const limit = 100;
  let more = true;

  while (more) {
    const res = await fetch(
      `https://chatgpt.com/backend-api/conversations?offset=${offset}&limit=${limit}&order=updated`,
      {
        method: "GET",
        headers,
      }
    );

    const json = await res.json();
    const conversations = json.items || [];

    if (conversations.length === 0) {
      more = false;
      break;
    }

    allIds.push(...conversations.map((chat) => chat.id));
    offset += limit;
  }

  for (const id of allIds) {
    console.log(`Archiving ${id}`);
    await fetch(`https://chatgpt.com/backend-api/conversation/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ is_visible: false }),
    });
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  console.log("All chats deleted");
})();
