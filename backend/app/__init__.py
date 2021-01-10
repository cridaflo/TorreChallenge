from flask import Flask
import requests
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
db = SQLAlchemy(app)

from app import models
app.config.from_object('config')
def retrieve_initial_data(self):
    reply = requests.get('https://bio.torre.co/api/bios/v25a07')
    groups = reply.json()['professionalCultureGenomeResults']['groups']
    groups =list( map(lambda g: {'id': g['id'], 'name': g['text']}, groups))
    print(groups)

@app.before_first_request(retrieve_initial_data)

@app.route('/professional_dinamics', methods=['GET'])
def get_professional_dinamics():
    return 'professional_dinamics'

@app.route('/create_cultural_profile', methods=['POST'])
def create_cultural_profile():
    return 'create_cultural_profile'

@app.route('/compare_profiles', methods=['POST'])
def compare_profiles():
    return 'compare_profiles'
    
