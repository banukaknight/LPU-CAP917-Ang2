import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//add by bk
import { FormsModule } from '@angular/forms';
import { Form1PlainComponent } from './form1-plain/form1-plain.component';
import { Form2BootstrapComponent } from './form2-bootstrap/form2-bootstrap.component';
import { Form3ValidateComponent } from './form3-validate/form3-validate.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1PlainComponent,
    Form2BootstrapComponent,
    Form3ValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
