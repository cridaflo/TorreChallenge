from app import app
from app import retrieve_initial_data

retrieve_initial_data()
app.run(port=3000, debug=True)