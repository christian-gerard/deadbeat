from sqlalchemy_serializer import SerializerMixin
from datetime import datetime
from config import db, bcrypt
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property

import re