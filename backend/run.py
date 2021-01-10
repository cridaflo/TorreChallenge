from app import app
from app import retrieve_initial_data

retrieve_initial_data()
context = ('cert.pem', 'key.pem')
app.run(port=3000, debug=True, ssl_context=context)