import { TiSocialPinterest } from 'react-icons/ti';
import { GrFacebookOption, GrTwitter, GrInstagram } from 'react-icons/gr';

export const NAV_MENU = [
  { label: 'Home', href: '/' },
  { label: 'List User', href: '/users' },
  { label: 'Blog', href: '/blog' },
];

export const PAGE_MENU_FOOTER = [
  { label: 'News Category', href: '/news-detail' },
  { label: 'Premium Memberhip', href: '/' },
  { label: 'Special Events', href: '/' },
  { label: 'Newsletter', href: '/' },
  { label: 'Content Of View', href: '/' },
];

export const COMPANY_FOOTER = [
  { label: 'About Us', href: '/' },
  { label: 'Contact Info', href: '/' },
  { label: 'Office Location', href: '/' },
  { label: 'Job Site', href: '/' },
];

export const SOCIAL_LINK_FOOTER = [
  {
    icon: <GrFacebookOption className="text-primary" />,
    href: '/'
  },
  {
    icon: <GrTwitter className="text-primary" />,
    href: '/'
  },
  {
    icon: <GrInstagram className="text-primary" />,
    href: '/'
  },
  {
    icon: <TiSocialPinterest className="text-primary" />,
    href: '/'
  },
];