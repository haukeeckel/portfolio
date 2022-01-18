import { useState } from 'react';
import { ProjectProps } from '../compiler/types';
import ModalRFC from './ModalRFC';

export default function ProjectRFC(props: ProjectProps) {
  const { project } = props;

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  function enlargeImage(selectedIndex: number) {
    setIndex(selectedIndex);
    setOpen(!open);
  }

  return (
    <article className="max-w-4xl mx-auto my-12 p-4 grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
      <ModalRFC isOpen={open} setIsOpen={setOpen} project={project} index={index} setIndex={setIndex} />
      <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
        <h3 className="mt-1 text-lg font-extrabold lg:text-2xl">{project.title}</h3>
        <p className="text-sm leading-4 font-medium sm:text-slate-500">{project.type.toUpperCase()}</p>
      </div>
      <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
        <img
          src={project.images[0]}
          alt=""
          onClick={() => enlargeImage(0)}
          className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
          loading="lazy"
        />
        <img
          src={project.images[1]}
          alt=""
          onClick={() => enlargeImage(1)}
          className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
          loading="lazy"
        />
        <img
          src={project.images[2]}
          alt=""
          onClick={() => enlargeImage(2)}
          className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
          loading="lazy"
        />
      </div>
      <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
        <dt className="sr-only">Technologies</dt>
        <dd className="flex items-center">{project.technologies.join(' // ')}</dd>
      </dl>
      <div className="my-4 col-start-1 row-start-3 self-center sm:my-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:my-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
        <a
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 mx-2 font-semibold text-white text-sm leading-6 py-2 px-3 rounded-lg"
        >
          GitHub
        </a>
        <a
          href={project.deployement}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 mx-2 font-semibold text-white text-sm leading-6 py-2 px-3 rounded-lg"
        >
          Preview
        </a>
      </div>
      <p className="text-base leading-6 col-start-1 sm:col-span-2 lg:row-start-4 lg:col-span-1">{project.descrition}</p>
    </article>
  );
}
