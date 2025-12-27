import { useRef, useEffect, useState } from 'react';
import m1 from '../assets/m1.jpg';
import m2 from '../assets/m2.jpg';
import m3 from '../assets/m3.jpg';
import m4 from '../assets/m4.jpg';
import m5 from '../assets/m5.jpg';
import m6 from '../assets/m6.jpg';
import m7 from '../assets/m7.jpg';
import m8 from '../assets/m8.jpg';
const members = [
  {
    name: 'Yassir',
    role: 'Leader',
    desc: 'Backend developer',
    img: m7
  },
  {
    name: 'Mahmoud Ali',
    role: 'Co-leader',
    desc: 'frontend developer',
    img: m1
  },
  {
    name: 'Ali Raeed',
    role: 'Member',
    desc: 'Backend-Api,Database',
    img: m4
  }
  ,
  {
    name: 'Abdullah Ammar',
    role: 'Member',
    desc: 'Ui/Ux Designer',
    img: m8
  }
  ,
  {
    name: 'Ghasaq Ali',
    role: 'Member',
    desc: 'Frontend,Design',
    img: m3
  }
  ,
  {
    name: 'Mariam Jasim',
    role: 'Member',
    desc: 'Frontend developer',
    img: m2
  }
    ,
  {
    name: 'Ghadeer Ali',
    role: 'Member',
    desc: 'Frontend developer',
    img: m5
  }
    ,
  {
    name: 'Lobab Mahdi',
    role: 'Member',
    desc: 'Photographer',
    img: m6
  }

];

export default function MemberCarousel() {
  const ref = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (dir = 'right') => {
    const el = ref.current;
    if (!el) return;
    const offset = el.clientWidth * 0.6;
    el.scrollBy({ left: dir === 'right' ? offset : -offset, behavior: 'smooth' });
  };

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      const el = ref.current;
      if (!el) return;
      // if reached the end, loop back to start
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scroll('right');
      }
    }, 3000);
    return () => clearInterval(id);
  }, [isPaused]);

  return (
    <div className="w-full max-w-6xl px-6 py-12">
      <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <button
          aria-label="prev"
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-800/60 hover:bg-gray-800 text-white"
        >
          ‹
        </button>

        <div
          ref={ref}
          className="flex gap-6 overflow-x-auto scroll-pl-6 snap-x snap-mandatory scrollbar-hide py-4 px-8"
        >
          {members.map((m, i) => (
            <div
              key={i}
              className="group relative min-w-[300px] w-[320px] h-[420px] rounded-2xl overflow-hidden shadow-lg snap-center flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundImage: `url(${m.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black/25"></div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="backdrop-blur-md bg-black/40 rounded-xl p-4 transform translate-y-4 opacity-95 group-hover:translate-y-0 transition-all duration-300">
                  <div className="text-white">
                    <div className="text-xl font-semibold">{m.name}</div>
                    <div className="text-sm text-gray-200/80">{m.role}</div>
                    <p className="mt-2 text-sm text-gray-200/90">{m.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          aria-label="next"
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-800/60 hover:bg-gray-800 text-white"
        >
          ›
        </button>
      </div>
    </div>
  );
}
