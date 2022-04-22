import { DEPARTMENTS } from '../mock_departments';
import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  selectedDepartment!: Department;
  departments!: Department[];

  
   
  constructor(private DepartmentService: DepartmentService) { }

  ngOnInit(): void {
    this.getDepartments();
  }
  onSelect(department : Department) : void{
    this.selectedDepartment = department;
  }
  getDepartments(): void{
    this.DepartmentService.getDepartments().subscribe(departments=>this.departments = departments)
  }
}
