import { PlusCircleIcon } from '@heroicons/react/outline';
import DisclosureRFC from './DisclosureRFC';
import { DisclosureElem, DisclosureStyle } from '../compiler/types';

const aboutSectionContent: DisclosureElem[] = [
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

const aboutSectionStyle: DisclosureStyle = {
  headingDefault: 'hover:text-yellow-400 px-3',
  headingActive: 'text-rose-500',
  headingInactive: 'text-white',
  content: 'text-white py-6 text-xl',
};

export default function Bio() {
  return (
    <section className="max-w-xl mx-auto px-6 lg:px-8 min-h-[412px] sm:min-h-[520px]">
      <article className="flex flex-col justify-center items-center text-white">
        <h2 className="text-2xl lg:text-4xl font-extrabold my-10 text-center">
          Interested?
          <br /> Read as much as you want
        </h2>
        <div className="w-[290px] h-fit flex justify-between text-xs mb-2 items-end">
          <span>short</span>
          <span className="text-base font-bold">my Bio</span>
          <span>long</span>
        </div>
        <DisclosureRFC content={aboutSectionContent} style={aboutSectionStyle} />
      </article>
    </section>
  );
}
