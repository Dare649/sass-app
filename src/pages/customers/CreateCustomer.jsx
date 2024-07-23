import { useState } from 'react';

const CreateCustomer = ({ handleCancel }) => {
  const [formValues, setFormValues] = useState({
    email: '',
    name: '',
    address: '',
    gender: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const gender = ["female", "male"];

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.address) {
      errors.address = 'Required';
    }
    if (!values.gender) {
      errors.gender = 'Required';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <section className='bg-white lg:w-[50%] sm:w-full flex flex-col items-center justify-end'>
      <div className='lg:p-5 sm:p-2 w-full' onClick={(e) => e.stopPropagation()}>
        <h2 className='uppercase font-semibold text-xl text-center'>Create customer</h2>
        <div className='py-8 w-full'>
          <form className='w-full' onClick={(e) => e.stopPropagation()}>
            {formErrors.name && (
              <p className='text-red-500 text-sm font-bold'>{formErrors.name}</p>
            )}
            <div className='w-full mb-10'>
              <input
                type='text'
                id='name'
                name='name'
                value={formValues.name}
                onChange={handleChange}
                placeholder='Enter name'
                className='w-full border-2 border-x-0 border-t-0 p-3 focus:border-primary-100 outline-none font-medium'
              />
            </div>
            {formErrors.email && (
              <p className='text-red-500 text-sm font-bold'>{formErrors.email}</p>
            )}
            <div className='w-full mb-10'>
              <input
                type='text'
                id='email'
                name='email'
                value={formValues.email}
                onChange={handleChange}
                placeholder='Enter email'
                className='w-full border-2 border-x-0 border-t-0 p-3 focus:border-primary-100 outline-none font-medium'
              />
            </div>
            {formErrors.gender && (
              <p className='text-red-500 text-sm font-bold'>{formErrors.gender}</p>
            )}
            <div className='w-full mb-10'>
              <select
                type='text'
                id='gender'
                name='gender'
                placeholder='Select gender'
                className='w-full border-2 border-x-0 border-t-0 p-3 focus:border-primary-100 outline-none font-medium'
              >
                <option>-- select gender --</option>
                {
                    gender.map((item, id)=>(
                        <option key={id}>
                            {item}
                        </option>
                    ))
                }
              </select>
            </div>
            {formErrors.address && (
              <p className='text-red-500 text-sm font-bold'>{formErrors.address}</p>
            )}
            <div className='w-full mb-10'>
              <input
                type='text'
                id='address'
                name='address'
                value={formValues.address}
                onChange={handleChange}
                placeholder='Enter unit price'
                className='w-full border-2 border-x-0 border-t-0 p-3 focus:border-primary-100 outline-none font-medium'
              />
            </div>
            <div className='w-full'>
              <button
                type='button'
                className='capitalize w-full h-14 bg-primary-100 hover:bg-transparent hover:text-primary-100 text-white font-medium hover:border-2 hover:border-primary-100'
              >
                create customer
              </button>
            </div>
            <div className='mt-2'>
              <button
                type='button'
                onClick={(e) => { e.stopPropagation(); handleCancel(); }}
                className='capitalize w-full h-14 bg-red-500 hover:bg-transparent hover:text-red-500 text-white font-medium hover:border-2 hover:border-red-500'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateCustomer;
