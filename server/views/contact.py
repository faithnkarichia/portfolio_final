from flask import Blueprint, request, jsonify
from models import db, Contact
from flask_mail import Message
from extensions import mail

contacts_bp = Blueprint("contacts", __name__)

# 📬 POST a contact message
@contacts_bp.route("/contacts", methods=["POST"])
def create_contact():
    data = request.get_json()

    firstname = data.get("firstname")
    lastname = data.get("lastname")
    email = data.get("email")
    message = data.get("message")

    if not firstname or not lastname or not email or not message:
        return jsonify({"error": "All fields are required"}), 400

    contact = Contact(
        firstname=firstname,
        lastname=lastname,
        email=email,
        message=message
    )

    db.session.add(contact)
    db.session.commit()


    msg = Message(
        subject="📨 New Contact Message",
        sender=email,
        recipients=["kashkashnkarichia77@gmail.com"],  # Your inbox
        body=f"""
        You received a new message:

        From: {firstname} {lastname} <{email}>
        Message: {message}
        """
    )

    try:
        mail.send(msg)
    except Exception as e:
        print("Email failed:", e)
        return jsonify({"error": "Message saved, but email failed"}), 500

    return jsonify({"message": "Contact message received and email sent!"}), 201


    


#  GET all contact messages
@contacts_bp.route("/contacts", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()

    contacts_list = [
        {
            "id": c.id,
            "firstname": c.firstname,
            "lastname": c.lastname,
            "email": c.email,
            "message": c.message
        }
        for c in contacts
    ]

    return jsonify(contacts_list), 200
