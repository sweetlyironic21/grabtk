import os
import random

def generate_sitemap(output_file, keyword_file, num_keywords=5000):
    with open(keyword_file, 'r', encoding='utf-8') as f:
        keywords = f.readlines()

    # Ensure that the number of keywords to include in the sitemap does not exceed the total number of keywords
    num_keywords = min(num_keywords, len(keywords))

    # Randomly select keywords for the sitemap
    selected_keywords = random.sample(keywords, num_keywords)

    # Generate sitemap XML content
    sitemap_content = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    for keyword in selected_keywords:
        keyword = keyword.strip()  # Remove leading/trailing whitespaces
        sitemap_content += f'  <url>\n    <loc>https://leaksone.com/onlyfans/{keyword}</loc>\n  </url>\n'

    sitemap_content += '</urlset>'

    # Save the sitemap to the output file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(sitemap_content)

if __name__ == "__main__":
    output_file = 'sitemap.xml'
    keyword_file = 'output.txt'
    num_keywords_to_include = 1000

    generate_sitemap(output_file, keyword_file, num_keywords_to_include)
    print(f"Sitemap generated and saved to {output_file}")
