from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_marshmallow import Marshmallow

# # # # # App Declaration
app = Flask(__name__)

# # # # # App Config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///deadbeat.db'
app.config["SESSION_TYPE"] = "sqlalchemy"
app.config["SESSION_SQLALCHEMY_TABLE"] = "sessions"

# # # # # DB Connection
db = SQLAlchemy(app)
app.config["SESSION_SQLALCHEMY"] = db
migrate = Migrate(app, db)

# # # # # REST Api
api = Api(app)

# # # # # Bcrypt
bcrypt = Bcrypt(app)

# # # # # CORS
CORS(app)