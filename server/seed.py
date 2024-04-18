from faker import Faker
import ipdb

from config import app, db
from models.user import User
from models.post import Post
from models.friendship import Friendship

from rich import print

fake = Faker()


with app.app_context():


    # # # # # BEGIN SEED
    print('\n[purple]------------- BEGIN ------------[/purple]')
    print('\n')

           

    # # # # # Clean Database
    print('[purple]Cleaning Database 🧽 [/purple]...\n')
    try:
        User.query.delete()
        Post.query.delete()
        Friendship.query.delete()
        db.session.commit()
        print('\t[green]Cleaning Complete[/green] ✅\n')
    except Exception as e:
        print(f'\t[red]Cleaning Failed[/red] {e} 😞\n')


        # # # # # Clean Database
    print('[purple]Create Users 🧽 [/purple]...\n')
    try:
        users = []

        for _ in range(20):
            pass


        Friendship.query.delete()
        db.session.commit()
        print('\t[green]Cleaning Complete[/green] ✅\n')
    except Exception as e:
        print(f'\t[red]Cleaning Failed[/red] {e} 😞\n')





    # # # # # COMPLETE SEED
    print('[green] ----------- COMPLETE 🏁 ------------ [/green]\n')
