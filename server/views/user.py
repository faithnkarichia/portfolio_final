from flask import Blueprint, request, jsonify
from models import db, User

auth_bp = Blueprint("auth", __name__)

# 🔐 Login route
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password required"}), 400

    user = User.query.filter_by(email=email).first()

    if not user :
        return jsonify({"error": "Invalid credentials"}), 401

    return jsonify({"message": "Login successful", "user": {"id": user.id, "email": user.email}}), 200
