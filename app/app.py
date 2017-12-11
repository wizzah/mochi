from flask import Flask, jsonify, render_template, request, redirect
from url_class import Url
app = Flask(__name__)

# landing page
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

# processing
@app.route('/api/url', methods=['POST'])
def processing():
    url = Url(request.args.get('url'))
    return jsonify(url = url.get_or_create_url())

@app.route('/<shortened_url>', methods=['GET'])
def redirection(shortened_url):
    url = Url(shortened_url)
    return redirect(url.get_url())
