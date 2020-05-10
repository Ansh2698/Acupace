import { VerificationModule } from './verification.module';

describe('VerificationModule', () => {
  let verificationModule: VerificationModule;

  beforeEach(() => {
    verificationModule = new VerificationModule();
  });

  it('should create an instance', () => {
    expect(verificationModule).toBeTruthy();
  });
});
