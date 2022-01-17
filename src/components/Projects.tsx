import { Project } from '../compiler/types';
import ProjectRFC from './ProjectRFC';

const myProjects: Project[] = [
  {
    title: 'EasterEck',
    type: '2d browser game',
    descrition:
      'Easter Eck is a game in which the player must catch as many easter eggs as possible, that appear randomly in a small room. Collecting an easter egggrants a small amount of bonus time and increases the score. The game endswhen the time runs out.',
    images: [
      '/images/easterEck/easterEck1.png',
      '/images/easterEck/easterEck2.png',
      '/images/easterEck/easterEck3.png',
    ],
    technologies: ['HTML', 'JavaScript', 'Canvas', 'CSS'],
    deployement: 'https://haukeeckel.github.io/easter-eck/',
    repository: 'https://github.com/haukeeckel/easter-eck',
  },
  {
    title: 'Paperfy',
    type: 'social platform',
    descrition:
      'Service for people interested in the game genre Pen and Paper. Paperfy is a platform to find a Group to play with. Interact as a Player or Game Master to connect with others. The platform offers you an easy way to get started with Pen and Paper.',
    images: ['/images/paperfy/paperfy1.png', '/images/paperfy/paperfy2.png', '/images/paperfy/paperfy3.png'],
    technologies: ['JavaScript', 'NodeJS', 'ExpressJS', 'MongoDB', 'Handlebars', 'CSS'],
    deployement: 'https://www.paperfy.de',
    repository: 'https://github.com/haukeeckel/Paperfy',
  },
  {
    title: 'PokéT',
    type: 'React SPA',
    descrition:
      'Service to keep track of your collection of Pokemon Trading Card Game cards. Discover, collect and manage your favorite cards on PokéT.',
    images: ['/images/poket/poket1.png', '/images/poket/poket2.png', '/images/poket/poket3.png'],
    technologies: ['React.js', 'TailwindCSS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Heroku'],
    deployement: 'http://my-pokemon-tc.herokuapp.com/',
    repository: 'https://github.com/haukeeckel/huehu_client',
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl lg:text-4xl font-extrabold my-10 text-center">Take a look at my Projects</h2>
      {myProjects.map((project, i) => (
        <ProjectRFC key={i} project={project}></ProjectRFC>
      ))}
    </section>
  );
}
