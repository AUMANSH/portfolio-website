import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [values, setValues] = useState({
    firstName: '',
    email: '',
    type: 'hireMe',
    comment: ''
  });

  const [touched, setTouched] = useState({
    firstName: false,
    email: false,
    comment: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<{type: 'success' | 'error', title: string, message: string} | null>(null);

  // Validation Logic
  const getErrors = () => {
    const errors: any = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.comment) {
      errors.comment = 'Required';
    } else if (values.comment.length < 25) {
      errors.comment = 'Must be at least 25 characters';
    }
    return errors;
  };

  const errors = getErrors();

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ firstName: true, email: true, comment: true });
    
    if (Object.keys(errors).length > 0) return;

    setIsLoading(true);
    setAlert(null);

    // Mock API Call
    setTimeout(() => {
      setIsLoading(false);
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        setAlert({
          type: 'success',
          title: 'All good!',
          message: `Thanks for your submission ${values.firstName}, we will get back to you shortly!`
        });
        // Reset form
        setValues({ firstName: '', email: '', type: 'hireMe', comment: '' });
        setTouched({ firstName: false, email: false, comment: false });
      } else {
        setAlert({
          type: 'error',
          title: 'Oops',
          message: 'Something went wrong, please try again later'
        });
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#512DA8] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-black">Contact me</h2>
        
        {alert && (
          <div className={`p-4 mb-6 rounded-lg ${alert.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            <h4 className="font-bold">{alert.title}</h4>
            <p>{alert.message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="firstName" className="text-sm font-semibold text-black">Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={values.firstName}
              onChange={handleChange}
              onBlur={() => handleBlur('firstName')}
              className={`border p-2 rounded text-black ${touched.firstName && errors.firstName ? 'border-red-500 focus:outline-red-500 outline-red-500' : 'border-gray-300'}`}
            />
            {touched.firstName && errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-semibold text-black">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              className={`border p-2 rounded text-black ${touched.email && errors.email ? 'border-red-500 focus:outline-red-500 outline-red-500' : 'border-gray-300'}`}
            />
            {touched.email && errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="type" className="text-sm font-semibold text-black">Type of enquiry</label>
            <select
              id="type"
              name="type"
              value={values.type}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded text-black"
            >
              <option value="freelance">Freelance project proposal</option>
              <option value="hireMe">Open source work</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="comment" className="text-sm font-semibold text-black">Your message</label>
            <textarea
              id="comment"
              name="comment"
              rows={5}
              value={values.comment}
              onChange={handleChange}
              onBlur={() => handleBlur('comment')}
              className={`border p-2 rounded text-black ${touched.comment && errors.comment ? 'border-red-500 focus:outline-red-500 outline-red-500' : 'border-gray-300'}`}
            />
            {touched.comment && errors.comment && (
              <span className="text-red-500 text-sm">{errors.comment}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#512DA8] hover:bg-purple-800 text-white font-bold py-3 px-4 rounded transition-colors flex justify-center items-center h-12 mt-4"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
