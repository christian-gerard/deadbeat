from . import SerializerMixin, datetime, db, validates


class Friendship(db.Model, SerializerMixin):

    # # # # # Table Name
    __tablename__='friendships'

    # # # # # Attributes
    user_id1 = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True )
    user_id2 = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True )
    status = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=datetime.now())
   
    # # # # # Relationships


    # # # # # Representation
    def __repr__(self):
        return f"| user1: {self.user_id1} user2: {self.user_id2}|"
    
    # # # # # Validation

    # # # # # # # # Username
    @validates('username')
    def validate_username(self, key, username):
        if len(username) < 8:
            raise ValueError('Username must be 8 or more characters')
        else:
            return username