from app import app  # Import your Flask app instance
from models import db, User, Certificate, Project, Contact  # Import your models
from werkzeug.security import generate_password_hash

with app.app_context():
    print("Seeding database...")

    # Clear existing data
    User.query.delete()
    Certificate.query.delete()
    Project.query.delete()
    Contact.query.delete()

    # Create Users
    user1 = User(
        email="faith@example.com",
        password=generate_password_hash("1234")
    )
    user2 = User(
        email="vincent@example.com",
        password=generate_password_hash("abcd")
    )

    # Create Certificates
    cert1 = Certificate(
        title="Software Engineering Certificate",
        issuer="Moringa School",
        date=2025,
        link="https://example.com/certificate1",
        description="Focused on full-stack development with React, Python, PostgreSQL, and REST APIs."
    )
    cert2 = Certificate(
        title="Soft Skills Program",
        issuer="African Management Institute",
        date=2024,
        link="https://example.com/certificate2",
        description="Learned communication, leadership, and professional ethics."
    )

    # Create Projects
    project1 = Project(
        name="Mobile Garage App",
        link="https://github.com/Faith/mobile-garage",
        description="A full-stack app that allows users to request vehicle repair services."
    )
    project2 = Project(
        name="Recipe Sharing Platform",
        link="https://github.com/Faith/recipe-app",
        description="Users can browse, add, and interact with recipes. Built using HTML, JS, and db.json."
    )

    # Create Contacts
    contact1 = Contact(
        firstname="Jane",
        lastname="Doe",
        email="jane@example.com",
        message="I love your portfolio!"
    )
    contact2 = Contact(
        firstname="John",
        lastname="Smith",
        email="john@example.com",
        message="How can I reach you for a freelance project?"
    )

    # Add and commit
    db.session.add_all([
        user1, user2,
        cert1, cert2,
        project1, project2,
        contact1, contact2
    ])
    db.session.commit()

    print("✅ Done seeding!")
