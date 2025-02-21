from flask import Flask, request, jsonify, redirect, url_for
from classify import classify  # Import your classification function
import sqlite3

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')  
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

create_table()  # Ensure table is created when the app starts

@app.route('/classify', methods=['POST'])
def classify_and_redirect():
    data = request.get_json()
    text = data.get('text', '')
    
    if not text:
        return jsonify({"error": "Text input is required"}), 400
    
    emotion = classify(text)  # Classify emotion
    return redirect(url_for('get_resources', category=emotion))  # Redirect to resources page

@app.route('/resources/<string:category>', methods=['GET'])
def get_resources(category):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('SELECT tips, videos, articles, links FROM Resource WHERE category = ?', (category,))
    resources = cursor.fetchall()
    
    conn.close()
    
    if not resources:
        return jsonify({'message': 'No resources found for this category'}), 404

    result = [{'tips': row['tips'], 'videos': row['videos'], 'articles': row['articles'], 'links': row['links']} for row in resources]
    return jsonify({'category': category, 'resources': result})

if __name__ == "__main__":
    app.run(debug=True)
