import {Component} from '@angular/core';

export class Student {
  constructor(public surname: string,
              public name: string,
              public patronymic: string,
              public dateOfBirth: Date,
              public averageGrade: number) {
  }

}

const STUDENTS: Student[] =
  [
    {surname: "Ivannov", name: "Ivan", patronymic: "Ivanovich", dateOfBirth: new Date(1999, 12, 13), averageGrade: 4.3},
    {surname: "Petrov", name: "Petr", patronymic: "Petrovich", dateOfBirth: new Date(1997, 9, 23), averageGrade: 3.8},
    {surname: "Sidorov", name: "Sidr", patronymic: "Sidorovich", dateOfBirth: new Date(1998, 3, 8), averageGrade: 4.9},
    {surname: "Makarov", name: "Makar", patronymic: "Makarovich", dateOfBirth: new Date(2001, 11, 4), averageGrade: 4.1},
    {surname: "Alexandrov", name: "Alex", patronymic: "Alexandrovich", dateOfBirth: new Date(2005, 8, 19), averageGrade: 3.7}
  ]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterQuery: string = "";
  hideAdd: boolean = false;
  positionService = 0;
  tableHeaders: string[] = ['index', 'surname', 'name', 'patronymic', 'dateOfBirth', 'averageGrade'];
  data = STUDENTS;
  newStudent: Student = new Student("", "", "", new Date(), 0);


  addStudent(newStudent: Student): void {
    this.data.push(new Student(newStudent.surname, newStudent.name, newStudent.patronymic, newStudent.dateOfBirth, newStudent.averageGrade));
  }

  sort(parameter: string) {
    switch (parameter) {
      case 'surname':
        this.data.sort((a, b) => a["surname"] > b["surname"] ? 1 : a["surname"] < b["surname"] ? -1 : 0);
        break;
      case 'name':
        this.data.sort((a, b) => a["name"] > b["name"] ? 1 : a["name"] < b["name"] ? -1 : 0);
        break;
      case 'patronymic':
        this.data.sort((a, b) => a["patronymic"] > b["patronymic"] ? 1 : a["patronymic"] < b["patronymic"] ? -1 : 0);
        break;
      case 'dateOfBirth':
        this.data.sort((a, b) => a["dateOfBirth"] > b["dateOfBirth"] ? 1 : a["dateOfBirth"] < b["dateOfBirth"] ? -1 : 0);
        break;
      case 'averageGrade':
        this.data.sort((a, b) => a["averageGrade"] > b["averageGrade"] ? 1 : a["averageGrade"] < b["averageGrade"] ? -1 : 0);
        break;
    }
  }

  deleteStudent(position: number) {
    if (confirm('Are you sure to delete ' + this.data[position].name + '?')) {
      this.data.splice(position, 1);
    }
  }

  changeStudent(position: number) {
    this.positionService = position;
    this.hideAdd = true;
    this.newStudent.surname = this.data[position].surname;
    this.newStudent.name = this.data[position].name;
    this.newStudent.patronymic = this.data[position].patronymic;
    this.newStudent.dateOfBirth = this.data[position].dateOfBirth;
    this.newStudent.averageGrade = this.data[position].averageGrade;
  }

  saveStudent() {
    this.data[this.positionService].surname = this.newStudent.surname;
    this.data[this.positionService].name = this.newStudent.name;
    this.data[this.positionService].patronymic = this.newStudent.patronymic;
    this.data[this.positionService].dateOfBirth = this.newStudent.dateOfBirth;
    this.data[this.positionService].averageGrade = this.newStudent.averageGrade;
    this.hideAdd = false;
  }


}
