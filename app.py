from flask import Flask, request, jsonify, redirect, url_for
from classify import classify  # Import your classification function
import sqlite3
from populateDB import populateDB

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('mindCheckDB.db')  
    conn.row_factory = sqlite3.Row  # Return results as dictionaries
    return conn

def create_table():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS Tips (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category VARCHAR(50) NOT NULL,
            tips TEXT
        );      
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS Videos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                category VARCHAR(50) NOT NULL,
                title TEXT,
                url TEXT
            );
    ''')
    cursor.execute('''                   
         CREATE TABLE IF NOT EXISTS Links (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category VARCHAR(50) NOT NULL,
            title TEXT,
            url TEXT
        );
    ''')
    cursor.execute('''              
        CREATE TABLE IF NOT EXISTS Articles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category VARCHAR(50) NOT NULL,
            title TEXT,
            url TEXT
        );    
    ''')
    conn.commit()
    populateDB(conn)  # Populate tables with resources
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

    # Fetch data separately from each table
    cursor.execute('SELECT tips FROM Tips WHERE category = ?', (category,))
    tips = [row[0] for row in cursor.fetchall()]  # Extract tips from tuples

    cursor.execute('SELECT title, url FROM Video WHERE category = ?', (category,))
    videos = [{'title': row[0], 'url': row[1]} for row in cursor.fetchall()]

    cursor.execute('SELECT title, url FROM Links WHERE category = ?', (category,))
    links = [{'title': row[0], 'url': row[1]} for row in cursor.fetchall()]

    cursor.execute('SELECT title, url FROM Article WHERE category = ?', (category,))
    articles = [{'title': row[0], 'url': row[1]} for row in cursor.fetchall()]

    conn.close()

    # Check if any data was found
    if not (tips or videos or links or articles):
        return jsonify({'message': 'No resources found for this category'}), 404

    # Construct response
    result = {
        'category': category,
        'tips': tips,
        'videos': videos,
        'links': links,
        'articles': articles
    }

    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)
