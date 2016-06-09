import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Noun } from './util/noun';
import { NounService } from './services/noun.service';

@Component({
  selector: 'noun-blade',
  templateUrl: 'app/html/noun.component.html',
  styleUrls: ['app/css/noun.component.css'],
  providers: [NounService]
})
export class NounComponent implements OnInit {

  constructor(private router: Router, private nounService: NounService) { }

  nouns: Noun[];

  getNouns() {
      this.nounService.getNouns().then(nouns => this.nouns = nouns);
  }

  ngOnInit() {
    this.getNouns();
  }

  search() {
    //This is a bit hacky as we need casting.
    var criteria = (<HTMLInputElement>document.getElementById("noun-search")).value;
    this.nounService.search(criteria).then(nouns => this.nouns = nouns);
  }

/*
  handleNoun(noun: Noun) {

  }
  */
}
