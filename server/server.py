# server.py

from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import pickle


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


# Define a simple database of users
users = {
    1: {"name": "Nasir", "age": 22},
    2: {"name": "Alice", "age": 25},
    3: {"name": "sdfghgfdsdfghgfd", "age": 35}
}



def load_model():
    with open('model.pkl', 'rb') as f:
        return pickle.load(f)

@app.route('/api/predict', methods=['POST'])
def get_users():
    model = load_model()
    data = request.json
    color = data.get('color')
    aluminium = data.get('aluminium')
    magnesium = data.get('magnesium')
    turbidity = data.get('turbidity')
    chloride = data.get('chloride')
    calcium = data.get('calcium')
    pH = data.get('pH')
    iron = data.get('iron')
    potassium = data.get('potassium')
    conductivity = data.get('conductivity')
    sodium = data.get('sodium')
    nitrate = data.get('nitrate')
    TDS = data.get('TDS')
    sulphate = data.get('sulphate')
    phosphate = data.get('phosphate')
    totalHardness = data.get('totalHardness')
    zinc = data.get('zinc')

    dataframe = pd.DataFrame({'Colour (TCU)': [color], 'Turbidity (NTU)': [turbidity], 'pH': [pH],
                              'Conductivity (uS/cm)': [conductivity],
                              'Total Dissolved Solids (mg/l)': [TDS],
                              'Total Hardness (mg/l as CaCO3)': [totalHardness], 'Aluminium (mg/l)': [aluminium],
                              'Chloride (mg/l)': [chloride], 'Total Iron (mg/l)': [iron],
                              'Sodium (mg/l)': [sodium], 'Sulphate (mg/l)': [sulphate], 'Zinc (mg/l)': [zinc],
                              'Magnesium (mg/l)': [magnesium], 'Calcium (mg/l)': [calcium],
                              'Potassium (mg/l)': [potassium], 'Nitrate (mg/l)': [nitrate],
                              'Phosphate (mg/l)': [phosphate]})


    result = model.predict(dataframe)
    if result[0] == 1.0:
        return jsonify({'error' : "This Water Quality is Non-Potable"})
    else:
        return jsonify({"success": 'This Water Quality is Potable'})

if __name__ == '__main__':
    app.run(debug=True)



    






