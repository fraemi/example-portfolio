import {
  faTwitter,
  faSketch,
  faAndroid,
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export const links = ['about', 'projects', 'contact'];

export const socials = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com',
    icon: faLinkedin,
  },
  {
    name: 'github',
    url: 'https://www.github.com',
    icon: faGithub,
  },
  {
    name: 'twitter',
    url: 'https://www.twitter.com',
    icon: faTwitter,
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com',
    icon: faInstagram,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com',
    icon: faFacebook,
  },
];

export const projects = [
  {
    title: 'Project 1',
    client: 'Client Name',
    getImageSrc: () => require('../assets/project-1.jpeg'),
  },
  {
    title: 'Project 2',
    client: 'Client Name',
    getImageSrc: () => require('../assets/project-2.jpeg'),
  },
  {
    title: 'Project 3',
    client: 'Client Name',
    getImageSrc: () => require('../assets/project-3.jpeg'),
  },
  {
    title: 'Project 4',
    client: 'Client Name',
    getImageSrc: () => require('../assets/project-4.jpeg'),
  },
];

export const services = [
  {
    title: 'Web Development',
    icon: faCode,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed obcaecati vero.',
  },
  {
    title: 'Web Design',
    icon: faSketch,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed obcaecati vero.',
  },
  {
    title: 'App Design',
    icon: faAndroid,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed obcaecati vero.',
  },
];

export const blogs = [
  {
    title: 'Article 1',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.',
    read: 7,
    getImageSrc: () => require('../assets/project-1.jpeg'),
  },
  {
    title: 'Article 2',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.',
    read: 7,
    getImageSrc: () => require('../assets/project-2.jpeg'),
  },
  {
    title: 'Article 3',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.',
    read: 7,
    getImageSrc: () => require('../assets/project-3.jpeg'),
  },
  {
    title: 'Article 4',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nisi ut a est eum tempora dolorum temporibus voluptatibus! Natus, provident.',
    read: 7,
    getImageSrc: () => require('../assets/project-4.jpeg'),
  },
];

export const frontend_skills = [
  {
    name: 'HTML / CSS',
    value: '50%',
  },
  {
    name: 'Javascript',
    value: '70%',
  },
  {
    name: 'React',
    value: '80%',
  },
];

export const backend_skills = [
  {
    name: 'Node',
    value: '50%',
  },
  {
    name: 'PHP',
    value: '70%',
  },
  {
    name: 'Python',
    value: '80%',
  },
];

export const steps = [
  {
    year: '2020',
    number: 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.',
  },
  {
    year: '2019',
    number: 2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.',
  },
  {
    year: '2018',
    number: 3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.',
  },
  {
    year: '2017',
    number: 4,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.',
  },
  {
    year: '2016',
    number: 5,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.',
  },
  {
    year: '2015',
    number: 6,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.',
  },
];
