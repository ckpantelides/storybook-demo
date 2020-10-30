import { InAppPurchase } from './IapInterface';

export let IAP: InAppPurchase[] = [
  {
    localizedTitle: 'Space Camp',
    priceFormatted: 'Free',
    productIdentifier: 'Space Camp',
    bgImage: '~/assets/images/spacerace_cover.png',
    storyStartRoute: 'space-main1',
    firstItem: true,
    lastItem: false,
  },
  {
    localizedTitle: 'Beach Feast (Story book)',
    priceFormatted: '',
    productIdentifier: 'com.christos.storybook.story13',
    bgImage: '~/assets/images/superhero_cover.png',
    storyStartRoute: 'superhero-main1',
    firstItem: false,
    lastItem: false,
  },
  {
    localizedTitle: 'Theme Park (Story book)',
    priceFormatted: '',
    productIdentifier: 'com.christos.storybook.story23',
    bgImage: '~/assets/images/football_cover.png',
    storyStartRoute: 'spacemain-a',
    firstItem: false,
    lastItem: true,
  },
];
