from flask import Flask
from flask_migrate import Migrate
from models import db, User
from flask_cors import CORS
from extensions import mail
import os
from dotenv import load_dotenv

load_dotenv()

# set up the app 
app = Flask(__name__)

# ---------------------------
# ✅ Database config
# ---------------------------
uri = os.getenv("DATABASE_URL")  # Render sets this for Postgres
if uri and uri.startswith("postgres://"):
    uri = uri.replace("postgres://", "postgresql://", 1)  # psycopg2 fix

app.config['SQLALCHEMY_DATABASE_URI'] = uri or "sqlite:///portfolio.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

CORS(app, origins="*", supports_credentials=True)

# ---------------------------
# ✅ Mail config
# ---------------------------
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config["MAIL_USE_SSL"] = False

app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_USERNAME')

mail.init_app(app)

# ---------------------------
# ✅ Blueprints
# ---------------------------
from views import *
app.register_blueprint(auth_bp)
app.register_blueprint(project_bp)
app.register_blueprint(certificate_bp)
app.register_blueprint(contacts_bp)

if __name__ == "__main__":
    app.run(debug=True)
