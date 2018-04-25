import { toBePresent, toBeChecked } from '../matchers';
import WebElement from '../__mocks__/WebElement';

describe('toBePresent', () => {
  it('should match a single element', async () => {
    expect((await toBePresent(new WebElement())).pass).toBeTruthy();
  });
  it('should match an array with elements', async () => {
    expect((await toBePresent([new WebElement()])).pass).toBeTruthy();
  });
  it('should not match undefined', async () => {
    expect((await toBePresent(undefined)).pass).toBeFalsy();
  });
  it('should not match an empty array', async () => {
    expect((await toBePresent([])).pass).toBeFalsy();
  });
  it('should not match a different type', async () => {
    expect((await toBePresent.apply({isNot: false}, [5])).message()).toContain('Expected to receive WebElement');
  });
});

describe('toBeChecked', () => {
  it('should match a checked element', async () => {
    const e = new WebElement();
    e.selected = true;
    expect((await toBeChecked(e)).pass).toBeTruthy();
  });
  it('should not match an unchecked element', async () => {
    const e = new WebElement();
    expect((await toBeChecked(e)).pass).toBeFalsy();
  });
});
