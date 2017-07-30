import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <ul>
      <li><a [routerLink] = "['/about']">About</a></li>
      <li><a [routerLink] = "['/download']">Download</a></li>
   </ul>
   <router-outlet></router-outlet>`
})
export class AppComponent { 
   
   
    public videoTitle:string = "Example video season 1";
    public check_user = true;

    public listArray:any[]=[
       'Laravel 5',
        'Angularjs 2',
        'Nodejs'
    ]

}