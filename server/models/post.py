
from . import SerializerMixin, datetime, db, validates

class Post(db.Model, SerializerMixin):
    # # # # # Table Name
    __tablename__ = 'posts'

    # # # # # Attributes
    id = db.Column(db.Integer, primary_key = True)
    body = db.Column(db.String(120))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

    # # # # # Relationships
    user = db.relationship('User', back_populates='posts')
    
    # # # # # Representation
    def __repr__(self):
        return f"| User: {self.username} ID: {self.id} Email: {self.email} |"
    
    # # # # # Validation

    # # # # # # # # Username
    @validates('body')
    def validate_body(self, key, body):
        assert len(body) > 0, "Body must contain content"
        return body