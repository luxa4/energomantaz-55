import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  menuActive:boolean = false
  form:FormGroup
  zayavkaSent:boolean=false

  constructor(private router:Router, private route:ActivatedRoute, private http: HttpClient) { }

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
    const sendEmail = {
      name: this.form.get("name").value,
      email: this.form.get('email').value,
      phone: this.form.get('phone').value,
      description: this.form.get('description').value
    }
    console.log(sendEmail)
    this.http.post('https://eneromontazh-55.000webhostapp.com/mail.php', sendEmail).subscribe();
    this.form.reset()
    this.zayavkaSent=true
  }

  showMenu() {
    this.menuActive = !this.menuActive
  }
}
