export interface Product {
  handle: string;
  name: string;
  owner: string;
  image: string;
  url: string;
  company: string;
  tag: string[];
}

export const Product: Product = {
  handle: 'notion',
  name: '노션',
  owner: '6494ed4bcdebc4eb4c615c25',
  image: '/Notion-logo.svg',
  url: 'notion.so',
  company: 'Notion Labs, Inc.',
  tag: ['노트', '협업툴'],
};
