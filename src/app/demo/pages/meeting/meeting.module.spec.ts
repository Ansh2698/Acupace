import { MeetingModule } from './meeting.module';

describe('MeetingModule', () => {
  let meetingModule: MeetingModule;

  beforeEach(() => {
    meetingModule = new MeetingModule();
  });

  it('should create an instance', () => {
    expect(meetingModule).toBeTruthy();
  });
});
