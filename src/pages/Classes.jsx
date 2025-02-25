import React from 'react';
import { Clock, Users, Dumbbell } from 'lucide-react';

const Classes = () => {
  const classes = [
    {
      name: "Body Building",
      description: "Build strength and muscle mass with our comprehensive bodybuilding program.",
      trainer: "John Smith",
      time: "Mon, Wed, Fri - 9:00 AM",
      capacity: 15,
      image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      name: "Cardio Blast",
      description: "High-intensity cardio workouts to improve endurance and burn calories.",
      trainer: "Sarah Johnson",
      time: "Tue, Thu - 10:00 AM",
      capacity: 20,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      name: "Yoga Flow",
      description: "Find balance and flexibility through dynamic yoga sequences.",
      trainer: "Emma Davis",
      time: "Mon, Wed, Fri - 7:00 AM",
      capacity: 18,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      name: "CrossFit",
      description: "Challenge yourself with varied functional movements at high intensity.",
      trainer: "Mike Wilson",
      time: "Tue, Thu, Sat - 8:00 AM",
      capacity: 12,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  const schedule = {
    Monday: ['Body Building - 9:00 AM', 'Yoga Flow - 7:00 AM', 'CrossFit - 5:00 PM'],
    Tuesday: ['Cardio Blast - 10:00 AM', 'CrossFit - 8:00 AM', 'Body Building - 6:00 PM'],
    Wednesday: ['Body Building - 9:00 AM', 'Yoga Flow - 7:00 AM', 'Cardio Blast - 5:00 PM'],
    Thursday: ['Cardio Blast - 10:00 AM', 'CrossFit - 8:00 AM', 'Yoga Flow - 6:00 PM'],
    Friday: ['Body Building - 9:00 AM', 'Yoga Flow - 7:00 AM', 'CrossFit - 5:00 PM'],
    Saturday: ['CrossFit - 8:00 AM', 'Cardio Blast - 10:00 AM'],
    Sunday: ['Yoga Flow - 9:00 AM']
  };

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Our Classes</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Choose from our wide range of fitness classes
            </p>
          </div>
        </div>
      </div>

      {/* Classes Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {classes.map((classItem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${classItem.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{classItem.name}</h3>
                  <p className="text-gray-600 mb-4">{classItem.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-red-600 mr-2" />
                      <span>Trainer: {classItem.trainer}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-red-600 mr-2" />
                      <span>{classItem.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Dumbbell className="w-5 h-5 text-red-600 mr-2" />
                      <span>Capacity: {classItem.capacity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Weekly Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-black text-white">
                  <th className="py-4 px-6 text-left">Time</th>
                  {Object.keys(schedule).map((day) => (
                    <th key={day} className="py-4 px-6 text-left">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 3 }).map((_, timeSlot) => (
                  <tr key={timeSlot} className="border-b">
                    <td className="py-4 px-6 font-semibold">
                      {timeSlot === 0 ? 'Morning' : timeSlot === 1 ? 'Afternoon' : 'Evening'}
                    </td>
                    {Object.values(schedule).map((daySchedule, index) => (
                      <td key={index} className="py-4 px-6">
                        {daySchedule[timeSlot] || '-'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;