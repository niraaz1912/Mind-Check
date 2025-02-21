import pandas as pd
import sqlite3


def populateDB(conn):
    try:
        # Populate Tips table
        df_tips = pd.read_excel('Tips.xlsx')
        # Ensure that your Excel file has the columns: 'category' and 'tips'
        df_tips.to_sql('Tips', conn, if_exists='append', index=False)
        print("Tips table populated successfully.")

        # Populate Videos table
        df_videos = pd.read_excel('Videos.xlsx')
        # Ensure that your Excel file has the columns: 'category', 'title', and 'url'
        df_videos.to_sql('Videos', conn, if_exists='append', index=False)
        print("Videos table populated successfully.")

        # Populate Links table
        df_links = pd.read_excel('Links.xlsx')
        # Ensure that your Excel file has the columns: 'category', 'title', and 'url'
        df_links.to_sql('Links', conn, if_exists='append', index=False)
        print("Links table populated successfully.")

        # Populate Articles table
        df_articles = pd.read_excel('Articles.xlsx')
        # Ensure that your Excel file has the columns: 'category', 'title', and 'url'
        df_articles.to_sql('Articles', conn, if_exists='append', index=False)
        print("Articles table populated successfully.")

    except Exception as e:
        print(f"An error occurred: {e}")

