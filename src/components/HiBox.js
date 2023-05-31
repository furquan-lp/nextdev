const HiBox = () =>
  <div className="flex flex-wrap md:flex-nowrap justify-around text-slate-800">
    <div className="clipped-shadow flex-grow">
      <div className="flex flex-col text-3xl md:text-6xl my-5 px-24 py-10 flex-grow font-aboutfont tracking-wide
       bg-white/90 clipped-card-right">
        <span className="my-1">Hi,</span>
        <span className="my-1">I'm Syed</span>
        <span className="my-1">Web Developer</span>
      </div>
    </div>
    <div className="clipped-shadow flex-grow">
      <div className="flex flex-col text-2xl md:text-5xl my-5 px-24 py-10 flex-grow font-cardtitle items-center
       bg-white/90 clipped-card-left">
        <i>About Me</i>
      </div>
    </div>
  </div>;

export default HiBox;