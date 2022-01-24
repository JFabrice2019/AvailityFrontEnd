import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnrollmentService } from '../service/enrollment.service';

@Component({
  selector: 'app-enroll-form',
  templateUrl: './enroll-form.component.html',
  styleUrls: ['./enroll-form.component.css'],
})
export class EnrollFormComponent implements OnInit {
  constructor(private enrollmentService: EnrollmentService) {}

  states = ['NY', 'TX', 'AR', 'GA', 'CA', 'NC', 'NJ'];
  enrollForm!: FormGroup;
  ngOnInit() {
    this.enrollForm = new FormGroup({
      FirstName: new FormControl(null, Validators.required),
      LastName: new FormControl(null, Validators.required),
      NpiNumber: new FormControl(null, Validators.required),
      BusAddress: new FormGroup({
        Line1: new FormControl(null, Validators.required),
        City: new FormControl(null, Validators.required),
        State: new FormControl(null, Validators.required),
        Zipcode: new FormControl(null, Validators.required),
      }),
      Phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{3}[)]?))s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})'
        ),
      ]),
      Email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    console.log(this.enrollForm.value);
    this.enrollmentService.register(this.enrollForm.value).subscribe(
      (response) => console.log('Success!', response),
      (error) => console.log('Error', error)
    );
  }
}
