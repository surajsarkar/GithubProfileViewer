import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() name: string = "";
  @Input() bio: string = "";
  @Input() location: string = "";
  @Input() dp: string = "";
  @Input() github_user_name: string = "";
  @Input() twitter: string ='';
  @Input() profile_link: string = '';

}
