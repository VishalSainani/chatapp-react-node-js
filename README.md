# chatapp-react-node-js
A real-time chat app built with Node.js, React.js, and ChatEngine.io.

# To Start Backend
cd backend
npm install
npm start

# To Start Frontend
cd frontend
npm install
npm run dev


# Replace: 
In backend/index.js, on line 17, replace `process.env.PRIVATE_KEY` with your private key.
In frontend/src/chatspage.jsx, on line 7, replace `projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}` with your project ID.
You can obtain the project ID when you create a project in ##[ChatEngine.io](https://chatengine.io/)https://chatengine.io/.
