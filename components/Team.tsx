
import React from 'react';
import Section from './Section';
import { TeamMember } from '../types';
import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const teamMembers: TeamMember[] = [
  { name: 'Yeunwook Kim', role: 'President', imageUrl: 'https://github.com/Yanuk-K/BaSD/blob/main/components/icons/logo_nobg.png?raw=true', linkedin: 'https://www.linkedin.com/in/yeun-wook-kim/', github: 'https://github.com/Yanuk-K/' },
  { name: 'TBD', role: 'VP of Operations', imageUrl: 'https://github.com/Yanuk-K/BaSD/blob/main/components/icons/logo_nobg.png?raw=true', linkedin: '#', github: '#' },
  { name: 'TBD', role: 'VP of Engineering', imageUrl: 'https://github.com/Yanuk-K/BaSD/blob/main/components/icons/logo_nobg.png?raw=true', linkedin: '#' },
  { name: 'TBD', role: 'VP of Events', imageUrl: 'https://github.com/Yanuk-K/BaSD/blob/main/components/icons/logo_nobg.png?raw=true', linkedin: '#', github: '#' },
  { name: 'TBD', role: 'VP of Design', imageUrl: 'https://github.com/Yanuk-K/BaSD/blob/main/components/icons/logo_nobg.png?raw=true', github: '#' },
  { name: 'TBD', role: 'Engineering Team Lead', imageUrl: 'https://github.com/Yanuk-K/BaSD/blob/main/components/icons/logo_nobg.png?raw=true', linkedin: '#', github: '#' },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="text-center group">
    <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-indigo-500 transition-all duration-300 transform group-hover:scale-110">
      <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
    </div>
    <h3 className="mt-4 text-xl font-bold text-white">{member.name}</h3>
    <p className="text-indigo-400">{member.role}</p>
    <div className="flex justify-center mt-2 space-x-4">
      {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><LinkedInIcon className="w-5 h-5" /></a>}
      {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><GithubIcon className="w-5 h-5" /></a>}
    </div>
  </div>
);

const Team: React.FC = () => {
  return (
    <Section id="team" title="Meet the Team" subtitle="The passionate individuals driving our community forward.">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </Section>
  );
};

export default Team;
