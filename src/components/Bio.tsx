import { PlusCircleIcon } from '@heroicons/react/outline';
import TabMenuRFC from './TabMenuRFC';
import { TabMenuElem, TabMenuStyle } from '../compiler/types';

const aboutSectionContent: TabMenuElem[] = [
  {
    heading: <PlusCircleIcon className="h-10 w-10" />,
    text: 'I want to start my career in tech 🚀',
    ariaLable: 'bioShortest',
  },
  {
    heading: <PlusCircleIcon className="h-10 w-10" />,
    text: 'I want to start my career in tech 🚀 For that I just finished Ironhacks Web Dev Bootcamp 🎓',
    ariaLable: 'bioShorter',
  },
  {
    heading: <PlusCircleIcon className="h-10 w-10" />,
    text: 'I want to start my career in tech 🚀 For that I just finished Ironhacks Web Dev Bootcamp 🎓 Now I am learning TypeScript on my own and practice cool technologies almost every day 👨‍💻',
    ariaLable: 'bioMedium',
  },
  {
    heading: <PlusCircleIcon className="h-10 w-10" />,
    text: 'I am a former Business Controller and I want to start my career in tech 🚀 For that I just finished Ironhacks Web Dev Bootcamp 🎓 Now I am learning TypeScript on my own and practice cool technologies almost every day 👨‍💻',
    ariaLable: 'bioLonger',
  },
  {
    heading: <PlusCircleIcon className="h-10 w-10" />,
    text: 'I am a former Business Controller and I want to start my career in tech 🚀 For that I just finished Ironhacks Web Dev Bootcamp 🎓 Now I am learning TypeScript on my own and practice cool technologies almost every day 👨‍💻 Also I love french fries 🍟 and want to move to Berlin in 2022 🚚',
    ariaLable: 'bioLongest',
  },
];

const aboutSectionStyle: TabMenuStyle = {
  headingDefault: 'hover:text-yellow-400 px-3',
  headingActive: 'text-rose-500',
  headingInactive: 'text-white',
  content: 'py-6 px-6 sm:px-0 text-lg',
};

export default function Bio() {
  return (
    <section className="w-full bg-gray-800 min-h-[412px] sm:min-h-[500px] flex justify-center items-start">
      <article className="flex flex-col justify-center items-center max-w-xl">
        <h2 className="text-2xl lg:text-4xl font-extrabold my-10 text-center">
          Interested?
          <br /> Read as much as you want
        </h2>
        <div className="w-[290px] h-fit flex justify-between text-sm leading-4 font-medium text-slate-500 mb-2 items-end">
          <span>short</span>
          <span>long</span>
        </div>
        <TabMenuRFC content={aboutSectionContent} style={aboutSectionStyle} />
      </article>
    </section>
  );
}
