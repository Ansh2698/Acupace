import { CreateMeetingModule } from './create-meeting.module';

describe('CreateMeetingModule', () => {
  let createModule: CreateMeetingModule;

  beforeEach(() => {
    createModule = new CreateMeetingModule();
  });

  it('should create an instance', () => {
    expect(createModule).toBeTruthy();
  });
});
