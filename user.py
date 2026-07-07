from fastapi import APIRouter

router = APIRouter()

@router.post("/register")
def register_user(user: dict):
    return {"message": "User registered", "user": user}

@router.get("/dashboard")
def dashboard():
    return {
        "quizzes_attempted": 5,
        "score": 3
    }