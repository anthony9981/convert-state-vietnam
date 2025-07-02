import pandas as pd
import re

def generate_php_files():
    # Read the data from the file
    with open('/Users/anthony/Downloads/extract/final.txt', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    states = {}
    cities = {}

    # Skip header
    for line in lines[1:]:
        columns = line.strip().split('	')
        if len(columns) < 6:
            continue

        state_name = columns[2].strip()
        city_name = columns[5].strip()

        if not state_name or not city_name:
            continue

        # Create a slug for the state name
        state_slug = state_name.upper()
        state_slug = state_slug.replace(' ', '-')
        state_slug = state_slug.replace('TP.', 'THANH-PHO-')
        state_slug = re.sub(r'-+', '-', state_slug)


        if state_slug not in states:
            states[state_slug] = state_name
            cities[state_slug] = []

        if city_name not in cities[state_slug]:
            cities[state_slug].append(city_name)

    # Generate states.php content
    states_php_content = "<?php\n\n$states['VN'] = array(\n"
    for slug, name in sorted(states.items()):
        states_php_content += f"    '{slug}'        => __( '{name}', 'woo-viet' ),\n"
    states_php_content += ");\n"

    # Generate cities.php content
    cities_php_content = "<?php\n\n$cities['VN'] = array(\n"
    for state_slug, city_list in sorted(cities.items()):
        cities_php_content += f"    '{state_slug}'        => array(\n"
        for city in sorted(city_list):
            cities_php_content += f"        '{city}',\n"
        cities_php_content += "    ),\n"
    cities_php_content += ");\n"

    return states_php_content, cities_php_content

states_content, cities_content = generate_php_files()

with open('/Users/anthony/Downloads/extract/states.php', 'w', encoding='utf-8') as f:
    f.write(states_content)

with open('/Users/anthony/Downloads/extract/cities.php', 'w', encoding='utf-8') as f:
    f.write(cities_content)
