import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  @tracked isLarge = false;

  // this is a method
  // whenever we intend to use a method from our templates/components, we need to
  // decorate it with @action
  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
