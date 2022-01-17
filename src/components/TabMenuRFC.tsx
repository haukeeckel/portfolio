import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { classNames } from '../util/classNames';
import { TabMenuProps } from '../compiler/types';

export default function TabMenuRFC(props: TabMenuProps) {
  const { content, style } = props;

  return (
    <>
      <Tab.Group>
        <Tab.List>
          {content.map((entry, i) => (
            <Tab key={i} as={Fragment}>
              {({ selected }) => (
                <button
                  aria-label={entry.ariaLable}
                  className={classNames(style.headingDefault, selected ? style.headingActive : style.headingInactive)}
                >
                  {entry.heading}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels as="section">
          {content.map((entry, i) => (
            <Tab.Panel as="article" key={i} className={style.content}>
              {entry.text}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
