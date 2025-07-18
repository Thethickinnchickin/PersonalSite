import classNames from 'classnames';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="moving-background flex h-screen w-full items-start justify-center pt-20">

        <div className="z-10 max-w-screen-lg px-2 lg:px-2">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-800 p-6 pt-10 text-center ">
            <h1 className="text-4xl font-bold text-dark sm:text-5xl lg:text-7xl">{name}</h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100 readable-text">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-dark ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
