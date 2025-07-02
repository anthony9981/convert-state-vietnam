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

def process_php_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    keys = re.findall(r"'([^']+)'\s*=>", content)

    for key in keys:
        new_key = remove_vietnamese_diacritics(key)
        if key != new_key:
            content = content.replace(f"'{key}'", f"'{new_key}'")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

process_php_file('/Users/anthony/Downloads/extract/states.php')
process_php_file('/Users/anthony/Downloads/extract/cities.php')
