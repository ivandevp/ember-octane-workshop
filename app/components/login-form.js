import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';

export default class LoginFormComponent extends Component {
  /**
   * @type {AuthService}
   */
  @service auth;

  @tracked
  userId = null;

  get isDisabled() {
    return !this.userId;
  }

  /**
   *
   * @param {Event & {target: HTMLFormElement}} event
   */
  @action
  onLoginFormSubmit({ target }) {
    event.preventDefault();
    const val = target.querySelector('select').value;
    this.auth.loginWithUserId(val);
  }

  /**
   * @param {Event & {target: HTMLSelectElement}} event
   */
  @action
  onSelectChanged(event) {
    this.userId = event.target.value;
  }
}
