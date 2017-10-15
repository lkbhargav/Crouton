from flask import Flask, render_template, jsonify, request
from pymongo import Connection
from mail import sendOneEmail
from flask_cors import CORS
import datetime

app = Flask(__name__)

CORS(app)

@app.route('/contactus', methods=['POST'])
def contactus():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        currentDateTime = datetime.datetime.now().strftime("%A, %d. %B %Y %I:%M%p")

        bgb.insert({"Name":name, "Email":email,
                    "Message":message, "timestamp":currentDateTime})

        sendOneEmail('Crouton - Thank you', email, 'Crouton', 'Thank you for contacting Crouton! We will get back to you soon :)', 'bhargav.lakkur@gmail.com')

        sendOneEmail('Crouton - Contact', 'bhargav.lakkur@gmail.com', 'Crouton', str(name)+" ("+str(email)+"): "+str(message), 'bhargav.lakkur@gmail.com')

        op = {'status': '200'}
        
        return jsonify(results=op)
        
if __name__ == '__main__':
    con = Connection()

    db = con.bgbrands

    bgb = db.contactus
    
    app.run(debug=True, host='0.0.0.0', port=int("1299"))
