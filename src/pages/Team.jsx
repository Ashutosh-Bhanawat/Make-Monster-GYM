import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Team = () => {
  const trainers = [
    {
      name: "John Smith",
      role: "Head Trainer",
      specialties: ["Body Building", "Strength Training"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        email: "john@monstergym.com"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Fitness Instructor",
      specialties: ["Cardio", "HIIT"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        email: "sarah@monstergym.com"
      }
    },
    {
      name: "Mike Wilson",
      role: "CrossFit Coach",
      specialties: ["CrossFit", "Functional Training"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        email: "mike@monstergym.com"
      }
    },
    {
      name: "Emma Davis",
      role: "Yoga Instructor",
      specialties: ["Yoga", "Meditation"],
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        email: "emma@monstergym.com"
      }
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Meet our expert trainers and fitness professionals
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div 
                  className="h-80 bg-cover bg-center"
                  style={{ backgroundImage: `url(${trainer.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                  <p className="text-red-600 font-semibold mb-2">{trainer.role}</p>
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm">Specialties:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {trainer.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a href={trainer.social.facebook} className="text-gray-400 hover:text-red-600">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href={trainer.social.twitter} className="text-gray-400 hover:text-red-600">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={trainer.social.instagram} className="text-gray-400 hover:text-red-600">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${trainer.social.email}`} className="text-gray-400 hover:text-red-600">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for talented fitness professionals to join our team
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors duration-200">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team;