import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="relative brackets" sectionId={SectionId.About}>
            <video
              autoPlay
              className="absolute top-0 left-0 w-full h-full object-cover -z-10"
              loop
              muted
              playsInline
            >
              <source src="/sf3.mp4" type="video/mp4" />
            </video>
        <div className='brackets absolute inset-0 z-10'></div>

      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start ">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32 container-hero">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 container-hero p-4 flex flex-col gap-y-6', {'md:col-span-3 container-hero': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold ">About me</h2>
            <p className="prose prose-sm sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5" />}
                <span className="text-sm">{label}:</span>
                <span className=" text-sm">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
