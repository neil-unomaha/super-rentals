import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButtonComponent extends Component {
  @service router;

  get currentURL() {
    return new URL(this.router.currentURL, window.location.origin);
  }

  get shareURL() {
    // URL escapes and joins query params!
    let url = new URL(TWEET_INTENT);

    // adding this after "?" within the URL
    url.searchParams.set('url', this.currentURL);

    if (this.args.text) {
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtags) {
      url.searchParams.set('hashtags', this.args.hashtags);
    }

    if (this.args.via) {
      url.searchParams.set('via', this.args.via);
    }

    return url;
  }

}
