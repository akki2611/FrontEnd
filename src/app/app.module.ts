import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JobListComponent } from './job-list/job-list.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { FormsModule } from '@angular/forms';
import { UpdateJobComponent } from './update-job/update-job.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ViewaLLComponent } from './viewa-ll/viewa-ll.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    CreateJobComponent,
    UpdateJobComponent,
    JobDetailsComponent,
    ViewaLLComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
