# app.py
from flask import Flask, jsonify, request
import random
import string
from flask_cors import CORS 
app = Flask(__name__)

CORS(app) # Enable CORS for all routes
@app.route('/generate-ids', methods=['POST'])
def generate_ids():
    data = request.get_json()
    index = int(data.get('index'))
    ids = generate_random_ids(index)
    return jsonify({'ids': ids})

def generate_random_ids(index):
    random_ids = []
    for _ in range(index):
        id_length = 8
        random_id = ''.join(random.choices(string.ascii_uppercase + string.digits, k=id_length))
        random_ids.append(random_id)
    return random_ids

if __name__ == '__main__':
    app.run(debug=True)
