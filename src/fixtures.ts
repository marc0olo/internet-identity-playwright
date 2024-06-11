import {test as base} from '@playwright/test';
import {InternetIdentityPage} from './page-objects/InternetIdentityPage';

interface InternetIdentityFixtures {
  iiPage: InternetIdentityPage;
}

export const testWithII = base.extend<InternetIdentityFixtures>({
  iiPage: async ({page, browser, context}, use) => {
    const iiPage = new InternetIdentityPage({page, context, browser});
    await use(iiPage);
  }
});

export {expect} from '@playwright/test';
