import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  {path: 'jobs', component: JobListComponent},
  {path: 'create-job', component: CreateJobComponent},
  {path: '', redirectTo: 'jobs', pathMatch: 'full'},
  {path: 'update-job/:id', component: UpdateJobComponent},
  {path: 'job-details/:id', component: JobDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
