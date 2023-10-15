export interface Config {
  site: Site;
}

export interface Site {
  name: string;
  description: string;
  links: {
    twitter: string;
    github: string;
  };
}
