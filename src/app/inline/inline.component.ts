import { Component } from '@angular/core';
import {Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css']
})
export class InlineComponent {
  constructor(
    private meta: Meta
  ){
    this.meta.addTag({name: 'og:title', content: 'The Rock'});
    this.meta.addTag({name: 'og:type', content: 'video.movie'});
    this.meta.addTag({name: 'og:url', content: '//www.imdb.com/title/tt0117500/'});
  }
  ngOnInit() {}
}
