import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  public teachers: any[];
  public fatcutly: any[];
  isShowPopup : false;

  colForm = "col-12";
  colPopup = "";
  constructor(private data : DataService) {
    this.teachers = this.data.teacherData.sort((t1,t2) => (t1.khoa - t2.khoa));
    this.fatcutly = this.data.facultyData;
   }

  ngOnInit(): void {
  }

  onClick(){
    this.colForm = "col-6";
    this.colPopup = "col-6";
  }

  getTeacher(fatcutly: number){
    return this.teachers.filter(t => t.khoa === fatcutly);
  }

}
