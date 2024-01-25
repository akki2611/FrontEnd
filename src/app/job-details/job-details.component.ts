import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {


  id: number
  job: Job

  constructor(private route: ActivatedRoute,
    private jobService: JobService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.jobService.getJobById(this.id).subscribe( data=>{
      this.job = data;
      console.log('Received job data:', data);
    })
    
  }

}
