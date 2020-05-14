import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageComponent } from './sample-page.component';

describe('SamplePageComponent', () => {
  let component: SamplePageComponent;
  let fixture: ComponentFixture<SamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePageComponent ]
    })
    .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SamplePageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-video'`, () => {
    const fixture = TestBed.createComponent(SamplePageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-video');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(SamplePageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-video!');
  });
});
