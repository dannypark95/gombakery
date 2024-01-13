import images from './images';
import externalLinks from './extrernalLinks';

const navLinks = [
  { title: 'Order', path: externalLinks.order, image: images.orderText },
  { title: 'About', path: '/about', image: images.aboutText },
  {
    title: 'Instagram',
    path: externalLinks.instagram,
    image: images.instagramDraw,
  },
];

export default navLinks;
