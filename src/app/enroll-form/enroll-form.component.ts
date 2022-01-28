import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Enrollee } from '../enrollee';
import { EnrollmentService } from '../service/enrollment.service';

@Component({
  selector: 'app-enroll-form',
  templateUrl: './enroll-form.component.html',
  styleUrls: ['./enroll-form.component.css'],
})
export class EnrollFormComponent implements OnInit {
  constructor(private enrollmentService: EnrollmentService) {}
  enrollee: Enrollee = new Enrollee('', '', '', '', '', '', '', '', '');
  states = ['NY', 'TX', 'AR', 'GA', 'CA', 'NC', 'NJ'];
  showMessage!: any;
  enrollForm!: FormGroup;
  ngOnInit() {
    this.enrollForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      npiNumber: new FormControl(null, Validators.required),

      line1: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      zipcode: new FormControl(null, Validators.required),

      phonenumber: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{3}[)]?))s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})'
        ),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.enrollmentService
      .register(this.enrollForm.value)
      .subscribe((data) => (this.showMessage = true));
  }
}
