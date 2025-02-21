from flask import Flask, request, jsonify
from classify import classify
import sqlite3


app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')  # Connect to SQLite database
    conn.row_factory = sqlite3.Row  # Return results as dictionaries
    return conn

def create_table():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS Resource (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category VARCHAR(50) NOT NULL,
            tips TEXT,
            videos TEXT,
            articles TEXT,
            links TEXT
        );
    ''')
    conn.commit()
    conn.close()

create_table()  # Ensure table exists when the app starts

@app.route('/classify', methods=['POST'])
def classify():
    data = request.get_json()
    text = data.get('text', '')
    emotion = classify(text)
    return jsonify({'emotion': emotion})

@app.route('/resources/<string:category>', methods=['GET'])
def get_resources(category):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('SELECT tips, videos, articles, links FROM Resources WHERE category = ?', (category,))
    resources = cursor.fetchall()  # Get all matching rows
    
    conn.close()
    
    result = [{'category': row['category'], 'tips': row['tips'], 'videos': row['videos'], 'articles':row['articles'], 'links': row['links']} for row in resources]
    return jsonify({'resources': result})