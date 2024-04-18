
from . import SerializerMixin, db, validates, hybrid_property, bcrypt

import ipdb

class User(db.Model, SerializerMixin):

    # # # # # Table Name
    __tablename__ = 'users'

    # # # # # Attributes
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(20), unique = True, nullable = False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    _password = db.Column(db.String(20), nullable = False)

    # # # # # Relationships
    posts = db.relationship('Post', back_populates='user')

    # # # # # Representation
    def __repr__(self):
        return f"| User: {self.username} ID: {self.id} Email: {self.email} |"

    # # # # # Validation

    # # # # # # # # Username
    @validates('username')
    def validate_username(self, key, username):
        assert len(username) >= 3, "Username must not be less than 3 characters"
        return username

    # # # # # # # # Email
    @validates('email')
    def validate_email(self, key, email):
        assert '@' in email, 'Email address must contain @ symbol'
        assert '.' in email.split('@')[1], 'Email address must contain domain'
        return email

    # # # # # Hybrid Property
    @hybrid_property
    def password(self):
        raise AttributeError('Password access is restricted')
    
    @password.setter
    def password(self, new_password):
        hashed_password = bcrypt.generate_password_hash(new_password).decode('utf-8')
        self._password = hashed_password

    def authenticate(self, password_to_check):
        return bcrypt.check_password_hash(self.password, password_to_check)