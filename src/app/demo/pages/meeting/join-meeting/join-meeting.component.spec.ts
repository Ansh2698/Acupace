import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinMeetingComponent } from './join-meeting.component';

describe('JoinMeetingComponent', () => {
  let component: JoinMeetingComponent;
  let fixture: ComponentFixture<JoinMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinMeetingComponent ]
    })
    .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(JoinMeetingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-video'`, () => {
    const fixture = TestBed.createComponent(JoinMeetingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-video');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(JoinMeetingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-video!');
  });
});
