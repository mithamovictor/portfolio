'use client';

import { FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { processContactForm } from '@/app/actions/ContactFormAction';

const ContactFormSubmitButton: FC = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className={
        'flex flex-row items-center justify-center w-full md:w-40 text-center text-white bg-black p-2 mt-8 rounded-md shadow-lg text-sm md:text-base'
      }
      disabled={pending}
      type={'submit'}
    >
      {pending ? (
        <>
          <FaSpinner className={'animate-spin mr-2'} /> Sending...
        </>
      ) : (
        <>
          <FaPaperPlane className={'mr-2'} /> Send
        </>
      )}
    </button>
  );
};

const Contact: FC = () => {
  const [state, contactFormAction] = useFormState<any, any>(processContactForm, { message: null });

  return (
    <>
      <h2 className={'uppercase text-lg underline mb-4 text-center'}>Contact</h2>
      <form
        action={contactFormAction}
        id={'contact_form'}
        className={'grid grid-cols-1 md:grid-cols-2 gap-4 items-start justify-between'}
      >
        <input
          className={
            'border-0 border-b border-gray-300 text-sm p-2 rounded-md w-full focus:outline-0 focus:ring-0 col-span-1'
          }
          type={'text'}
          name={'firstName'}
          id={'firstName'}
          placeholder={'First Name'}
          required
        />
        <input
          className={
            'border-0 border-b border-gray-300 text-sm p-2 rounded-md w-full focus:outline-0 focus:ring-0 col-span-1'
          }
          type={'text'}
          name={'lastName'}
          id={'lastName'}
          placeholder={'Last Name'}
          required
        />
        <input
          className={
            'border-0 border-b border-gray-300 text-sm p-2 rounded-md w-full focus:outline-0 focus:ring-0 col-span-1 md:col-span-2'
          }
          type={'email'}
          name={'email'}
          id={'email'}
          placeholder={'Email'}
          required
        />
        <textarea
          className={
            'border-0 border-b border-gray-300 text-sm p-2 rounded-md w-full focus:outline-0 focus:ring-0 col-span-1 md:col-span-2'
          }
          name={'message'}
          id={'message'}
          rows={8}
          placeholder={'Message'}
          required
        />
        <ContactFormSubmitButton />
      </form>
    </>
  );
};

export default Contact;
