import React, { useState, useEffect } from 'react';
import { Dumbbell, Heart, Trophy } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const achievements = [
    { name: 'Body Building', percentage: 95, icon: <Dumbbell className="w-8 h-8 text-red-600" /> },
    { name: 'Training', percentage: 90, icon: <Trophy className="w-8 h-8 text-red-600" /> },
    { name: 'Fitness', percentage: 85, icon: <Heart className="w-8 h-8 text-red-600" /> }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{ 
          backgroundImage: `url("/img/home/Home1.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Transforming lives through fitness since 2010
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Welcome to Monster Gym</h2>
              <p className="text-gray-600 mb-6">
                At Monster Gym, we believe in transforming lives through fitness. Our state-of-the-art 
                facility is equipped with the latest fitness equipment and staffed by certified 
                professionals who are passionate about helping you achieve your fitness goals.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're just starting your fitness journey or you're a seasoned athlete, 
                our diverse range of equipment, classes, and training programs are designed to 
                challenge and inspire you to reach new heights.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Dumbbell className="w-6 h-6 text-red-600" />
                  <span>State-of-the-art equipment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-red-600" />
                  <span>Expert trainers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-red-600" />
                  <span>Personalized fitness plans</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" 
                alt="Gym Interior" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-6">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{achievement.name}</h3>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-600 transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${achievement.percentage}%` : '0%'
                    }}
                  />
                </div>
                <p className="text-center mt-2 font-bold">{achievement.percentage}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;