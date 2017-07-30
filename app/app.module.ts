import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { HomeComponent } from './home.component';
import { Appabout} from './about.component';
import { Appdownload} from './download.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
const appRoutes: Routes = [
    { path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
   { path: 'about', component: Appabout },
   { path: 'download', component: Appdownload },
   { path: '**', component: PageNotFoundComponent },
];
@NgModule({
   imports: [ BrowserModule,FormsModule,RouterModule.forRoot(appRoutes,{ enableTracing: true })],
    declarations: [ AppComponent,HomeComponent,Appabout,Appdownload,PageNotFoundComponent],
    
    bootstrap:    [ AppComponent ]
})

export class AppModule { }