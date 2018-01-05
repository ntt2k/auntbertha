from flask_script import Manager
from project import app, db, Zipcode

manager = Manager(app)

@manager.command
def create_db():
    """Create a database with some test data"""
    db.drop_all()
    db.create_all()
    testdata1 = Zipcode(zipcode='78681',data='test data I')
    testdata2 = Zipcode(zipcode='95111', data='test data II')
    db.session.add(testdata1)
    db.session.add(testdata2)
    db.session.commit()

if __name__ == '__main__':
    create_db()
    manager.run()