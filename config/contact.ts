export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  email = 'email',
}

export interface Contact {
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  site: 'tanmaysinghx.netlify.com',
  calendly: 'https://calendly.com/',
  links: {
    github: 'https://github.com/tanmaysinghx',
    linkedin: 'https://linkedin.com/in/tanmaysinghx',
    email: 'mailto:tanmaysinghx@gmail.com',
  },
};
