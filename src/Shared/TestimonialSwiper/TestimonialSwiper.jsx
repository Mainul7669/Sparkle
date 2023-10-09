
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialData = [
  {
    id: 1,

    image: '/public/New folder/37040126_OR-99999999_01-500x500.webp',
  },
  {
    id: 2,

    image: '/public/New folder/37040205_OR-99999999_01-500x500.webp',
  },
  {
    id: 3,

    image: '/public/New folder/37042513_20_D8-500x500.webp',
  },
  {
    id: 4,

    image: '/public/New folder/37050262_OR-99999999_01-500x500.webp',
  },
  {
    id: 5,

    image: '/public/New folder/37092501_OR-99999999_01-500x500.webp',
  },
  {
    id: 6,

    image: '/public/New folder/37092512_61-99999999_01-500x500.webp',
  },
  {
    id: 7,

    image: '/public/New folder/47000355_PL-99999999_01-500x500.webp',
  },
  {
    id: 8,

    image: '/public/New folder/47010435_PL-99999999_01-500x500.webp',
  },

  // Add more testimonial data as needed
];

const TestimonialSwiper = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5, // Initially show 1 testimonial
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 576, // Adjust this breakpoint as needed
          settings: {
            slidesToShow: 2, // Show 3 testimonials on larger devices
          },
        },
        {
          breakpoint: 768, // Adjust this breakpoint as needed
          settings: {
            slidesToShow: 2, // Show 5 testimonials on even larger devices
          },
        },
      ],
    };
  
    return (
      <div className="w-full max-w-xs lg:max-w-7xl mx-auto p-4">

<div className='text-center mb-20'>
<h2 className='text-center mb-4 text-black font-bold text-2xl'>#Sparkle</h2>
<p className='text-gray-400'>Tag <span className='text-black'>@sparkle</span> in your Instagram posts for a chance to be featured here.</p>
<p className='text-gray-400 mb-4'>
Find more inspiration on our <span className='text-black'>Instagram account</span>.</p>
</div>

        <Slider {...settings}>
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="relative inline-block">
                <div className="lg:w-48 lg:h-48 w-full rounded-full overflow-hidden shadow-lg mx-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default TestimonialSwiper;