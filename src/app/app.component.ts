import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Todo {
  id:number
  title:string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'learnAngular';
  e:number = Math.E

  @ViewChild('titleFocus') inputRef: ElementRef

 constructor(private http: HttpClient) {

 }

  ngOnInit(): void {

  }



  searchString:string=''

  todos:Todo[] = [
    {id:1, title: 'Helo'},
    {id:2, title: 'Mother'},
    {id:3, title: 'Father'},
  ]

  isVisible:boolean=true

  inputFocus() {
    this.inputRef.nativeElement.focus()
  }
}
