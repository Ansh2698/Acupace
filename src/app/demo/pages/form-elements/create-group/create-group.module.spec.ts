import { CreateGroupModule } from './create-group.module';

describe('BasicElementsModule', () => {
  let UserElementsModule: CreateGroupModule;

  beforeEach(() => {
    UserElementsModule = new CreateGroupModule();
  });

  it('should create an instance', () => {
    expect(UserElementsModule).toBeTruthy();
  });
});
