import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import angular modules
import { FormsModule } from '@angular/forms';
//import userdefined components
import { Form1PlainComponent } from './form1-plain/form1-plain.component';
import { Form2BootstrapComponent } from './form2-bootstrap/form2-bootstrap.component';
import { Form3ValidateComponent } from './form3-validate/form3-validate.component';
import { PostComponent } from './post/post.component';

//import for observable-http
import { HttpClientModule } from '@angular/common/http';

//import services - for observable-http
import { PostService } from "./post.service";


@NgModule({
  declarations: [
    AppComponent,
    Form1PlainComponent,
    Form2BootstrapComponent,
    Form3ValidateComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
