from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["misinformation_db"]

users_collection = db["users"]
news_collection = db["news"]
quiz_collection = db["quiz"]