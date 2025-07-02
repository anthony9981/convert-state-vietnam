import re

def remove_vietnamese_diacritics(text):
    s = text
    s = re.sub(r'[àáạảãâầấậẩẫăằắặẳẵ]', 'a', s)
    s = re.sub(r'[ÀÁẠẢÃĂẰẮẶẲẴÂẦẤẬẨẪ]', 'A', s)
    s = re.sub(r'[èéẹẻẽêềếệểễ]', 'e', s)
    s = re.sub(r'[ÈÉẸẺẼÊỀẾỆỂỄ]', 'E', s)
    s = re.sub(r'[òóọỏõôồốộổỗơờớợởỡ]', 'o', s)
    s = re.sub(r'[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]', 'O', s)
    s = re.sub(r'[ìíịỉĩ]', 'i', s)
    s = re.sub(r'[ÌÍỊỈĨ]', 'I', s)
    s = re.sub(r'[ùúụủũưừứựửữ]', 'u', s)
    s = re.sub(r'[ÙÚỤỦŨƯỪỨỰỬỮ]', 'U', s)
    s = re.sub(r'[ỳýỵỷỹ]', 'y', s)
    s = re.sub(r'[ỲÝỴỶỸ]', 'Y', s)
    s = re.sub(r'[đ]', 'd', s)
    s = re.sub(r'[Đ]', 'D', s)
    return s

def generate_js_files():
    # Read the data from the file
    with open('/Users/anthony/Downloads/extract/final.txt', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    states = {}
    cities = {}

    # Skip header
    for line in lines[1:]:
        columns = line.strip().split('\t')
        if len(columns) < 6:
            continue

        state_name = columns[2].strip()
        city_name = columns[5].strip()

        if not state_name or not city_name:
            continue

        # Create a slug for the state name
        state_slug = remove_vietnamese_diacritics(state_name.upper())
        state_slug = state_slug.replace(' ', '-')
        state_slug = state_slug.replace('TP.', 'THANH-PHO-')
        state_slug = re.sub(r'-+', '-', state_slug)


        if state_slug not in states:
            states[state_slug] = state_name
            cities[state_slug] = []

        if city_name not in cities[state_slug]:
            cities[state_slug].append(city_name)

    # Generate states.js content
    states_js_content = "const states = {\n"
    for slug, name in sorted(states.items()):
        states_js_content += f"    '{slug}': '{name}',\n"
    states_js_content += "};\n"

    # Generate cities.js content
    cities_js_content = "const cities = {\n"
    for state_slug, city_list in sorted(cities.items()):
        cities_js_content += f"    '{state_slug}': [\n"
        for city in sorted(city_list):
            cities_js_content += f"        '{city}',\n"
        cities_js_content += "    ],\n"
    cities_js_content += "};\n"

    return states_js_content, cities_js_content

states_content, cities_content = generate_js_files()

with open('/Users/anthony/Downloads/extract/states.js', 'w', encoding='utf-8') as f:
    f.write(states_content)

with open('/Users/anthony/Downloads/extract/cities.js', 'w', encoding='utf-8') as f:
    f.write(cities_content)
