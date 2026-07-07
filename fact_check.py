def check_source(text):
    trusted_sources = ["bbc", "ndtv", "the hindu"]

    for src in trusted_sources:
        if src in text.lower():
            return "trusted"

    return "unverified"