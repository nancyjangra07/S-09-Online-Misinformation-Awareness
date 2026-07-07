def predict_fake(text):
    if not text:
        return "unknown"

    # Simple logic (you can replace with ML later)
    fake_keywords = ["shocking", "breaking", "urgent", "100% cure"]

    for word in fake_keywords:
        if word.lower() in text.lower():
            return "fake"

    return "real"