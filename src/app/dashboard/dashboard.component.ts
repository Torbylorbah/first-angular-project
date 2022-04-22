import { Component, Input, OnInit } from '@angular/core';
import { Department } from '../department'
import { DEPARTMENTS } from '../mock_departments';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  departments : Department [] = []
  selectedDepartment! : any

  constructor(private deptserve : DepartmentService, private router:Router) { }

  ngOnInit(): void {
     this.deptserve.getDepartments().subscribe( department => this.departments = department)
     this.selectedDepartment = this.departments
  }
  onSelect(department : Department) : void{
    this.selectedDepartment = department;
    console.log(department)
  }
  navigate(department: any) {
    this.router.navigate(['/detail', department.name])
  }

}