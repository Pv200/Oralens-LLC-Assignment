from flask import Flask, request, jsonify
from flask_cors import CORS 
import os # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

UPLOAD_FOLDER = './upload'

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/upload', methods=['POST'])
def upload():
    name = request.form.get('name')
    age = request.form.get('age')
    file = request.files.get('file')

    if file:
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)
        return jsonify({
            "message": "Data received successfully",
            "name": name,
            "age": age,
            "file_saved_as": file.filename
        }), 200

    return jsonify({"error": "No file uploaded"}), 400

if __name__ == '__main__':
    app.run(debug=True)
