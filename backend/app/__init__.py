from flask import Flask
import requests
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config.from_object('config')

db = SQLAlchemy(app)

from app import models, routes

#Populates the databases 
def retrieve_initial_data():
    reply = requests.get('https://bio.torre.co/api/bios/v25a07').json()

    #retrieves information of professional dynamics
    groups = reply['professionalCultureGenomeResults']['groups']
    for group in groups:
        if not bool(models.ProfessionalDynamics.query.get(group['id'])):
            prof_dynamic = models.ProfessionalDynamics(id = group['id'], name = group['text'])
            db.session.add(prof_dynamic)
            db.session.commit()
    
    #retirves information about analyses of professional culture
    analyses = reply['professionalCultureGenomeResults']['analyses']
    for analysis in analyses:
        if not bool(models.CulturalDynamics.query.filter_by(name=analysis['section']).first()):
            cul_dynamic = models.CulturalDynamics(name = analysis['section'])
            db.session.add(cul_dynamic)
            db.session.commit()

        cul_dynamic_id = models.CulturalDynamics.query.filter_by(name=analysis['section']).first().id
        
        if not bool(models.ProfessionalDynamicsCuturalalDynamics.query.filter_by(
            professional_dynamic_id = analysis['groupId'],
            cultural_dynamic_id = cul_dynamic_id
        ).first()):
            prof_cul_dynamic = models.ProfessionalDynamicsCuturalalDynamics(
                professional_dynamic_id = analysis['groupId'],
                cultural_dynamic_id = cul_dynamic_id,
                correlation_analysis = analysis['analysis']
            )
            db.session.add(prof_cul_dynamic)
            db.session.commit()




    
