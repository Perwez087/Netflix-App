import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Query = () => {
  let data = [
    {title : "What is Netflix?",
    content1 : "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
    content2 : "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"},

    {title:"How much does Netflix cost?",
    content1: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."},

    {title:"Where can I watch?",
    content1: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    content2: "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."},

    {title:"How do I cancel?",
    content1: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",},

    {title:"What can I watch on Netflix?",
    content1: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",},
    
    {title:"Is Netflix good for kids",
    content1: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
    content2: "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."}, 
  ]

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className='max-w-screen-2xl text-white'>
        <div className='bg-black mt-3'>
          <div className='md:w-[65%] w-[90%] flex flex-col justify-center items-center mx-auto'>
            <div className='mt-8 py-4'>
              <h1 className='md:text-5xl text-3xl text-center font-bold'>Frequently Asked Questions</h1>
            </div>
            {data.map((d,index) => (
              <div key={index} className='w-full'>
              <div
                  className='w-full flex justify-between items-center py-5 px-4 mt-6'
                  style={{ background: 'rgb(45,45,45)', cursor: 'pointer' }}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="md:text-2xl text-lg">{d.title}</h3>
                  <span className='text-2xl'>{activeIndex === index ? <RxCross2 /> : <FaPlus />}</span>
                </div>

                <div className={`mt-2 md:text-2xl text-lg space-y-4 px-4 pb-4 pt-2 transition ease-in duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}
                  style={{ background: 'rgb(45,45,45)' }}>
                  <p className='mt-4'>{d.content1}</p>
                  {d.content2 && <p>{d.content2}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <h1 className='text-lg py-6 space-y-4 mt-8 text-center'>Ready to watch? Enter your email to create or restart your membership.</h1>
          </div>
          <div className='md:w-[45%] w-[80%] md:flex justify-center items-center mx-auto space-x-2 pb-12 transition-all duration-500 ease-in-out'>
            <input className='p-3 md:w-[60%] w-[90%] text-white bg-inherit border border-gray-500 rounded  ml-4 md:mb-0 mb-4' placeholder='Email address' />
            <div className="flex justify-center items-center">
            <button className='bg-red-600 p-3 md:px-10 px-5 md:text-xl rounded font-bold'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Query;
