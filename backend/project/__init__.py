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
    data = db.Column(db.String(1000))

    def __init__(self, zipcode, data):
        self.zipcode = zipcode
        self.data = data


# routes
@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong!'
    })

@app.route('/zipcode/<zipcode>', methods=['GET'])
def get_data(zipcode):
    """Get data for one zipcode"""
    result = Zipcode.query.filter_by(zipcode=zipcode).first_or_404()
    response_object = {
        'status': 'success',
        'data': {
            'id': result.id,
            'zipcode': result.zipcode,
            'data': result.data
        }
    }
    return jsonify(response_object), 200