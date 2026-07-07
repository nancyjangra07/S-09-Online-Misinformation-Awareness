from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import detect, quiz, user

app = FastAPI()

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(detect.router)
app.include_router(quiz.router)
app.include_router(user.router)

@app.get("/")
def home():
    return {"message": "Backend running 🚀"}