import { useState, useEffect } from 'react';

import { FiPhone, FiMail, FiLinkedin, FiMapPin, FiCheck } from 'react-icons/fi';
import { useForm } from "react-hook-form";

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import Bar from '../components/Bar';

import { usePageTitle } from '../myHooks';
import service from '../services';

const SendButton = ({ active }) => {
  if (active) {
    return <button type="submit" className="p-1 md:p-2 mr-auto my-4 md:mt-10 md:text-lg text-white bg-slate-500
     hover:text-slate-100 hover:bg-slate-400 transition-colors duration-200">Send Message</button>;
  } else {
    return <button type="none" className="flex items-center p-1 md:p-2 mr-auto my-4 md:mt-10 md:text-lg text-slate-100
    bg-slate-400"><FiCheck className="mr-0.5" />Message Sent</button>;
  }
};

const ContactForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    service.postMessage({
      name: data.firstname, email: data.email, subject: data.subject, message: data.message
    });
    setValue('firstname', '');
    setValue('email', '');
    setValue('subject', '');
    setValue('message', '');
    setTimeout(() => console.log('sent'), 5000);
  };

  return (<form className="flex flex-col grow py-2 px-2 md:py-6 md:px-10 text-slate-700 bg-white/90 shadow-lg"
    onSubmit={handleSubmit(onSubmit)}>
    <span className="font-aboutfont text-4xl md:text-5xl mb-2 md:mb-6">Send me a message</span>
    <label htmlFor="name" className="text-lg md:text-2xl my-1 md:my-2 font-thin tracking-wide">Name:</label>
    <input type="text" name="name" className={`bg-slate-50 p-1 md:p-2 border-b border-slate-300
     placeholder:text-slate-300 ${errors.firstname && 'focus:outline outline-red-600'}`}
      placeholder='Enter your name' {...register("firstname", { required: true, maxLength: 30 })} />
    <label htmlFor="email" className="text-lg md:text-2xl my-1 md:my-2 mt-4 md:mt-8 font-thin tracking-wide">Email:</label>
    <input type="text" name="email" className="bg-slate-50 p-1 md:p-2 border-b border-slate-300
     placeholder:text-slate-300" placeholder='Enter your email'
      {...register("email", {
        required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      })} />
    <label htmlFor="subject" className="text-lg md:text-2xl my-1 md:my-2 mt-4 md:mt-8 font-thin tracking-wide">Subject:
    </label>
    <input type="text" name="subject" className="bg-slate-50 p-1 md:p-2 border-b border-slate-300
     placeholder:text-slate-300" placeholder='Subject'
      {...register("subject", { required: true, maxLength: 128 })} />
    <label htmlFor="message" className="text-lg md:text-2xl my-1 md:my-2 mt-4 md:mt-8 font-thin tracking-wide">Message:
    </label>
    <textarea name="message" className="bg-slate-50 p-1 md:p-2 border-b border-slate-300
     placeholder:text-slate-300" rows="6" cols="33" placeholder='Hi...'
      {...register("message", { required: true, maxLength: 1000 })} />
    <SendButton active={true} />
  </form>
  );
};

const ReachOut = () =>
  <div className="flex flex-col p-2 md:p-6 text-slate-700 bg-white/90 shadow-lg">
    <span className="font-aboutfont text-4xl md:text-5xl mb-2">Reach out to me</span>
    <div className="hidden md:block"><Bar /></div>
    <span className="my-2 md:my-4 text-xl md:text-2xl font-abouttext">I'm open to any queries for work, suggestions or
      just to have a chat.
    </span>
    <span className="flex items-center md:text-lg my-2 md:my-4 md:mt-8">
      <span className="mx-4 p-3 border rounded-full md:text-xl bg-white"><FiPhone className="self-center" /></span>
      Phone:&nbsp;<a href="tel:+918210991146" className="text-slate-500">+91 82109 91146</a>
    </span>
    <span className="flex items-center md:text-lg my-2 md:my-4">
      <span className="mx-4 p-3 border rounded-full md:text-xl bg-white"><FiMail className="self-center" /></span>
      Email:&nbsp;<a href="mailto:syed@nextdev.in" className="text-slate-500">syed@nextdev.in</a>
    </span>
    <span className="flex items-center md:text-lg my-2 md:my-4">
      <span className="mx-4 p-3 border rounded-full md:text-xl bg-white"><FiLinkedin className="self-center" /></span>
      LinkedIn Profile:&nbsp;<a href="https://www.linkedin.com/in/syed-ahmad-nextdev/" className="text-slate-500">
        https://www.linkedin.com/in/syed-ahmad-nextdev/</a>
    </span>
    <span className="flex items-center md:text-lg my-2 md:my-4">
      <span className="mx-4 p-3 border rounded-full md:text-xl bg-white"><FiMapPin className="self-center" /></span>
      Location:&nbsp;<span className="font-light">North 24 Parganas, Kolkata, West Bengal, India</span>
    </span>
  </div>;

export const Contact = ({ backendVersion }) => {
  usePageTitle('Contact');
  return (
    <div className="bg-minimal-react bg-contain bg-center bg-no-repeat min-h-screen">
      <TopBar page="contact" highlight={[false, false, false, false, true]} />
      <div className="flex flex-col md:flex-row md:mx-60 md:my-6 my-2 mx-1 md:p-6 md:py-10">
        <ContactForm />
        <div className="block md:hidden mt-2 mb-0 md:my-0"><Bar /></div>
        <ReachOut />
      </div>
      <Footer version={backendVersion.version} />
    </div>
  );
};