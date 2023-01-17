import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.css']
})
export class RepoInfoComponent {

  @Input() repoName: string = '';
  @Input() repoDes: string = '';
  @Input() topics: Array<string> =[];
  @Input() repoUrl: string = "";

}
