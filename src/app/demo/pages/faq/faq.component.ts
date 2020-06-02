import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  index=-1;

  constructor() { }

  ngOnInit() {
  }

  toggle(ind)
  {
    if(ind==1 && (this.index==1 || this.index==2 || this.index==3 || this.index==4 || this.index==5 || this.index==6))
    {
      ind=-1;
    }
    if((ind==2 && this.index==2) || (ind==3 && this.index==3) || (ind==4 && this.index==4) || (ind==5 && this.index==5) || (ind==6 && this.index==6))
    {
      ind=1;
    }

    if(ind==7 && (this.index==7 || this.index==8 || this.index==9 || this.index==10))
    {
      ind=-1;
    }
    if((ind==8 && this.index==8) || (ind==9 && this.index==9) || (ind==10 && this.index==10))
    {
      ind=7;
    }

    if(ind==11 && (this.index==11 || this.index==12 || this.index==13 || this.index==14 || this.index==15 || this.index==16))
    {
      ind=-1;
    }
    if((ind==12 && this.index==12) || (ind==13 && this.index==13) || (ind==14 && this.index==14) || (ind==15 && this.index==15) || (ind==16 && this.index==16))
    {
      ind=11;
    }

    if(ind==17 && (this.index==17 || this.index==18 || this.index==19 || this.index==20 || this.index==21 || this.index==22))
    {
      ind=-1;
    }
    if((ind==18 && this.index==18) || (ind==19 && this.index==19) || (ind==20 && this.index==20) || (ind==21 && this.index==21) || (ind==22 && this.index==22))
    {
      ind=17;
    }

    if(ind==23 && (this.index==23 || this.index==24 || this.index==25 || this.index==26 || this.index==27 || this.index==28))
    {
      ind=-1;
    }
    if((ind==24 && this.index==24) || (ind==25 && this.index==25) || (ind==26 && this.index==26) || (ind==27 && this.index==27) || (ind==28 && this.index==28))
    {
      ind=23;
    }

    if(ind==29 && (this.index==29 || this.index==30 || this.index==31 || this.index==32 || this.index==33 || this.index==34))
    {
      ind=-1;
    }
    if((ind==30 && this.index==30) || (ind==31 && this.index==31) || (ind==32 && this.index==32) || (ind==33 && this.index==33) || (ind==34 && this.index==34))
    {
      ind=29;
    }

    this.index=ind;
  }


}
