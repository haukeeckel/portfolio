import { useState } from 'react';
import ButtonRFC from './ButtonRFC';

const randomPhrase: string[] = [
  "I'm ready to take off 🚀",
  "I'm learning TypeScript",
  "I'm learning React",
  "I'm happy that you are here",
  "I'm mostly coding",
  "I'm working on my Website",
  'I love french fries 🍟',
  'I really like TailwindCSS',
  "I'm living in Kiel, Germany",
  'I started coding in 2021',
];

export default function Hero() {
  const [phrase, setPhrase] = useState(randomPhrase[0]);

  const getRandomPhrase = () => {
    const lastIndex = randomPhrase.indexOf(phrase);
    let index: number = getRandomNumber(randomPhrase.length);

    while (lastIndex === index) {
      index = getRandomNumber(randomPhrase.length);
    }

    setPhrase(randomPhrase[index]);
  };

  const getRandomNumber = (max: number | string | Array<number | string>): number => {
    if (typeof max === 'number') return Math.floor(Math.random() * max);

    return Math.floor(Math.random() * max.length);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 min-h-[412px] sm:min-h-[500px]">
      <div className="flex flex-col items-center">
        <article className="w-full min-h-[250px] sm:min-h-[330px] flex flex-col justify-center">
          <h1 className="tracking-tight text-5xl lg:text-6xl font-extrabold my-1">
            Hey, I'm <span className="text-yellow-400">Hauke</span>
          </h1>
          <p className="tracking-tight text-4xl lg:text-6xl font-extrabold my-1">
            an upcoming <span className="text-green-500">Web Developer</span>
          </p>
          <p className="tracking-tight text-4xl lg:text-6xl font-extrabold my-1">
            and <span className="text-rose-500">{phrase}</span>
          </p>
        </article>
        <div className="mx-auto mt-6 self-end">
          <ButtonRFC
            color={ButtonRFC.color.ROSE}
            size={ButtonRFC.size.LARGE}
            weight={ButtonRFC.weight.EXTRABOLD}
            handler={getRandomPhrase}
          >
            something else
          </ButtonRFC>
        </div>
      </div>
    </section>
  );
}
