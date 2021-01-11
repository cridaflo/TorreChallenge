from app import db
from sqlalchemy.inspection import inspect

class Serializer(object):

    def serialize(self):
        return {c: getattr(self, c) for c in inspect(self).attrs.keys()}

    @staticmethod
    def serialize_list(l):
        return [m.serialize() for m in l]

class ProfessionalDynamics(db.Model, Serializer):
    id = db.Column(db.Integer, primary_key= True)
    name = db.Column(db.String(64), unique = True)

class CulturalDynamics(db.Model, Serializer):
    id = db.Column(db.Integer, primary_key= True)
    name = db.Column(db.String(64), unique = True)

class ProfessionalDynamicsCuturalalDynamics(db.Model, Serializer):
    id = db.Column(db.Integer, primary_key= True)
    professional_dynamic_id = db.Column(db.Integer, db.ForeignKey('professional_dynamics.id'))
    cultural_dynamic_id = db.Column(db.Integer, db.ForeignKey('cultural_dynamics.id'))
    correlation_analysis = db.Column(db.Float)