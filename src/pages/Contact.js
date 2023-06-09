import { FiPhone, FiMail, FiLinkedin, FiMapPin } from 'react-icons/fi';

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import Bar from '../components/Bar';

const ContactForm = ({ submit }) =>
  <form className="flex flex-col grow py-2 px-2 md:py-6 md:px-10 text-slate-700 bg-white/90 shadow-lg"
    onSubmit={submit}>
    <span className="font-aboutfont text-4xl md:text-5xl mb-2 md:mb-6">Send me a message</span>
    <label for="name" className="text-lg md:text-2xl my-1 md:my-2 font-thin tracking-wide">Name:</label>
    <input type="text" name="name" className="bg-slate-50 p-1 md:p-2 border-b border-slate-300
     placeholder:text-slate-300" placeholder='Enter your name' />
    <label for="email" className="text-lg md:text-2xl my-1 md:my-2 mt-4 md:mt-8 font-thin tracking-wide">Email:</label>
    <input type="text" name="email" className="bg-slate-50 p-1 md:p-2 border-b border-slate-300
     placeholder:text-slate-300" placeholder='Enter your email' />
    <label for="subject" className="text-lg md:text-2xl my-1 md:my-2 mt-4 md:mt-8 font-thin tracking-wide">Subject:
    </label>
    <input type="text" name="subject" className="bg-slate-50 p-1 md:p-2 border-b border-slate-300
     placeholder:text-slate-300" placeholder='Subject' />
    <label for="message" className="text-lg md:text-2xl my-1 md:my-2 mt-4 md:mt-8 font-thin tracking-wide">Message:
    </label>
    <textarea name="message" className="bg-slate-50 p-1 md:p-2 border-b border-slate-300
     placeholder:text-slate-300" rows="6" cols="33" placeholder='Hi...' />
    <button type="submit" className="p-1 md:p-2 mr-auto my-4 md:mt-10 md:text-lg text-white bg-slate-500
     hover:text-slate-100 hover:bg-slate-400 transition-colors duration-200">Send Message</button>
  </form>;

const ReachOut = () =>
  <div className="flex flex-col p-2 md:p-6 text-slate-700 bg-white/90 shadow-lg">
    <span className="font-aboutfont text-4xl md:text-5xl mb-2">Reach out to me</span>
    <div className="hidden md:block"><Bar /></div>
    <span className="my-2 md:my-4 text-xl md:text-2xl font-abouttext">I'm open to any queries for work, suggestions or
      just to have a chat.</span>
    <span className="flex items-center text-lg my-2 md:my-4 md:mt-8">
      <span className="mx-4 p-3 border rounded-full md:text-xl bg-white"><FiPhone className="self-center" /></span>
      Phone:&nbsp;<a href="tel:+918210991146" className="text-slate-500">+91 82109 91146</a></span>
    <span className="flex items-center text-lg my-2 md:my-4">
      <span className="mx-4 p-3 border rounded-full md:text-xl bg-white"><FiMail className="self-center" /></span>
      Email:&nbsp;<a href="mailto:furquan@pm.me" className="text-slate-500">furquan@pm.me</a></span>
    <span className="flex items-center text-lg my-2 md:my-4">
      <span className="mx-4 p-3 border rounded-full md:text-xl bg-white"><FiLinkedin className="self-center" /></span>
      LinkedIn Profile:&nbsp;<a href="https://www.linkedin.com/in/syed-ahmad-nextdev/" className="text-slate-500">
        https://www.linkedin.com/in/syed-ahmad-nextdev/</a></span>
    <span className="flex items-center text-lg my-2 md:my-4">
      <span className="mx-4 p-3 border rounded-full md:text-xl bg-white"><FiMapPin className="self-center" /></span>
      Location:&nbsp;<span className="font-light">North 24 Parganas, Kolkata, West Bengal, India</span></span>
    <span className="flex items-center text-lg my-2 md:my-4"></span>
  </div>;

export const Contact = () =>
  <div className="bg-minimal-react bg-contain bg-center bg-no-repeat">
    <TopBar page="contact" highlight={[false, false, false, false, true]} />
    <div className="flex flex-col md:flex-row md:mx-60 md:my-6 my-2 mx-1 md:p-6 md:py-10">
      <ContactForm submit={(e) => { e.preventDefault(); console.log('form submitted'); }} />
      <div className="block md:hidden mt-2 mb-0 md:my-0"><Bar /></div>
      <ReachOut />
    </div>
    <Footer />
  </div>;