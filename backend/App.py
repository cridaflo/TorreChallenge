from flask import Flask
app = Flask(__name__)

@app.route('/professional_dinamics', methods=['GET'])
def get_professional_dinamics():
    return 'professional_dinamics'

@app.route('/create_cultural_profile', methods=['POST'])
def create_cultural_profile():
    return 'create_cultural_profile'

@app.route('/compare_profiles', methods=['POST'])
def compare_profiles():
    return 'compare_profiles'
    
if __name__ == '__main__':
    app.run(port=3000, debug = True)