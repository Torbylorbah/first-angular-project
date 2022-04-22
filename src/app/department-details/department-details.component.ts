import { Department } from '../department'
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  dataId! : any
  dataName! : any
  @Input() department!: Department;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    
    let name = this.route.snapshot.paramMap.get('name')
    this.dataName = name
  }

}