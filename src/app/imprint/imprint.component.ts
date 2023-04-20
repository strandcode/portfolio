import { Component, ElementRef, ViewChild } from '@angular/core';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {

  constructor(private linkservice: LinkService) { }


  @ViewChild('privacy') scrollTarget: ElementRef | undefined;

  ngAfterViewInit(): void {
    let isPrivacyLink = this.linkservice.isPrivacyLink;
    console.log(isPrivacyLink);
    if (this.scrollTarget) {
      this.scrollTarget.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
