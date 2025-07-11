import React from 'react';

interface TeamMember {
  imageSrc: string;
  role: string;
  experience: string;
}

const teamMembers: TeamMember[] = [
  {
    imageSrc: "/lovable-uploads/52b9698c-2c72-408b-87c7-a351ce970b63.png",
    role: "Co-founder & CEO",
    experience: "8 years working in travel industry. Former Product & Marketing lead @Hopper"
  },
  {
    imageSrc: "/lovable-uploads/041bef52-3b6a-4c7c-8ad3-45486d694c54.png",
    role: "Co-founder & CSO",
    experience: "20 years working in travel industry. Former GM Europe @Hopper"
  },
  {
    imageSrc: "/lovable-uploads/262eaede-fa51-4ff3-9b35-addf8269bc33.png",
    role: "Co-founder & CTO",
    experience: "8 years working in travel industry. Former Eng Manager @Dailymotion, @Hopper"
  }
];

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-normal text-[#FDF6E3] text-center mb-16 lg:text-5xl">
          We are a team of travel experts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => <div key={index} className="text-center">
              <img src={member.imageSrc} alt={`${member.role} profile picture`} className="w-64 h-64 rounded-3xl mx-auto mb-6 object-cover hover:scale-105 transition-transform duration-200" />
              <h3 className="text-2xl font-medium text-[#FDF6E3] mb-4">
                {member.role}
              </h3>
              <p className="text-lg font-light text-[#FDF6E3] leading-relaxed">
                {member.experience}
              </p>
            </div>)}
        </div>
      </div>
    </section>
  );
};
