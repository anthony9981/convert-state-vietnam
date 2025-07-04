const cities = {
    'THANH-PHO-HA-NOI': [
        'Huyện Ba Vì',
        'Huyện Chương Mỹ',
        'Huyện Gia Lâm',
        'Huyện Hoài Đức',
        'Huyện Mê Linh',
        'Huyện Mỹ Đức',
        'Huyện Phú Xuyên',
        'Huyện Phúc Thọ',
        'Huyện Quốc Oai',
        'Huyện Sóc Sơn',
        'Huyện Thanh Oai',
        'Huyện Thanh Trì',
        'Huyện Thường Tín',
        'Huyện Thạch Thất',
        'Huyện Đan Phượng',
        'Huyện Đông Anh',
        'Huyện Ứng Hoà',
        'Quận Ba Đình',
        'Quận Bắc Từ Liêm',
        'Quận Cầu Giấy',
        'Quận Hai Bà Trưng',
        'Quận Hoàn Kiếm',
        'Quận Hoàng Mai',
        'Quận Hà Đông',
        'Quận Long Biên',
        'Quận Nam Từ Liêm',
        'Quận Thanh Xuân',
        'Quận Tây Hồ',
        'Quận Đống Đa',
        'Thị xã Sơn Tây',
    ],
    'THANH-PHO-HUE': [
        'Huyện A Lưới',
        'Huyện Phú Lộc',
        'Huyện Phú Vang',
        'Huyện Quảng Điền',
        'Quận Phú Xuân',
        'Quận Thuận Hóa',
        'Thị xã Hương Thuỷ',
        'Thị xã Hương Trà',
        'Thị xã Phong Điền',
    ],
    'TINH-AN-GIANG': [
        'Huyện An Biên',
        'Huyện An Minh',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Giang Thành',
        'Huyện Giồng Riềng',
        'Huyện Gò Quao',
        'Huyện Hòn Đất',
        'Huyện Kiên Hải',
        'Huyện Kiên Lương',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tri Tôn',
        'Huyện Tân Hiệp',
        'Huyện U Minh Thượng',
        'Huyện Vĩnh Thuận',
        'Thành phố Châu Đốc',
        'Thành phố Hà Tiên',
        'Thành phố Long Xuyên',
        'Thành phố Phú Quốc',
        'Thành phố Rạch Giá',
        'Thị xã Tân Châu',
        'Thị xã Tịnh Biên',
    ],
    'TINH-BAC-NINH': [
        'Huyện Gia Bình',
        'Huyện Hiệp Hoà',
        'Huyện Lương Tài',
        'Huyện Lạng Giang',
        'Huyện Lục Nam',
        'Huyện Lục Ngạn',
        'Huyện Sơn Động',
        'Huyện Tiên Du',
        'Huyện Tân Yên',
        'Huyện Yên Phong',
        'Huyện Yên Thế',
        'Thành phố Bắc Giang',
        'Thành phố Bắc Ninh',
        'Thị xã Chũ',
        'Thị xã Quế Võ',
        'Thị xã Thuận Thành',
        'Thị xã Từ Sơn',
        'Thị xã Việt Yên',
    ],
    'TINH-CA-MAU': [
        'Huyện Cái Nước',
        'Huyện Hoà Bình',
        'Huyện Hồng Dân',
        'Huyện Ngọc Hiển',
        'Huyện Năm Căn',
        'Huyện Phú Tân',
        'Huyện Phước Long',
        'Huyện Thới Bình',
        'Huyện Trần Văn Thời',
        'Huyện U Minh',
        'Huyện Vĩnh Lợi',
        'Huyện Đông Hải',
        'Huyện Đầm Dơi',
        'Thành phố Bạc Liêu',
        'Thành phố Cà Mau',
        'Thị xã Giá Rai',
    ],
    'TINH-CAO-BANG': [
        'Huyện Bảo Lâm',
        'Huyện Bảo Lạc',
        'Huyện Hoà An',
        'Huyện Hà Quảng',
        'Huyện Hạ Lang',
        'Huyện Nguyên Bình',
        'Huyện Quảng Hòa',
        'Huyện Thạch An',
        'Huyện Trùng Khánh',
        'Thành phố Cao Bằng',
    ],
    'TINH-DAK-LAK': [
        'Huyện Buôn Đôn',
        'Huyện Cư Kuin',
        'Huyện Cư M\'gar',
        'Huyện Ea H\'leo',
        'Huyện Ea Kar',
        'Huyện Ea Súp',
        'Huyện Krông A Na',
        'Huyện Krông Buk',
        'Huyện Krông Bông',
        'Huyện Krông Năng',
        'Huyện Krông Pắc',
        'Huyện Lắk',
        'Huyện M\'ĐrắK',
        'Huyện Phú Hoà',
        'Huyện Sông Hinh',
        'Huyện Sơn Hoà',
        'Huyện Tuy An',
        'Huyện Tây Hoà',
        'Huyện Đồng Xuân',
        'TP.Buôn Ma Thuột',
        'Thành phố Tuy Hoà',
        'Thị xã Buôn Hồ',
        'Thị xã Sông Cầu',
        'Thị xã Đông Hòa',
    ],
    'TINH-DIEN-BIEN': [
        'Huyện Mường Chà',
        'Huyện Mường Nhé',
        'Huyện Mường Ảng',
        'Huyện Nậm Pồ',
        'Huyện Tuần Giáo',
        'Huyện Tủa Chùa',
        'Huyện Điện Biên',
        'Huyện Điện Biên Đông',
        'TP.Điện Biên Phủ',
        'Thị xã Mường Lay',
    ],
    'TINH-DONG-NAI': [
        'Huyện Bù Gia Mập',
        'Huyện Bù Đăng',
        'Huyện Bù Đốp',
        'Huyện Chơn Thành',
        'Huyện Cẩm Mỹ',
        'Huyện Hớn Quản',
        'Huyện Long Thành',
        'Huyện Lộc Ninh',
        'Huyện Nhơn Trạch',
        'Huyện Phú Riềng',
        'Huyện Thống Nhất',
        'Huyện Trảng Bom',
        'Huyện Tân Phú',
        'Huyện Vĩnh Cửu',
        'Huyện Xuân Lộc',
        'Huyện Định Quán',
        'Huyện Đồng Phú',
        'Thành phố Biên Hoà',
        'Thành phố Long khánh',
        'Thành phố Đồng Xoài',
        'Thị xã Bình Long',
        'Thị xã Phước Long',
    ],
    'TINH-DONG-THAP': [
        'Huyện Cai Lậy',
        'Huyện Cao Lãnh',
        'Huyện Châu Thành',
        'Huyện Chợ Gạo',
        'Huyện Cái Bè',
        'Huyện Gò Công Tây',
        'Huyện Gò Công Đông',
        'Huyện Hồng Ngự',
        'Huyện Lai Vung',
        'Huyện Lấp Vò',
        'Huyện Tam Nông',
        'Huyện Thanh Bình',
        'Huyện Tháp Mười',
        'Huyện Tân Hồng',
        'Huyện Tân Phú Đông',
        'Huyện Tân Phước',
        'Thành phố Cao Lãnh',
        'Thành phố Gò Công',
        'Thành phố Hồng Ngự',
        'Thành phố Mỹ Tho',
        'Thành phố Sa Đéc',
        'Thị xã Cai Lậy',
    ],
    'TINH-GIA-LAI': [
        'Huyện An Lão',
        'Huyện Chư Prông',
        'Huyện Chư Păh',
        'Huyện Chư Pưh',
        'Huyện Chư Sê',
        'Huyện Hoài Ân',
        'Huyện Ia Grai',
        'Huyện IaPa',
        'Huyện Kbang',
        'Huyện Krông Pa',
        'Huyện Kông Chro',
        'Huyện Mang Yang',
        'Huyện Phù Cát',
        'Huyện Phù Mỹ',
        'Huyện Phú Thiện',
        'Huyện Tuy Phước',
        'Huyện Tây Sơn',
        'Huyện Vân Canh',
        'Huyện Vĩnh Thạnh',
        'Huyện Đak Đoa',
        'Huyện ĐakPơ',
        'Huyện Đức Cơ',
        'Thành phố Pleiku',
        'Thành phố Quy Nhơn',
        'Thị xã An Khê',
        'Thị xã An Nhơn',
        'Thị xã Ayun Pa',
        'Thị xã Hoài Nhơn',
    ],
    'TINH-HA-TINH': [
        'Huyện Can Lộc',
        'Huyện Cẩm Xuyên',
        'Huyện Hương Khê',
        'Huyện Hương Sơn',
        'Huyện Kỳ Anh',
        'Huyện Nghi Xuân',
        'Huyện Thạch Hà',
        'Huyện Vũ Quang',
        'Huyện Đức Thọ',
        'Thành phố Hà Tĩnh',
        'Thị xã Hồng Lĩnh',
        'Thị xã Kỳ Anh',
    ],
    'TINH-HUNG-YEN': [
        'Huyện Hưng Hà',
        'Huyện Khoái Châu',
        'Huyện Kim Động',
        'Huyện Kiến Xương',
        'Huyện Phù Cừ',
        'Huyện Quỳnh Phụ',
        'Huyện Thái Thụy',
        'Huyện Tiên Lữ',
        'Huyện Tiền Hải',
        'Huyện Văn Giang',
        'Huyện Văn Lâm',
        'Huyện Vũ Thư',
        'Huyện Yên Mỹ',
        'Huyện Ân Thi',
        'Huyện Đông Hưng',
        'Thành phố Hưng Yên',
        'Thành phố Thái Bình',
        'Thị xã Mỹ Hào',
    ],
    'TINH-KHANH-HOA': [
        'Huyện Bác Ái',
        'Huyện Cam Lâm',
        'Huyện Diên Khánh',
        'Huyện Khánh Sơn',
        'Huyện Khánh Vĩnh',
        'Huyện Ninh Hải',
        'Huyện Ninh Phước',
        'Huyện Ninh Sơn',
        'Huyện Thuận Bắc',
        'Huyện Thuận Nam',
        'Huyện Trường Sa',
        'Huyện Vạn Ninh',
        'TP.Phan Rang-Tháp Chàm',
        'Thành phố Cam Ranh',
        'Thành phố Nha Trang',
        'Thị xã Ninh Hoà',
    ],
    'TINH-LAI-CHAU': [
        'Huyện Mường Tè',
        'Huyện Nậm Nhùn',
        'Huyện Phong Thổ',
        'Huyện Sìn Hồ',
        'Huyện Tam Đường',
        'Huyện Than Uyên',
        'Huyện Tân Uyên',
        'Thành phố Lai Châu',
    ],
    'TINH-LAM-DONG': [
        'Huyện Bảo Lâm',
        'Huyện Bắc Bình',
        'Huyện Cư Jút',
        'Huyện Di Linh',
        'Huyện Hàm Thuận Bắc',
        'Huyện Hàm Thuận Nam',
        'Huyện Hàm Tân',
        'Huyện Krông Nô',
        'Huyện Lâm Hà',
        'Huyện Lạc Dương',
        'Huyện Phú Quý',
        'Huyện Tuy Phong',
        'Huyện Tuy Đức',
        'Huyện Tánh Linh',
        'Huyện Đam Rông',
        'Huyện Đơn Dương',
        'Huyện Đạ Huoai',
        'Huyện Đắk Glong',
        'Huyện Đắk Mil',
        'Huyện Đắk R\'Lấp',
        'Huyện Đắk Song',
        'Huyện Đức Linh',
        'Huyện Đức Trọng',
        'Thành phố Bảo Lộc',
        'Thành phố Gia Nghĩa',
        'Thành phố Phan Thiết',
        'Thành phố Đà Lạt',
        'Thị xã La Gi',
    ],
    'TINH-LANG-SON': [
        'Huyện Bình Gia',
        'Huyện Bắc Sơn',
        'Huyện Cao Lộc',
        'Huyện Chi Lăng',
        'Huyện Hữu Lũng',
        'Huyện Lộc Bình',
        'Huyện Tràng Định',
        'Huyện Văn Lãng',
        'Huyện Văn Quan',
        'Huyện Đình Lập',
        'Thành phố Lạng Sơn',
    ],
    'TINH-LAO-CAI': [
        'Huyện Bát Xát',
        'Huyện Bảo Thắng',
        'Huyện Bảo Yên',
        'Huyện Bắc Hà',
        'Huyện Lục Yên',
        'Huyện Mù Cang Chải',
        'Huyện Mường Khương',
        'Huyện Si Ma Cai',
        'Huyện Trạm Tấu',
        'Huyện Trấn Yên',
        'Huyện Văn Bàn',
        'Huyện Văn Chấn',
        'Huyện Văn Yên',
        'Huyện Yên Bình',
        'Thành phố Lào Cai',
        'Thành phố Yên Bái',
        'Thị xã Nghĩa Lộ',
        'Thị xã Sa Pa',
    ],
    'TINH-NGHE-AN': [
        'Huyện Anh Sơn',
        'Huyện Con Cuông',
        'Huyện Diễn Châu',
        'Huyện Hưng Nguyên',
        'Huyện Kỳ Sơn',
        'Huyện Nam Đàn',
        'Huyện Nghi Lộc',
        'Huyện Nghĩa Đàn',
        'Huyện Quế Phong',
        'Huyện Quỳ Châu',
        'Huyện Quỳ Hợp',
        'Huyện Quỳnh Lưu',
        'Huyện Thanh Chương',
        'Huyện Tân Kỳ',
        'Huyện Tương Dương',
        'Huyện Yên Thành',
        'Huyện Đô Lương',
        'Thành phố Vinh',
        'Thị xã Hoàng Mai',
        'Thị xã Thái Hoà',
    ],
    'TINH-NINH-BINH': [
        'Huyện Bình Lục',
        'Huyện Gia Viễn',
        'Huyện Giao Thuỷ',
        'Huyện Hải Hậu',
        'Huyện Kim Sơn',
        'Huyện Lý Nhân',
        'Huyện Nam Trực',
        'Huyện Nghĩa Hưng',
        'Huyện Nho quan',
        'Huyện Thanh Liêm',
        'Huyện Trực Ninh',
        'Huyện Vụ Bản',
        'Huyện Xuân Trường',
        'Huyện Yên Khánh',
        'Huyện Yên Mô',
        'Huyện Ý Yên',
        'Thành phố Hoa Lư',
        'Thành phố Nam Định',
        'Thành phố Phủ Lý',
        'Thành phố Tam Điệp',
        'Thị xã Duy Tiên',
        'Thị xã Kim Bảng',
    ],
    'TINH-PHU-THO': [
        'Huyện Bình Xuyên',
        'Huyện Cao Phong',
        'Huyện Cẩm Khê',
        'Huyện Hạ Hoà',
        'Huyện Kim Bôi',
        'Huyện Lâm Thao',
        'Huyện Lương Sơn',
        'Huyện Lạc Sơn',
        'Huyện Lạc Thuỷ',
        'Huyện Lập Thạch',
        'Huyện Mai Châu',
        'Huyện Phù Ninh',
        'Huyện Sông Lô',
        'Huyện Tam Dương',
        'Huyện Tam Nông',
        'Huyện Tam Đảo',
        'Huyện Thanh Ba',
        'Huyện Thanh Sơn',
        'Huyện Thanh Thuỷ',
        'Huyện Tân Lạc',
        'Huyện Tân Sơn',
        'Huyện Vĩnh Tường',
        'Huyện Yên Lạc',
        'Huyện Yên Lập',
        'Huyện Yên Thuỷ',
        'Huyện Đoan Hùng',
        'Huyện Đà Bắc',
        'Thành phố Hoà Bình',
        'Thành phố Phúc Yên',
        'Thành phố Việt Trì',
        'Thành phố Vĩnh Yên',
        'Thị xã Phú Thọ',
    ],
    'TINH-QUANG-NGAI': [
        'Huyện Ba Tơ',
        'Huyện Bình Sơn',
        'Huyện Ia H\'Drai',
        'Huyện Kon Plông',
        'Huyện Kon Rẫy',
        'Huyện Lý Sơn',
        'Huyện Minh Long',
        'Huyện Mộ Đức',
        'Huyện Nghĩa Hành',
        'Huyện Ngọc Hồi',
        'Huyện Sa Thầy',
        'Huyện Sơn Hà',
        'Huyện Sơn Tây',
        'Huyện Sơn Tịnh',
        'Huyện Trà Bồng',
        'Huyện Tu Mơ Rông',
        'Huyện Tư Nghĩa',
        'Huyện Đăk Hà',
        'Huyện Đắk Glei',
        'Huyện Đắk Tô',
        'Thành phố Kon Tum',
        'Thành phố Quảng Ngãi',
        'Thị xã Đức Phổ',
    ],
    'TINH-QUANG-NINH': [
        'Huyện Ba Chẽ',
        'Huyện Bình Liêu',
        'Huyện Cô Tô',
        'Huyện Hải Hà',
        'Huyện Tiên Yên',
        'Huyện Vân Đồn',
        'Huyện Đầm Hà',
        'Thành phố Cẩm Phả',
        'Thành phố Hạ Long',
        'Thành phố Móng Cái',
        'Thành phố Uông Bí',
        'Thành phố Đông Triều',
        'Thị xã Quảng Yên',
    ],
    'TINH-QUANG-TRI': [
        'Huyện Bố Trạch',
        'Huyện Cam Lộ',
        'Huyện Gio Linh',
        'Huyện Hướng Hoá',
        'Huyện Hải Lăng',
        'Huyện Lệ Thuỷ',
        'Huyện Minh Hoá',
        'Huyện Quảng Ninh',
        'Huyện Quảng Trạch',
        'Huyện Triệu Phong',
        'Huyện Tuyên Hoá',
        'Huyện Vĩnh Linh',
        'Huyện Đa Krông',
        'Huyện Đảo Cồn Cỏ',
        'Thành phố Đông Hà',
        'Thành phố Đồng Hới',
        'Thị xã Ba Đồn',
        'Thị xã Quảng Trị',
    ],
    'TINH-SON-LA': [
        'Huyện Bắc Yên',
        'Huyện Mai Sơn',
        'Huyện Mường La',
        'Huyện Phù Yên',
        'Huyện Quỳnh Nhai',
        'Huyện Sông Mã',
        'Huyện Sốp Cộp',
        'Huyện Thuận Châu',
        'Huyện Vân Hồ',
        'Huyện Yên Châu',
        'Thành phố Sơn La',
        'Thị xã Mộc Châu',
    ],
    'TINH-TAY-NINH': [
        'Huyện Bến Cầu',
        'Huyện Bến Lức',
        'Huyện Châu Thành',
        'Huyện Cần Giuộc',
        'Huyện Cần Đước',
        'Huyện Dương Minh Châu',
        'Huyện Gò Dầu',
        'Huyện Mộc Hoá',
        'Huyện Thạnh Hoá',
        'Huyện Thủ Thừa',
        'Huyện Tân Biên',
        'Huyện Tân Châu',
        'Huyện Tân Hưng',
        'Huyện Tân Thạnh',
        'Huyện Tân Trụ',
        'Huyện Vĩnh Hưng',
        'Huyện Đức Hoà',
        'Huyện Đức Huệ',
        'Thành phố Tân An',
        'Thành phố Tây Ninh',
        'Thị xã Hoà Thành',
        'Thị xã Kiến Tường',
        'Thị xã Trảng Bàng',
    ],
    'TINH-THAI-NGUYEN': [
        'Huyện Ba Bể',
        'Huyện Bạch Thông',
        'Huyện Chợ Mới',
        'Huyện Chợ Đồn',
        'Huyện Na Rì',
        'Huyện Ngân Sơn',
        'Huyện Phú Bình',
        'Huyện Phú Lương',
        'Huyện Pác Nặm',
        'Huyện Võ Nhai',
        'Huyện Đại Từ',
        'Huyện Định Hoá',
        'Huyện Đồng Hỷ',
        'Thành phố Bắc Kạn',
        'Thành phố Phổ Yên',
        'Thành phố Sông Công',
        'Thành phố Thái Nguyên',
    ],
    'TINH-THANH-HOA': [
        'Huyện Bá Thước',
        'Huyện Cẩm Thuỷ',
        'Huyện Hoằng Hoá',
        'Huyện Hà Trung',
        'Huyện Hậu Lộc',
        'Huyện Lang Chánh',
        'Huyện Mường Lát',
        'Huyện Nga Sơn',
        'Huyện Ngọc Lặc',
        'Huyện Như Thanh',
        'Huyện Như Xuân',
        'Huyện Nông Cống',
        'Huyện Quan Hoá',
        'Huyện Quan Sơn',
        'Huyện Quảng Xương',
        'Huyện Thiệu Hoá',
        'Huyện Thường Xuân',
        'Huyện Thạch Thành',
        'Huyện Thọ Xuân',
        'Huyện Triệu Sơn',
        'Huyện Vĩnh Lộc',
        'Huyện Yên Định',
        'Thành Phố Sầm Sơn',
        'Thành phố Thanh Hoá',
        'Thị xã Bỉm Sơn',
        'Thị xã Nghi Sơn',
    ],
    'TINH-TUYEN-QUANG': [
        'Huyện Bắc Mê',
        'Huyện Bắc Quang',
        'Huyện Chiêm Hoá',
        'Huyện Hoàng Su Phì',
        'Huyện Hàm Yên',
        'Huyện Lâm Bình',
        'Huyện Mèo Vạc',
        'Huyện Na Hang',
        'Huyện Quang Bình',
        'Huyện Quản Bạ',
        'Huyện Sơn Dương',
        'Huyện Vị Xuyên',
        'Huyện Xín Mần',
        'Huyện Yên Minh',
        'Huyện Yên Sơn',
        'Huyện Đồng Văn',
        'Thành phố Hà Giang',
        'Thành phố Tuyên Quang',
    ],
    'TINH-VINH-LONG': [
        'Huyện Ba Tri',
        'Huyện Bình Tân',
        'Huyện Bình Đại',
        'Huyện Châu Thành',
        'Huyện Chợ Lách',
        'Huyện Càng Long',
        'Huyện Cầu Kè',
        'Huyện Cầu Ngang',
        'Huyện Duyên Hải',
        'Huyện Giồng Trôm',
        'Huyện Long Hồ',
        'Huyện Mang Thít',
        'Huyện Mỏ Cày Bắc',
        'Huyện Mỏ Cày Nam',
        'Huyện Tam Bình',
        'Huyện Thạnh Phú',
        'Huyện Tiểu Cần',
        'Huyện Trà Cú',
        'Huyện Trà Ôn',
        'Huyện Vũng Liêm',
        'Thành phố Bến Tre',
        'Thành phố Trà Vinh',
        'Thành phố Vĩnh Long',
        'Thị xã Bình Minh',
        'Thị xã Duyên Hải',
    ],
    'TP-CAN-THO': [
        'Huyện Châu Thành',
        'Huyện Châu Thành A',
        'Huyện Cù Lao Dung',
        'Huyện Cờ Đỏ',
        'Huyện Kế Sách',
        'Huyện Long Mỹ',
        'Huyện Long Phú',
        'Huyện Mỹ Tú',
        'Huyện Mỹ Xuyên',
        'Huyện Phong Điền',
        'Huyện Phụng Hiệp',
        'Huyện Thạnh Trị',
        'Huyện Thới Lai',
        'Huyện Trần Đề',
        'Huyện Vĩnh Thạnh',
        'Huyện Vị Thủy',
        'Quận Bình Thuỷ',
        'Quận Cái Răng',
        'Quận Ninh Kiều',
        'Quận Thốt Nốt',
        'Quận Ô Môn',
        'Thành phố Ngã Bảy',
        'Thành phố Sóc Trăng',
        'Thành phố Vị Thanh',
        'Thị xã Long Mỹ',
        'Thị xã Ngã Năm',
        'Thị xã Vĩnh Châu',
    ],
    'TP-DA-NANG': [
        'Huyện Bắc Trà My',
        'Huyện Duy Xuyên',
        'Huyện Hiệp Đức',
        'Huyện Hoà Vang',
        'Huyện Nam Giang',
        'Huyện Nam Trà My',
        'Huyện Núi Thành',
        'Huyện Phú Ninh',
        'Huyện Phước Sơn',
        'Huyện Quế Sơn',
        'Huyện Thăng Bình',
        'Huyện Tiên Phước',
        'Huyện Tây Giang',
        'Huyện Đông Giang',
        'Huyện Đại Lộc',
        'Huyện đảo Hoàng Sa',
        'Quận Cẩm Lệ',
        'Quận Hải Châu',
        'Quận Liên Chiểu',
        'Quận Ngũ Hành Sơn',
        'Quận Sơn Trà',
        'Quận Thanh Khê',
        'Thành phố Hội An',
        'Thành phố Tam Kỳ',
        'Thị xã Điện Bàn',
    ],
    'TP-HAI-PHONG': [
        'Huyện An Lão',
        'Huyện Bình Giang',
        'Huyện Bạch Long Vĩ',
        'Huyện Cát Hải',
        'Huyện Cẩm Giàng',
        'Huyện Gia Lộc',
        'Huyện Kim Thành',
        'Huyện Kiến Thụy',
        'Huyện Nam Sách',
        'Huyện Ninh Giang',
        'Huyện Thanh Hà',
        'Huyện Thanh Miện',
        'Huyện Tiên Lãng',
        'Huyện Tứ Kỳ',
        'Huyện Vĩnh Bảo',
        'Quận An Dương',
        'Quận Dương Kinh',
        'Quận Hải An',
        'Quận Hồng Bàng',
        'Quận Kiến An',
        'Quận Lê Chân',
        'Quận Ngô Quyền',
        'Quận Đồ Sơn',
        'Thành phố Chí Linh',
        'Thành phố Hải Dương',
        'Thành phố Thuỷ Nguyên',
        'Thị xã Kinh Môn',
    ],
    'TP-HO-CHI-MINH': [
        'Huyện Bàu Bàng',
        'Huyện Bình Chánh',
        'Huyện Bắc Tân Uyên',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Cần Giờ',
        'Huyện Củ Chi',
        'Huyện Dầu Tiếng',
        'Huyện Hóc Môn',
        'Huyện Long Đất',
        'Huyện Nhà Bè',
        'Huyện Phú Giáo',
        'Huyện Xuyên Mộc',
        'Quận 1',
        'Quận 10',
        'Quận 11',
        'Quận 12',
        'Quận 3',
        'Quận 4',
        'Quận 5',
        'Quận 6',
        'Quận 7',
        'Quận 8',
        'Quận Bình Thạnh',
        'Quận Bình Tân',
        'Quận Gò Vấp',
        'Quận Phú Nhuận',
        'Quận Tân Bình',
        'Quận Tân Phú',
        'Thành phố Bà Rịa',
        'Thành phố Bến Cát',
        'Thành phố Dĩ An',
        'Thành phố Phú Mỹ',
        'Thành phố Thuận An',
        'Thành phố Thủ Dầu Một',
        'Thành phố Thủ Đức',
        'Thành phố Tân Uyên',
        'Thành phố Vũng Tàu',
    ],
};
