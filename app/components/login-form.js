import Component from '@glimmer/component';
import {action} from '@ember/object'

export default class LoginFormComponent extends Component {
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
}
