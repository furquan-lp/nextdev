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
  <div className="flex flex-col grow p-2 md:p-6 text-slate-700 bg-white/90 shadow-lg">
    <span className="font-aboutfont text-4xl md:text-5xl">Reach out to me</span>
    <div className="hidden md:block"><Bar /></div>
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