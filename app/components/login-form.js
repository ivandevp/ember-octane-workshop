import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {
  @tracked
  userId = null;

  get isDisabled() {
    return !this.userId;
  }

  logUserId(userId) {
    console.log('User ID:', userId);
  }

  /**
   *
   * @param {Event & {target: HTMLFormElement}} event
   */
  @action
  onLoginFormSubmit({ target }) {
    event.preventDefault();
    const val = target.querySelector('select').value;
    this.logUserId(val);
  }

  /**
   * @param {Event & {target: HTMLSelectElement}} event
   */
  @action
  onSelectChanged(event) {
    this.userId = event.target.value;
  }
}
