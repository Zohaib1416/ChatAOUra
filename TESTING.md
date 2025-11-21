# Testing Guide for ChatAOUra

## Quick Start Testing

### 1. Start Backend
```powershell
cd backend
npm run dev
```

Expected output:
```
Server is running on port 5000
MongoDB connected successfully
```

### 2. Start Frontend
```powershell
cd frontend
npm run dev
```

Expected output:
```
VITE v7.x.x  ready in xxx ms
➜  Local:   http://localhost:5173/
```

### 3. Test the Chat

Open `http://localhost:5173` and try these questions:

#### Admission Questions
- "What are the admission requirements?"
- "What are the admission fees for AI program?"
- "What is the TOEFL requirement?"
- "What programs are available?"

#### Course Questions
- "Tell me about the AI courses"
- "What courses are in the Business faculty?"
- "What is the Cyber Security program about?"

#### General Questions
- "What is the university's mission?"
- "Where is the library?"
- "How do I calculate my GPA?"
- "What are the academic calendar dates?"

#### Faculty Questions
- "Who are the faculty members?"
- "Who is in the management team?"

## API Testing with curl

### Test Chat Endpoint
```powershell
curl -X POST http://localhost:5000/api/chat `
  -H "Content-Type: application/json" `
  -d '{\"message\": \"What are the admission requirements?\", \"conversationHistory\": []}'
```

### Test with Conversation History
```powershell
curl -X POST http://localhost:5000/api/chat `
  -H "Content-Type: application/json" `
  -d '{\"message\": \"Tell me more about the fees\", \"conversationHistory\": [{\"role\": \"user\", \"content\": \"What programs do you offer?\"}, {\"role\": \"assistant\", \"content\": \"We offer AI, Cyber Security, Data Science...\"}]}'
```

## Troubleshooting

### Backend Issues

**Error: OPENAI_API_KEY not found**
- Make sure you created `.env` file in the backend folder
- Add your OpenAI API key: `OPENAI_API_KEY=sk-...`

**Error: MongoDB connection failed**
- Make sure MongoDB is running: `mongod`
- Or use MongoDB Atlas cloud connection string

**Error: Module not found**
- Run: `npm install` in the backend folder

### Frontend Issues

**Error: Cannot connect to backend**
- Make sure backend is running on port 5000
- Check `.env` file has correct API URL: `VITE_API_URL=http://localhost:5000/api`

**Blank page or errors**
- Check browser console (F12)
- Run: `npm install` in the frontend folder
- Clear browser cache

### Testing Data Retrieval

To verify the data loader is working correctly, check the backend console output when you ask questions. You should see relevant data being loaded.

## Expected Behavior

✅ **Good Response Example:**
```
User: "What are the admission requirements for AI?"
Bot: "The admission requirements for the BSc (Hons) Artificial Intelligence program include:
- Valid secondary school certificate approved by Ministry of Education
- English proficiency: TOEFL 53+ or IELTS 4.5+
- Placement tests in English and Math
- Total admission fees: 74 BHD..."
```

❌ **Bad Response (if data not loaded):**
```
User: "What are the admission fees?"
Bot: "I don't have that specific information..."
```

If you see the bad response, check:
1. Backend console for errors
2. Data files are properly loaded
3. OpenAI API key is valid

## Performance Testing

Expected response times:
- Simple questions: 2-4 seconds
- Complex questions: 4-8 seconds
- Questions requiring multiple data sources: 5-10 seconds

## Next Steps After Testing

1. ✅ Verify all questions get accurate answers
2. ✅ Check conversation context is maintained
3. ✅ Test error handling (invalid questions, server errors)
4. ✅ Test with different types of questions
5. ✅ Verify data from all 21 data files can be accessed

## Production Checklist

Before deploying:
- [ ] Set `NODE_ENV=production` in backend
- [ ] Use strong JWT_SECRET
- [ ] Set up proper CORS origins
- [ ] Use environment variables for all secrets
- [ ] Enable rate limiting
- [ ] Add logging and monitoring
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Use production MongoDB cluster
- [ ] Optimize OpenAI token usage
- [ ] Add caching for common questions
