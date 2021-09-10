import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements OnInit {
  title = 'angular12test';
  someObject = {"someKey": "someValue"};


  public result: any;
  public something = true;

  public result$ : Observable<any>;
  public somethingSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);


  constructor(public httpClient: HttpClient) {
    this.result$ = this.httpClient.get('http://localhost:8080/gte/scenarios');
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:8080/gte/scenarios').subscribe((result1) => {
      //debugger;
      this.result = result1;
      console.log('Ýep Results', this.result);
    });

    //this.somethingSubject.next(false);
  }

  click() {
    console.log( 'Something');
    this.something = !this.something;
  }
}
