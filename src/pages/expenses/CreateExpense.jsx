import { useState } from 'react';

const CreateExpense = ({ handleCancel }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    amount: '',
    type: '',
    category: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.amount) {
      errors.amount = 'Required';
    }
    if (!values.type) {
      errors.type = 'Required';
    }
    if (!values.category) {
      errors.category = 'Required';
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
        <h2 className='uppercase font-semibold text-xl text-center'>Create expenses</h2>
        <div className='py-8 w-full'>
          <form className='w-full' onClick={(e) => e.stopPropagation()}>
            {formErrors.amount && (
              <p className='text-red-500 text-sm font-bold'>{formErrors.amount}</p>
            )}
            <div className='w-full mb-10'>
              <input
                type='text'
                id='amount'
                name='amount'
                value={formValues.amount}
                onChange={handleChange}
                placeholder='Enter amount'
                className='w-full border-2 border-x-0 border-t-0 p-3 focus:border-primary-100 outline-none font-medium'
              />
            </div>
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
                placeholder='Enter expenses name'
                className='w-full border-2 border-x-0 border-t-0 p-3 focus:border-primary-100 outline-none font-medium'
              />
            </div>
            {formErrors.category && (
              <p className='text-red-500 text-sm font-bold'>{formErrors.category}</p>
            )}
            <div className='w-full mb-10'>
              <input
                type='text'
                id='category'
                name='category'
                value={formValues.category}
                onChange={handleChange}
                placeholder='Enter category'
                className='w-full border-2 border-x-0 border-t-0 p-3 focus:border-primary-100 outline-none font-medium'
              />
            </div>
            {formErrors.type && (
              <p className='text-red-500 text-sm font-bold'>{formErrors.type}</p>
            )}
            <div className='w-full mb-10'>
              <input
                type='text'
                id='type'
                name='type'
                value={formValues.type}
                onChange={handleChange}
                placeholder='Enter expenses type'
                className='w-full border-2 border-x-0 border-t-0 p-3 focus:border-primary-100 outline-none font-medium'
              />
            </div>
            <div className='w-full'>
              <button
                type='button'
                className='capitalize w-full h-14 bg-primary-100 hover:bg-transparent hover:text-primary-100 text-white font-medium hover:border-2 hover:border-primary-100'
              >
                create sales
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

export default CreateExpense;
