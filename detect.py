from fastapi import APIRouter
from app.services.ml_model import predict_fake
from app.services.scoring import get_confidence

router = APIRouter()

@router.post("/detect")
async def detect_news(data: dict):
    text = data.get("text")

    result = predict_fake(text)
    confidence = get_confidence(text)

    return {
        "result": result,
        "confidence": confidence
    }