
import React from 'react';
import Section from './Section';
import { Event } from '../types';

const events: Event[] = [
  {
    title: 'Library Walk Tabling',
    date: 'January 05 2026 - January 09 2026',
    description: 'Library walk tabling.',
    location: 'Library Walk',
    imageUrl: 'https://github.com/Yanuk-K/BaSD/blob/main/components/icons/logo_nobg.png?raw=true',
  },
  {
    title: 'TBD',
    date: 'TBD',
    description: 'TBD',
    location: 'TBD',
    imageUrl: 'https://github.com/Yanuk-K/BaSD/blob/main/components/icons/logo_nobg.png?raw=true',
  },
  {
    title: 'TBD',
    date: 'TBD',
    description: 'TBD',
    location: 'TBD',
    imageUrl: 'https://github.com/Yanuk-K/BaSD/blob/main/components/icons/logo_nobg.png?raw=true',
  },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col sm:flex-row">
    <img src={event.imageUrl} alt={event.title} className="w-full sm:w-1/3 h-48 sm:h-auto object-cover" />
    <div className="p-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-baseline">
            <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
            <span className="text-sm font-semibold text-indigo-400 mb-2 whitespace-nowrap">{event.date}</span>
        </div>
        <p className="text-gray-400 mb-4">{event.description}</p>
      </div>
      <p className="text-gray-500 font-medium text-sm">
        <span className="font-semibold text-gray-400">Location:</span> {event.location}
      </p>
    </div>
  </div>
);

const Events: React.FC = () => {
  return (
    <Section id="events" title="Upcoming Events" subtitle="Learn, network, and build with us.">
      <div className="space-y-8">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </Section>
  );
};

export default Events;
