from app import app, models
from flask import request
from flask_cors import cross_origin
from sqlalchemy import or_
import json
import requests


@app.route('/professional_dynamics', methods=['GET'])
def get_professional_dynamics():
    professional_dynamics = models.ProfessionalDynamics.query.all()
    return json.dumps(models.ProfessionalDynamics.serialize_list(professional_dynamics))

@app.route('/create_cultural_profile', methods=['POST'])
def create_cultural_profile():
    if request.method == 'POST':
        requested_dynamics = [x['id'] for x in request.json]
        cul_average = []
        cultural_dynamics = models.CulturalDynamics.query.all()
        cultural_dynamics = models.CulturalDynamics.serialize_list(cultural_dynamics)
        for cul_dynamic in cultural_dynamics:
            prof_cul_dynamics = models.ProfessionalDynamicsCuturalalDynamics.query.filter(
                models.ProfessionalDynamicsCuturalalDynamics.cultural_dynamic_id == cul_dynamic['id'],
                or_(models.ProfessionalDynamicsCuturalalDynamics.professional_dynamic_id  == id for id in requested_dynamics)
            )
            prof_cul_dynamics = models.ProfessionalDynamicsCuturalalDynamics.serialize_list(prof_cul_dynamics)
            average_positive_correlation = sum([max(x['correlation_analysis']/3.0, 0) for x in prof_cul_dynamics])/len(prof_cul_dynamics)
            cul_average.append({
                'cultural_dynamic_id': cul_dynamic['id'],
                'cultural_dynamic_name': cul_dynamic['name'],
                'average_correlation': average_positive_correlation*100
            })
        return json.dumps(cul_average)

def retrieve_user_professional_culture_analyses(username):

    answer_weights = {
        'all-the-time': 4,
        'most-of-the-time': 3,
        'sometimes': 2,
        'rarely': 1,
        'never': 0
    }

    reply = requests.get('https://bio.torre.co/api/bios/'+username).json()

    analyses = reply['professionalCultureGenomeResults']['analyses']
    groups = reply['professionalCultureGenomeResults']['groups']
    cul_average = []

    cultural_dynamics = models.CulturalDynamics.query.all()
    cultural_dynamics = models.CulturalDynamics.serialize_list(cultural_dynamics)

    for cul_dynamic in cultural_dynamics:
        total_weight = 0
        total_sum = 0
        for analisys in analyses:
            if(cul_dynamic['name'] == analisys['section']):
                professional_dynamic =  [x for x in groups if x['id'] == analisys['groupId']][0]
                weight=answer_weights[professional_dynamic['answer']]
                total_weight+=weight
                total_sum += max((analisys['analysis']/3), 0)*weight
        
        cul_average.append({
                'cultural_dynamic_id': cul_dynamic['id'],
                'cultural_dynamic_name': cul_dynamic['name'],
                'average_correlation': total_sum*100/total_weight
            })
    return cul_average
        

@app.route('/compare_profiles', methods=['POST'])
def compare_profiles():
    if request.method == 'POST':
        username = request.json['username']
        return json.dumps({
            'user_cultural_profile': retrieve_user_professional_culture_analyses(username)
            })

