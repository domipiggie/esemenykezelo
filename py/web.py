from flask import Flask, render_template, send_from_directory
import os

templatefolder = os.path.abspath('')
app = Flask(__name__, template_folder=templatefolder+"/html")

@app.route('/css/<path:filename>')
def base_static(filename):
    return send_from_directory(templatefolder + '/css/', filename)

@app.route("/")
def login():
    return render_template('logintest.html')

@app.route("/home")
def home():
    return render_template('index.html')

@app.route("/register")
def register():
    return render_template('register.html')

@app.route("/addevent")
def addEvent():
    return render_template('eventAdd.html')

app.run(host='0.0.0.0', port=80, debug=True)