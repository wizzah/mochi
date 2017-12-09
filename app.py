from flask import Flask, jsonify, render_template
import helper_functions
app = Flask(__name__)

# landing page
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

# processing
@app.route('/process', methods=['POST'])
def processing():
    # parse JSON
    if request.method != 'POST':
        # 404 page
        return render_template('404.html')
    else:
        return jsonify(url="m.co/example")