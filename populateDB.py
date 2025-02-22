import pandas as pd

def populateDB(conn):
    try:
        # Populate Tips table
        df_tips = pd.read_excel('Tips.xlsx')
        df_tips.to_sql('Tips', conn, if_exists='replace', index=False)

        # Populate Videos table
        df_videos = pd.read_excel('Video.xlsx')
        df_videos.to_sql('Video', conn, if_exists='replace', index=False)

        # Populate Links table
        df_links = pd.read_excel('Links.xlsx')
        df_links.to_sql('Links', conn, if_exists='replace', index=False)

        # Populate Articles table
        df_articles = pd.read_excel('Article.xlsx')
        df_articles.to_sql('Article', conn, if_exists='replace', index=False)

    except Exception as e:
        print(f"An error occurred: {e}")

