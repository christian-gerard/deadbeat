from server.app import db

class Cd(db.Model):

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(40), unique = True, nullable = False)
    description = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f"| Cd: {self.username} ID: {self.id} Email: {self.email} |"