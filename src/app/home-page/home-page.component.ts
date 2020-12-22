import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  menuActive:boolean = false
  form:FormGroup

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup( {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.minLength(11)]),
      description: new FormControl()
    })
  }


  gotoFragment() {
    this.router.navigate(['/'], {
      fragment: 'contacts',
      queryParams: {limit: 5}
    })
  }

  submit() {

    this.form.reset()
  }

  showMenu() {
    this.menuActive = !this.menuActive
  }
}
