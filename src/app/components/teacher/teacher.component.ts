import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  public teachers: any[];
  public fatcutlys: any[];
  isShowPopup : false;
  teacher : any;
  id = "";
  isAdd = false;
  isEdit = false;

  colForm = "col-md-12";
  colPopup = "";

  constructor(private data : DataService) {
    this.teachers = this.data.teacherData.sort((t1,t2) => (t1.khoa - t2.khoa));
    this.fatcutlys = this.data.facultyData;
   }

  ngOnInit(): void {
  }
  getTeacher(fatcutly: number){
    return this.teachers.filter(t => t.khoa === fatcutly);
  }

  onSubmit(){

  }

  onClickEdit(id:number){
    this.teacher = this.teachers.find(t => t.id === id);
    this.isEdit = true;
    this.isAdd = false;
    this.colForm = "col-md-6";
    this.colPopup = "col-md-6";
  }

  onClickAdd(){
    this.colForm = "col-md-6";
    this.colPopup = "col-md-6";
    this.isAdd = true;
    this.isEdit = false;
  }
  onClosed(){
    this.colForm = "col-12";
    this.isAdd = false;
    this.isEdit = false;
  }

}
