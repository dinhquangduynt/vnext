import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  teacherData =  [{
    id: 1,
    name: 'NGUYỄN TẤN KHÔI',
    khoa: 1,
    phone: '0903.511.888',
    mail: 'ntkhoi@dut.udn.vn',
    birthday: '1985-01-01'
  },
  {
    id: 2,
    name: 'LÊ TIẾN DŨNG',
    khoa: 3,
    phone: '0912.483.535',
    mail: 'ltdung@dut.udn.vn',
    birthday: '1985-01-21'
  },
  {
    id: 3,
    name: 'ĐẶNG HOÀI PHƯƠNG',
    khoa: 1,
    phone: '0935 578.555',
    mail: 'dhphuong@dut.udn.vn',
    birthday: '1984-10-21'
  },
  {
    id: 4,
    name: 'ĐẶNG BÁ LƯ',
    khoa: 1,
    phone: '0903.511.888',
    mail: 'ntkhoi@dut.udn.vn',
    birthday: '1983-11-13'
  },
  {
    id: 5,
    name: 'TRƯƠNG NGỌC CHÂU',
    khoa: 1,
    phone: '0905.026.168',
    mail: 'tnchau@dut.udn.vn',
    birthday: '1982-01-13'
  },
  {
    id: 6,
    name: 'VÕ ĐỨC HOÀNG (CNTT)',
    khoa: 1,
    phone: '0906.477.283',
    mail: 'hoangvd.it@dut.udn.vn',
    birthday: '1981-03-14'
  },
  {
    id: 7,
    name: 'NGUYỄN THỊ MINH HỶ',
    khoa: 1,
    phone: '0989.600.305',
    mail: 'ntmhy@dut.udn.vn',
    birthday: '1985-07-14'
  },
  {
    id: 8,
    name: 'LƯU ĐỨC BÌNH',
    khoa: 2,
    phone: '0914.015.014',
    mail: 'ldbinh@dut.udn.vn',
    birthday: '1979-01-27'
  },
  {
    id: 9,
    name: 'LÊ HOÀI NAM',
    khoa: 2,
    phone: '0906.309.302',
    mail: 'lehoainam@dut.udn.vn',
    birthday: '1978-01-21'
  },
  {
    id: 10,
    name: 'LÊ ĐÌNH DƯƠNG',
    khoa: 3,
    phone: '0905.320.755',
    mail: 'ldduong@dut.udn.vn',
    birthday: '1977-05-30'
  },
  {
    id: 11,
    name: 'VÕ QUANG SƠN',
    khoa: 3,
    phone: '0914.000.054',
    mail: 'vqson@dut.udn.vn',
    birthday: '1974-05-30'
  },
  {
    id: 12,
    name: 'PHẠM MINH TUẤN',
    khoa: 1,
    phone: '0913. 230.910',
    mail: 'pmtuan@dut.udn.vn',
    birthday: '1974-05-30'
  },
  {
    id: 13,
    name: 'HOÀNG VĂN THẠNH',
    khoa: 2,
    phone: '0976.297.068',
    mail: 'hoangvanthanh.ctm@gmail.com',
    birthday: '1974-05-30'
  },
];

  studentData = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      birthday: '2000-01-01',
      khoa: 1,
      lop: 1
    },
    {
      id: 2,
      name: 'Nguyễn Văn B',
      birthday: '2000-01-01',
      khoa: 1,
      lop: 2
    },
    {
      id: 3,
      name: 'Nguyễn Văn C',
      birthday: '2000-01-01',
      khoa: 1,
      lop: 3
    },
    {
      id: 4,
      name: 'Nguyễn Văn D',
      birthday: '2000-01-01',
      khoa: 1,
      lop: 2
    },
    {
      id: 5,
      name: 'Nguyễn Văn E',
      birthday: '2000-01-01',
      khoa: 3,
      lop: 4
    },
    {
      id: 6,
      name: 'Nguyễn Văn F',
      birthday: '2000-01-01',
      khoa: 3,
      lop: 4
    },
    {
      id: 7,
      name: 'Nguyễn Văn F',
      birthday: '2000-01-01',
      khoa: 2,
      lop: 5
    },
  ];

  classData = [
    {
      id: 1,
      name: '18T1'
    },
    {
      id: 2,
      name: '18T2'
    },
    {
      id: 3,
      name: '18T3'
    },
    {
      id: 4,
      name: '18C1A'
    },
    {
      id: 5,
      name: '13D1'
    },
  ];

  facultyData = [
    {
      id: 1,
      name: 'Công Nghệ Thông Tin'
    },
    {
      id: 2,
      name: 'Cơ Khí'
    },
    {
      id: 3,
      name: 'Điện'
    },
  ];
}
