import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Apple, 
  UserCheck, 
  Target 
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
      title: "Transform Your Body",
      subtitle: "Start your fitness journey today"
    },
    {
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
      title: "Expert Trainers",
      subtitle: "Get personalized training plans"
    },
    {
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
      title: "State-of-the-art Equipment",
      subtitle: "Train with the best gear"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Dumbbell className="w-12 h-12 text-red-600" />,
      title: "Modern Equipment",
      description: "State-of-the-art fitness equipment for optimal results"
    },
    {
      icon: <Apple className="w-12 h-12 text-red-600" />,
      title: "Healthy Nutrition Plan",
      description: "Customized nutrition plans to support your fitness goals"
    },
    {
      icon: <UserCheck className="w-12 h-12 text-red-600" />,
      title: "Professional Training",
      description: "Expert trainers to guide you through your fitness journey"
    },
    {
      icon: <Target className="w-12 h-12 text-red-600" />,
      title: "Unique to Your Needs",
      description: "Personalized programs tailored to your specific goals"
    }
  ];

  return (
    <div>
      {/* Hero Slider */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>
            <div className="relative h-full flex items-center justify-center text-center text-white">
              <div>
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl mb-8">{slide.subtitle}</p>
                <Link
                  to="/contact"
                  className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors duration-200"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600">Experience the difference with our premium facilities and expert guidance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join Monster Gym today and transform your life</p>
          <Link
            to="/contact"
            className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;