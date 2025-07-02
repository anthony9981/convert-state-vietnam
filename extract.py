import pandas as pd
import unicodedata
import re

# Đường dẫn tới file Excel
excel_file = 'final_danh-muc-phuong-xa_moi.xlsx'  # Đặt file ở cùng thư mục với script

# Đọc dữ liệu từ file
df = pd.read_excel(excel_file)

# Chuẩn hóa key tỉnh/thành: loại bỏ dấu và thay dấu cách bằng dấu gạch ngang
def normalize_key(name):
    name = unicodedata.normalize('NFKD', name).encode('ASCII', 'ignore').decode('utf-8')
    name = re.sub(r'[^A-Z0-9 ]+', '', name.upper())
    name = name.replace(' ', '-')
    return name

# Tạo dictionary lưu các tỉnh và huyện
states = {}
cities = {}

# Duyệt qua từng dòng dữ liệu
for _, row in df.iterrows():
    province_name = row['Tên tỉnh/TP mới']
    district_name = row['Tên Quận huyện TMS (cũ)']

    province_key = normalize_key(province_name)

    # Cập nhật mảng states
    if province_key not in states:
        states[province_key] = province_name

    # Cập nhật mảng cities
    if province_key not in cities:
        cities[province_key] = []
    if pd.notna(district_name) and district_name not in cities[province_key]:
        cities[province_key].append(district_name)

# Ghi ra file provinces.php
with open('provinces.php', 'w', encoding='utf-8') as f:
    f.write("<?php\n$states['VN'] = array(\n")
    for key, name in sorted(states.items()):
        f.write(f"\t'{key}' => __( '{name}', 'woo-viet' ),\n")
    f.write(");\n")

# Ghi ra file cities.php
with open('cities.php', 'w', encoding='utf-8') as f:
    f.write("<?php\n$cities['VN'] = array(\n")
    for key, district_list in sorted(cities.items()):
        f.write(f"\t'{key}' => array(\n")
        for district in sorted(district_list):
            f.write(f"\t\t'{district}',\n")
        f.write("\t),\n")
    f.write(");\n")
