from fastapi import APIRouter

router = APIRouter()

quiz_data = [
    {
        "question": "Aliens landed in Delhi",
        "options": ["Fake", "Real"],
        "answer": "Fake"
    },
    {
        "question": "Government launches new scheme",
        "options": ["Fake", "Real"],
        "answer": "Real"
    }
]

@router.get("/quiz")
def get_quiz():
    return quiz_data

@router.post("/quiz/submit")
def submit_quiz(answer: dict):
    return {"message": "Answer received", "data": answer}