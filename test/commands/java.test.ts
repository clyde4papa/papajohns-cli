import {expect, test} from '@oclif/test'

describe('java', () => {
  test
    .stdout()
    .command(['java'])
    .it('runs java', ctx => {
      expect(ctx.stdout).to.contain('1.8.0_181');
    });

  test
    .stdout()
    .command(['java', '1.8.0_111'])
    .it('runs java 1.8.0_111', ctx => {
      expect(ctx.stdout).to.contain('1.8.0_111');
    });
});
