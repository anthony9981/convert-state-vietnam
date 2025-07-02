# Vietnam Administrative Divisions to PHP Converter

This project contains a set of scripts to process a list of Vietnamese administrative divisions (provinces, districts, communes) from a source file and convert it into PHP arrays. The output is suitable for use in applications like e-commerce websites (e.g., for shipping address dropdowns), particularly those using a format similar to WooCommerce's country/state/city structure.

## Source Data

Download from [BaoNgheAn](https://baonghean.vn/tai-ve-danh-sach-xa-phuong-dac-khu-moi-cua-34-tinh-thanh-sau-sap-nhap-10301261.html)

[Direct Link](https://bna.1cdn.vn/2025/06/30/final_danh-muc-phuong-xa_moi.xlsx)

The primary data source is `final_danh-muc-phuong-xa_moi.xlsx`, which has been converted to a tab-separated text file `final.txt` for easier processing.

## Requirements

Before running the scripts, ensure you have the following installed:

* Python 3
* The `pandas` library for Python.

## Usage

To generate the final PHP files, follow these steps:

1. **Install dependencies:**

    ```bash
    pip install pandas
    ```

2. **Generate initial PHP files:**

    ```bash
    python3 generate_php.py
    ```

    This will create `states.php` and `cities.php` with accented keys.

3. **Remove accents from keys:**

    ```bash
    python3 remove_accents.py
    ```

    This will modify the files generated in the previous step, resulting in the final output.

## Output Files

After running the scripts, you will have the following two files:

* `states.php`: An associative array mapping URL-friendly state slugs to their proper Vietnamese names.
* `cities.php`: An associative array where keys are the state slugs, and values are arrays of districts/cities within that state.
