# ChatAOUra - AI University Assistant

ChatAOUra is an intelligent chatbot for Arab Open University (AOU) Bahrain that uses OpenAI's GPT to answer questions about the university using a Retrieval-Augmented Generation (RAG) approach.

## Features

- 🤖 AI-powered responses using OpenAI GPT-4o-mini
- 📚 Smart data retrieval from 21+ university information files
- 💬 Context-aware conversations with history tracking
- 🔐 User authentication (register/login)
- 🎨 Modern, responsive UI with React + Tailwind CSS
- 🚀 Fast backend with Express.js and MongoDB

## Architecture

### Backend Structure
```
backend/
├── config/          # Configuration files (MongoDB, OpenAI, prompts)
├── controllers/     # Request handlers (auth, chat)
├── data/           # 21 JS files with university information
├── middlewares/    # Authentication middleware
├── models/         # MongoDB schemas
├── routes/         # API routes
├── utils/          # Data loader and utilities
└── server.js       # Express server entry point
```

### Frontend Structure
```
frontend/
├── src/
│   ├── components/  # React components (Chat, Header, etc.)
│   ├── context/     # React context (Auth)
│   ├── pages/       # Page components
│   ├── services/    # API service calls
│   └── utils/       # Utility functions
└── public/         # Static assets
```

## How It Works

1. **User asks a question** in the chat interface
2. **Data Loader** analyzes the question and identifies relevant data files
3. **System prompt** is enhanced with the relevant university data
4. **OpenAI API** generates a response based on the enriched context
5. **Response** is sent back to the user with accurate information

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud)
- OpenAI API Key

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Edit `.env` and add your credentials:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/chataura
OPENAI_API_KEY=sk-your-openai-api-key-here
JWT_SECRET=your-secret-key-here
```

5. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Edit `.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

5. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Chat
- `POST /api/chat` - Send a message and get AI response
  ```json
  {
    "message": "What are the admission requirements?",
    "conversationHistory": []
  }
  ```

## University Data Files

The system includes information about:
- Admission details and requirements
- Course information (AI, CS, Data Science, Business, English, etc.)
- Faculty members and management
- Campus facilities
- Academic calendars
- Examination guidelines
- FAQs
- Financial information
- And more...

## Technology Stack

**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose
- OpenAI API (GPT-4o-mini)
- JWT for authentication
- bcryptjs for password hashing

**Frontend:**
- React 19
- Vite
- Tailwind CSS
- Axios
- React Router

## RAG Implementation

The Retrieval-Augmented Generation (RAG) system works by:

1. **Keyword Matching**: Analyzing the user's question for relevant keywords
2. **Data Selection**: Loading only the relevant data files from the 21+ available files
3. **Context Injection**: Injecting the selected data into the system prompt
4. **Generation**: OpenAI generates accurate responses based on the provided context

This approach ensures:
- ✅ Accurate answers based on actual university data
- ✅ Reduced token usage (only relevant data is sent)
- ✅ Faster responses
- ✅ No hallucinations or made-up information

## Example Questions

Try asking:
- "What are the admission requirements for the AI program?"
- "How much are the tuition fees for Cyber Security?"
- "What is the university's mission?"
- "How do I calculate my GPA?"
- "What courses are available in the Business faculty?"
- "Where is the library located?"
- "Who are the faculty members?"

## Future Enhancements

- [ ] Streaming responses for better UX
- [ ] Vector database for semantic search
- [ ] Multi-language support (Arabic/English)
- [ ] Voice input/output
- [ ] File upload for document queries
- [ ] Chat history persistence

## License

MIT

## Contributors

ChatAOUra Development Team
