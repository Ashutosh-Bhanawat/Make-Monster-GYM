import React, { useState, useEffect } from 'react';
import { Scale } from 'lucide-react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBMI(bmiValue);

      // Determine BMI category
      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  useEffect(() => {
    calculateBMI();
  }, [height, weight]);

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-center"
        style={{ 
          backgroundImage:`url("/img/home/Home1.jpg")`, 
               }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">BMI Calculator</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Calculate your Body Mass Index (BMI)
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center mb-8">
              <Scale className="w-16 h-16 text-red-600" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter your height"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter your weight"
                />
              </div>
            </div>

            {bmi && (
              <div className="mt-8 text-center">
                <div className="text-4xl font-bold mb-4">
                  Your BMI: {bmi}
                </div>
                <div className="text-xl">
                  Category: <span className="font-semibold">{category}</span>
                </div>
              </div>
            )}

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">BMI Categories:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-semibold mb-2">Underweight</div>
                  <div className="text-sm text-gray-600">Below 18.5</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="font-semibold mb-2">Normal weight</div>
                  <div className="text-sm text-gray-600">18.5 - 24.9</div>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="font-semibold mb-2">Overweight</div>
                  <div className="text-sm text-gray-600">25 - 29.9</div>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="font-semibold mb-2">Obese</div>
                  <div className="text-sm text-gray-600">30 or greater</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Understanding Your BMI</h3>
            <div className="prose max-w-none">
              <p className="mb-4">
                BMI is a simple measure that uses your height and weight to work out if your weight is healthy. However, it's important to note that BMI is only one indicator of health and doesn't account for factors such as:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Muscle mass</li>
                <li>Bone density</li>
                <li>Overall body composition</li>
                <li>Age</li>
                <li>Gender</li>
                <li>Ethnicity</li>
              </ul>
              <p>
                For a more accurate assessment of your health status, consult with a healthcare professional who can take into account these and other relevant factors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BMICalculator;