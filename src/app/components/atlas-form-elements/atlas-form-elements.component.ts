import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import {FileInfo, FileRestrictions, FileState, RemoveEvent, UploadEvent} from '@progress/kendo-angular-upload';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpProgressEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable, of, concat } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-atlas-form-elements',
  templateUrl: './atlas-form-elements.component.html'
})
export class AtlasFormElementsComponent implements OnInit {
  // @ViewChild("dateKendo1") public dateKendo1: any;
  // @ViewChild("dateKendo2") public dateKendo2: any;

  constructor() { }

  ngOnInit() {
  }

  public allowCustom: boolean = true;
    public listItems: Array<string> = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];
    uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

  
}

@Injectable()
export class UploadInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === 'saveUrl') {
      const events: Observable<HttpEvent<any>>[] = [0, 30, 60, 100].map((x) => of(<HttpProgressEvent>{
        type: HttpEventType.UploadProgress,
        loaded: x,
        total: 100
      }).pipe(delay(1000)));

      const success = of(new HttpResponse({ status: 200 })).pipe(delay(1000));
      events.push(success);

      return concat(...events);
    }

    if (req.url === 'removeUrl') {
        return of(new HttpResponse({ status: 200 }));
    }

    return next.handle(req);
  }
}
