from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Resource 
from config import api,db,migrate, app
from models.friendship import Friendship
from models.post import Post
from models.user import User



class User(Resource):
    def get(self):
        pass

api.add_resource(Post, '/posts')

# # # # # Execute App
if __name__ == "__main__":
    app.run(port=5555)