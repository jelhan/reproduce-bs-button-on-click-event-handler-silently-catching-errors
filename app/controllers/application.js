import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @action
  syncThrow() {
    throw new Error();
  }

  @action
  async asyncThrow() {
    throw new Error();
  }
}
