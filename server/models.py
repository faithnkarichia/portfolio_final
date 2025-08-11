# user
# certificates

# projects

# import SQLAlchemy,serializer


from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy_serializer import serializerMixin
db=SQLAlchemy()

class Certificate(db.Model):
    __tablename__="certificates"
    id=db.Column(db.Integer ,primary_key=True)
    title=db.Column(db.String, nullable=False)
    issuer=db.Column(db.String, nullable=False)
    date=db.Column(db.Integer ,nullable=False)
    link=db.Column(db.String ,nullable=False)
    description=db.Column(db.String, nullable=False)


    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "issuer": self.issuer,
            "date": self.date,
            "description": self.description,
            "link": self.link,
        }


class Project(db.Model):
    __tablename__="projects"
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String, nullable=False)
    link=db.Column(db.String ,nullable=False)
    description=db.Column(db.String, nullable=False)
    live_link=db.Column(db.Integer, nullable= True)
    github_link=db.Column(db.Integer, nullable=True)


class User(db.Model):
    __tablename__="user"
    id=db.Column(db.Integer, primary_key=True)
    email=db.Column(db.String,nullable=False)
    password=db.Column(db.String, nullable=False)


class Contact(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    firstname=db.Column(db.String, nullable=False)
    lastname=db.Column(db.String, nullable=False)
    email=db.Column(db.String,nullable=False)
    message=db.Column(db.String, nullable=False)