import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: '/img/gallery/1.jpg',
      title: "Weight Training Area"
    },
    {
      url: '/img/gallery/2.jpg',
      title: "Cardio Zone"
    },
    {
      url:'/img/gallery/3.jpg',
      title: "Yoga Studio"
    },
    {
      url: '/img/gallery/4.jpg',
      title: "CrossFit Area"
    },
    {
      url:'/img/gallery/5.jpg',
      title: "Group Training"
    },
    {
      url: '/img/gallery/pers.jpg',
      title: "Personal Training"
    },
    {
      url:'/img/gallery/7.jpg',
      title: "Strength Training"
    },
    {
      url: '/img/gallery/6.jpg',
      title: "Morning Workout"
    },
    {
      url: '/img/gallery/9.jpg',
      title: "Yoga Session"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-center"
        style={{ 
          backgroundImage: `url("/img/gallery/3.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Take a tour of our state-of-the-art facilities
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-red-600"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage.url} 
            alt={selectedImage.title}
            className="max-w-full max-h-[90vh] object-contain"
          />
          <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold">
            {selectedImage.title}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Gallery;