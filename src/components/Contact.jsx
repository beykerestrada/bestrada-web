import ContactTally from "./ContactTally";

const Contact = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-20 px-10 xl:px-0 flex justify-center items-center relative">
      <div className="bg-gray-light border border-gray-darker rounded-2xl p-5 shadow-xl w-full md:w-1/2">
        <span id="contact"></span>
        <p className="text-md uppercase font-sub_heading font-black text-orange-light">Let's talk</p>
        <h2 className="text-5xl font-heading text-blue-darker">Contact.</h2>
        <ContactTally />
      </div>
      <div className="h-full flex justify-center items-center absolute -z-30">
        <div className="w-[300px] h-[300px] absolute translate-x-60">
          <div className="w-full h-full absolute rounded-full bg-gradient-to-br from-blue-light to-gray-light shadow-2xl motion-safe:animate-pulse"></div>
          <div className="w-full h-full absolute rounded-full bg-gradient-to-br from-blue-light to-gray-light shadow-2xl motion-safe:animate-pulse"></div>
        </div>
        <div className="w-[300px] h-[300px] absolute -translate-y-60 -translate-x-60">
          <div className="bg-orange-light rounded-full w-full h-full absolute bg-gradient-to-br from-orange-darker via-orange-dark to-orange-light-light shadow-2xl motion-safe:animate-pulse"></div>
          <div className="bg-orange-light rounded-full w-full h-full absolute bg-gradient-to-br from-orange-darker via-orange-dark to-orange-light-light shadow-2xl motion-safe:animate-pulse"></div>
        </div>
        <div className="w-[300px] h-[300px] absolute translate-y-80 -translate-x-40">
          <div className="bg-gradient-to-br w-full h-full absolute from-yellow-dark to-yellow-light shadow-2xl rounded-full motion-safe:animate-pulse"></div>
          <div className="bg-gradient-to-br w-full h-full absolute from-yellow-dark to-yellow-light shadow-2xl rounded-full motion-safe:animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
