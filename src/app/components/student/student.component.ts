import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students : any[];
  fatcutlys : any[];
  classes : any[];

  colForm = "col-md-12";
  colPopup = "col-md-12";
  isEdit  = false;
  isAdd = false;
  student : any;
  isShowClass = false;
  isShowStudent = false;
  classID : number;

  fatcutlyID:number;


  constructor(private data : DataService) {
    this.students = data.studentData.sort((s1,s2) => (s1.lop - s2.lop));
    this.fatcutlys = data.facultyData.sort((f1,f2) => (f1.id - f2.id));
    this.classes = data.classData;
  }

  ngOnInit(): void {

  }

  getStudents(idClass){
    return this.students.filter(s => s.lop === idClass);
  }

  getListClasses(fatcutlyID : number){
    var i = 0;
    var classArrays = []
    for (let student of this.students){
      if (student.khoa === fatcutlyID) {
        if(!classArrays.includes(this.classes.find(s => s.id === student.lop))){
          classArrays.push(this.classes.find(s => s.id === student.lop));
        }
        }
      }
      return classArrays;
    }

    getNameClass(id : number){
      return this.classes.find(c => c.id === id);
    }

    getNameFatcutly(id : number){
      return this.fatcutlys.find(f => f.id === id);
    }

    showStudent(id : number){
      this.classID = id;
      this.isShowStudent = !this.isShowStudent;
    }
    showClass(id : number){
      console.log("test");
      this.fatcutlyID = id;
      this.isShowClass = !this.isShowClass;
    }

  onClickAdd(){
    this.isEdit = false;
    this.isAdd = true;
    this.colForm = "col-md-6";
    this.colPopup = "col-md-6";
  }



  onClickEdit(id : number){
    this.student = this.students.find(s => s.id === id);
    this.isEdit = true;
    this.isAdd = false;
    this.colForm = "col-md-6";
    this.colPopup = "col-md-6";
  }

  onClosed(){
    this.isEdit = false;
    this.isAdd = false;
    this.colForm = "col-12";
  }

  onSubmit(){

  }

}
