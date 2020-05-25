import { CreateUserModule } from './create-user.module';

describe('BasicElementsModule', () => {
  let UserElementsModule: CreateUserModule;

  beforeEach(() => {
    UserElementsModule = new CreateUserModule();
  });

  it('should create an instance', () => {
    expect(UserElementsModule).toBeTruthy();
  });
});
