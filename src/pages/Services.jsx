import React from 'react';
import { 
  Dumbbell, 
  Heart, 
  Apple, 
  Users,
  Scale,
  Trophy,
  Clock,
  Smile
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Dumbbell className="w-12 h-12 text-red-600" />,
      title: "Personal Training",
      description: "One-on-one training sessions tailored to your specific goals and needs.",
      price: "2000/session"
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Fitness Assessment",
      description: "Comprehensive fitness evaluation to track your progress and set goals.",
      price: "3000"
    },
    {
      icon: <Apple className="w-12 h-12 text-red-600" />,
      title: "Nutrition Counseling",
      description: "Expert guidance on nutrition to support your fitness journey.",
      price: "3600/session"
    },
    {
      icon: <Users className="w-12 h-12 text-red-600" />,
      title: "Group Classes",
      description: "Energetic group workouts led by experienced instructors.",
      price: "1700/class"
    },
    {
      icon: <Scale className="w-12 h-12 text-red-600" />,
      title: "Weight Management",
      description: "Structured programs to help you achieve your ideal weight.",
      price: "9000/month"
    },
    {
      icon: <Trophy className="w-12 h-12 text-red-600" />,
      title: "Sports Training",
      description: "Specialized training for athletes and sports enthusiasts.",
      price: "37000/session"
    },
    {
      icon: <Clock className="w-12 h-12 text-red-600" />,
      title: "24/7 Gym Access",
      description: "Round-the-clock access to our state-of-the-art facilities.",
      price: "2800/month"
    },
    {
      icon: <Smile className="w-12 h-12 text-red-600" />,
      title: "Wellness Programs",
      description: "Holistic wellness programs combining fitness and lifestyle coaching.",
      price: "4600/month"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-center"
        style={{ 
          backgroundImage: `url("/img/home/Home1.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive fitness solutions for every goal
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center mb-4">{service.description}</p>
                <p className="text-red-600 font-bold text-center text-xl">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Fitness Journey Today</h2>
          <p className="text-xl mb-8">Book a free consultation with our expert trainers</p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors duration-200">
            Book Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;