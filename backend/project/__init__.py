import os
import datetime
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy


# instantiate the app
app = Flask(__name__)

# set config
app_settings = os.getenv('APP_SETTINGS')
app.config.from_object(app_settings)

# instantiate the db
db = SQLAlchemy(app)

# model
class Zipcode(db.Model):
    __tablename__ = "zipcode"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    zipcode = db.Column(db.String(5), nullable=False)
    testdata = db.Column(db.String(1000))

    def __init__(self, zipcode, data):
        self.zipcode = zipcode
        self.testdata = data


# routes
@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong!'
    })