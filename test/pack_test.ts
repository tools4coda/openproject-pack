import {assert} from 'chai';
import * as pack from '../pack';

describe('Pack', () => {
  it('should have the correct pack name', () => {
    assert.ok(pack.pack);
  });
});
