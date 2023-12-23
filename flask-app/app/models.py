from . import db

class Role(db.Model):
    __tablename__ = 'roles' # name of the table
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    users = db.relationship('User', backref='role', lazy='dynamic') # backref creates a virtual column in the User model

    def __repr__(self):
        return f'<Role {self.name}>'

class User(db.Model):
    __tablename__ = 'users' # name of the table
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, index=True)
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id')) # foreign key

    def __repr__(self):
        return f'<Role {self.username}>'