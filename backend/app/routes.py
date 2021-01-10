from app import app, models
from flask import request
import json

@app.route('/professional_dynamics', methods=['GET'])
def get_professional_dynamics():
    professional_dynamics = models.ProfessionalDynamics.query.all()
    return json.dumps(models.ProfessionalDynamics.serialize_list(professional_dynamics))

@app.route('/create_cultural_profile', methods=['POST'])
def create_cultural_profile():
    if request.method == 'POST':
        cul_average = []
        cultural_dynamics = models.CulturalDynamics.query.all()
        cultural_dynamics = models.CulturalDynamics.serialize_list(cultural_dynamics)
        for cul_dynamic in cultural_dynamics:
            prof_cul_dynamics = models.ProfessionalDynamicsCuturalalDynamics.query.filter_by(
                cultural_dynamic_id = cul_dynamic['id']
            )
            prof_cul_dynamics = models.ProfessionalDynamicsCuturalalDynamics.serialize_list(prof_cul_dynamics)
            average_positive_correlation = sum([max(x['correlation_analysis']/3.0, 0) for x in prof_cul_dynamics])/len(prof_cul_dynamics)
            cul_average.append({
                'cultural_dynamic_id': cul_dynamic['id'],
                'cultural_dynamic_name': cul_dynamic['name'],
                'average_correlation': average_positive_correlation
            })
        return json.dumps(cul_average)

@app.route('/compare_profiles', methods=['POST'])
def compare_profiles():
    return 'compare_profiles'
