import os
import random

def replace_and_save_html(source_file, keyword_file, output_folder):
    # Specify encoding when reading the HTML file
    with open(source_file, 'r', encoding='utf-8') as f:
        source_html = f.read()

    # Specify encoding when reading the keyword file
    with open(keyword_file, 'r', encoding='utf-8') as f:
        keywords = f.readlines()

    # Process each keyword
    updated_keywords = []
    for keyword in keywords:
        username = keyword.strip()  # Remove leading/trailing whitespaces

        # Replace placeholders in HTML
        target_keyword = f'{username}'  # Assuming the target keyword is the same as the username
        replaced_html = source_html.replace('fitbryceadams', f'{target_keyword}') \
            .replace('${username}', username) \
            .replace('${keyword}', f'{target_keyword}') 

        # Replace "146 photos and 12 videos" with random values
        replaced_html = replaced_html.replace('146 photos and 12 videos', f'{random.randint(1, 200)} photos and {random.randint(1, 50)} videos')

        # Replace "1.avif" with a random value from 1 to 11
        replaced_html = replaced_html.replace('1.avif', f'{random.randint(1, 11)}.avif')

        # Replace "1 GB+" with a random number between 1 and 3.9 followed by " GB+"
        replaced_html = replaced_html.replace('1 GB+', f'{random.uniform(1, 3.9):.2f} GB')

        # Save the replaced HTML in the output folder with the username as the filename
        output_filename = os.path.join(output_folder, f'{username}.html')
        with open(output_filename, 'w', encoding='utf-8') as f:
            f.write(replaced_html)

        updated_keywords.append(username)
        
        link_tags = ""
        for _ in range(10):
            random_username = random.choice(keywords)
            link_tags += f'<a href="https://leaksone.com/onlyfans/{random_username}">{random_username} Onlyfans Leaks</a><br>\n'

    # Find the position of <h3>Lastest Found Leaks</h3> and insert the links below it
        index_h3 = replaced_html.find('<h3>Lastest Found Leaks</h3>')
        replaced_html = replaced_html[:index_h3 + len('<h3>Lastest Found Leaks</h3>')] + '<br>' + '<br>' + '\n' + link_tags + replaced_html[index_h3 + len('<h3>Lastest Found Leaks</h3>'):]

        # Save the final HTML with added <a> tags
        final_output_filename = os.path.join(output_folder, f'{target_keyword}.html')
        with open(final_output_filename, 'w', encoding='utf-8') as f:
            f.write(replaced_html)
        

    # Update the keyword file with the remaining keywords (excluding the processed one)
    # with open(keyword_file, 'w', encoding='utf-8') as f:
    #     f.write('\n'.join(updated_keywords[1:]))  # Exclude the 0 index keyword

    # Clear the keyword file if all keywords have been processed
    # if len(updated_keywords) == 1:
    #     open(keyword_file, 'w', encoding='utf-8').close()

    # Add three <a> tags just below <h3>Lastest Found Leaks</h3>



def main():
    source_file = 'source.html'
    keyword_file = 'output.txt'
    output_folder = 'onlyfans'

    # Create the output folder if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)

    replace_and_save_html(source_file, keyword_file, output_folder)


if __name__ == "__main__":
    main()
