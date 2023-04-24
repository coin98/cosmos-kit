import { Wallet } from '@cosmos-kit/core';

export const terraExtensionInfo: Wallet = {
  name: 'station-extension',
  logo: 'https://assets.terra.money/icon/wallet-provider/station.svg',
  prettyName: 'Station',
  mode: 'extension',
  mobileDisabled: true,
  connectEventNamesOnWindow: [],
  rejectMessage: {
    source: 'Request rejected',
  },
  downloads: [
    {
      device: 'desktop',
      browser: 'chrome',
      link: 'https://chrome.google.com/webstore/detail/station-wallet/aiifbnbfobpmeekipheeijimdpnlpgpp',
    },
    {
      device: 'desktop',
      browser: 'firefox',
      link: 'https://addons.mozilla.org/en-US/firefox/addon/terra-station-wallet/',
    },
  ],
};