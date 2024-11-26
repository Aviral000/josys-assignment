import React from 'react';
import { useForm } from 'react-hook-form';

interface FormInputs {
    ownerName: string;
    contactNumber: string;
    vehicleModel: string;
    registrationNumber: string;
    vehicleColor: string;
  }

const VehicleRegistrationForm:React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log('Form submitted:', data);
    alert('Form submitted successfully!');
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 data-testid="heading" className="text-2xl font-bold mb-8 text-center text-gray-800">
                  Vehicle Registration Form
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="relative">
                    <label className="text-gray-600 mb-2 block">Owner Name</label>
                    <input
                      type="text"
                      placeholder='Name'
                      {...register('ownerName', { required: 'Owner name is required' })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 
                        ${errors.ownerName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.ownerName && (
                      <p className="text-red-500 text-sm mt-1">{errors.ownerName.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <label className="text-gray-600 mb-2 block">Contact Number</label>
                    <input
                      type="text"
                      placeholder='contact-number'
                      {...register('contactNumber', {
                        required: 'Contact number is required',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Please enter a valid 10-digit number'
                        }
                      })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 
                        ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.contactNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <label className="text-gray-600 mb-2 block">Vehicle Model</label>
                    <input
                      type="text"
                      {...register('vehicleModel', { required: 'Vehicle model is required' })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 
                        ${errors.vehicleModel ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.vehicleModel && (
                      <p className="text-red-500 text-sm mt-1">{errors.vehicleModel.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <label className="text-gray-600 mb-2 block">Registration Number</label>
                    <input
                      type="text"
                      placeholder="TS09EA1234"
                      {...register('registrationNumber', {
                        required: 'Registration number is required',
                        pattern: {
                          value: /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/,
                          message: 'Please enter a valid registration number (e.g., TS09EA1234)'
                        }
                      })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 
                        ${errors.registrationNumber ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.registrationNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.registrationNumber.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <label className="text-gray-600 mb-2 block">Vehicle Color</label>
                    <input
                      type="text"
                      {...register('vehicleColor', { required: 'Vehicle color is required' })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 
                        ${errors.vehicleColor ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.vehicleColor && (
                      <p className="text-red-500 text-sm mt-1">{errors.vehicleColor.message}</p>
                    )}
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg 
                        hover:bg-blue-600 transition-colors duration-200 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Submit Registration
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleRegistrationForm;