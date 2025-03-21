# ChatGPT Conversation Archiver

This script fetches and deletes all your ChatGPT conversations.

## DISCLAIMERS
1. Use responsibly. Your token is equivalent your chatgpt password! Don't share with anyone!
2. All tutorials are made for Google Chrome, although most browsers look the same. Any issue search "network activity" or "console" and your browser of choice's name.

## Usage

1. You must be using the browser version of [ChatGPT](https://chat.openai.com/).
2. Paste the script into your browser console.
3. Replace `authToken` with your ChatGPT Bearer token:
   ```js
   const authToken = "your_token_here";
   ```
   -> Just replace the part inside the quotation marks.
4. Open the console -> [How to open console](https://youtu.be/vb7aFN8KJ2Q?si=I8KGiuIh_cbC0IkP)
5. Paste the code in bulkdelete.js in the console and press enter
6. Wait a bit for it to fully delete. If you've done everything right, it will output the message "All chats deleted".

## How to Get Bearer Token

1. Open [ChatGPT](https://chat.openai.com/)
2. Open DevTools > Network tab -> [How to open Network Tab](https://youtu.be/y2yanWTNxGk?si=Kzqx-giRFo9qoLUY)
3. Delete any GPT
4. Click the request called `conversations`
5. In Headers, find `Authorization`
6. Copy everything after `Bearer `