import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class MapComponent extends Component {
  // you do not @track getter methods. That doesn't even make sense why you would
  // It is a method after all!
  // That being said! the variables referenced in getters are DEPENDENCIES
  // Thus, this.src() IMPLICITLY GETS UPDATED when any of the variables it depends on changes!
  // All of the variables src() depends on are IMPLICITLY tracked! whoa!
  get src() {
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions  = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
