# ChatGPT Conversation Archiver

This script fetches and deletes all your ChatGPT conversations.

## Usage

1. Paste the script into your browser console.
2. Replace `authToken` with your ChatGPT Bearer token:
   ```js
   const authToken = "your_token_here";
   ```
   -> Just replace the part inside the quotation marks.
3. Open the console -> [How to open console](https://youtu.be/y2yanWTNxGk?si=Kzqx-giRFo9qoLUY)
4. Paste the code in bulkdelete.js in the console and press enter
5. Wait a bit for it to fully delete. If you've done everything right, it will output the message "All chats deleted".

## How to Get Bearer Token

1. Open [ChatGPT](https://chat.openai.com/)
2. Open DevTools > Network tab -> [How to open Network Tab](https://youtu.be/y2yanWTNxGk?si=Kzqx-giRFo9qoLUY)
3. Delete any GPT
4. Click the request called `conversations`
5. In Headers, find `Authorization`
6. Copy everything after `Bearer `

Use responsibly. Token = password! Don't share with anyone!
