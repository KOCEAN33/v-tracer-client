export interface Product {
  id: string;
  handle: string;
  name: string;
  owner: string;
  image: string;
  url: string;
  company: string;
  description: string;
  tag: string[];
}

export const product: Product = {
  id: '647101ecac3218877849412b',
  handle: 'notion',
  name: '노션',
  owner: '6494ed4bcdebc4eb4c615c25',
  image: '/Notion-logo.svg',
  url: 'notion.so',
  company: 'Notion Labs, Inc.',
  description:
    'Notion은 각종 문서를 효율적으로 관리할 수 있는 도구입니다. 간단한 마크다운 문법을 지원하여 사용이 쉽고, 블록 형태로 구성되어 있어 다양한 형태의 정보를 표시할 수 있습니다.',
  tag: ['노트', '협업툴'],
};
