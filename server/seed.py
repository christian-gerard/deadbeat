from app import app, db
from models import cd, user
from faker import Faker

fake = Faker()

def seed_users(num_users=10):
    for _ in range(num_users):
        user = User(username=fake.user_name(), email=fake.email())
        db.session.add(user)
    db.session.commit()

def seed_cds(num_cds=100):
    for _ in range(num_cds):
        cd = Cd(title=fake.title(), description=fake.description())

if __name__ == '__main__':
    with app.app_context():
        seed_users()
