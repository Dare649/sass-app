import { useState } from 'react';

const CreateSales = ({ handleCancel }) => {
  const [formValues, setFormValues] = useState({
    product_name: '',
    amount: '',
    unit_price: '',
    quantity: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    if (!values.product_name) {
      errors.product_name = 'Required';
    }
    if (!values.amount) {
      errors.amount = 'Required';
    }
    if (!values.unit_price) {
      errors.unit_price = 'Required';
    }
    if (!values.quantity) {
      errors.quantity = 'Required';
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
        <h2 className='uppercase font-semibold text-xl text-center'>Create sales</h2>
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
            {formErrors.product_name && (
              <p className='text-red-500 text-sm font-bold'>{formErrors.product_name}</p>
            )}
            <div className='w-full mb-10'>
              <input
                type='text'
                id='product_name'
                name='product_name'
                value={formValues.product_name}
                onChange={handleChange}
                placeholder='Enter product_name'
                className='w-full border-2 border-x-0 border-t-0 p-3 focus:border-primary-100 outline-none font-medium'
              />
            </div>
            {formErrors.quantity && (
              <p className='text-red-500 text-sm font-bold'>{formErrors.quantity}</p>
            )}
            <div className='w-full mb-10'>
              <input
                type='text'
                id='quantity'
                name='quantity'
                value={formValues.quantity}
                onChange={handleChange}
                placeholder='Enter quantity'
                className='w-full border-2 border-x-0 border-t-0 p-3 focus:border-primary-100 outline-none font-medium'
              />
            </div>
            {formErrors.unit_price && (
              <p className='text-red-500 text-sm font-bold'>{formErrors.unit_price}</p>
            )}
            <div className='w-full mb-10'>
              <input
                type='text'
                id='unit_price'
                name='unit_price'
                value={formValues.unit_price}
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

export default CreateSales;
