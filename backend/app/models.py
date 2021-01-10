from app import db

class ProfessionalDynamics(db.Model):
    id = db.Column(db.Integer, primary_key= True)
    name = db.Column(db.String(64), unique = True)

class CulturalDynamics(db.Model):
    id = db.Column(db.Integer, primary_key= True)
    name = db.Column(db.String(64), unique = True)

class ProfessionalDynamicsCuturalalDynamics(db.Model):
    id = db.Column(db.Integer, primary_key= True)
    professional_dynamic_id = db.Column(db.Integer, db.ForeignKey('professional_dynamics.id'))
    cultural_dynamic_id = db.Column(db.Integer, db.ForeignKey('cultural_dynamics.id'))
    correlation_analysis = db.Column(db.Float)