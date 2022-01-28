import { Component, OnInit } from '@angular/core';
import { Enrollee } from '../enrollee';
import { EnrollmentService } from '../service/enrollment.service';

@Component({
  selector: 'app-enrollees',
  templateUrl: './enrollees.component.html',
  styleUrls: ['./enrollees.component.css'],
})
export class EnrolleesComponent implements OnInit {
  enrollees!: Enrollee[];
  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrollmentService.getEnrollees().subscribe((data: Enrollee[]) => {
      console.log(data);
      this.enrollees = data;
    });
  }
}
