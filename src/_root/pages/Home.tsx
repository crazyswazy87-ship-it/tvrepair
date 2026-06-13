import nyoi from "../../../public/assets/nyoi.png"
import PillNav from "../../component/PillNav";
import spana from "../../../public/assets/spana.png"
import InfiniteMenu from "../../component/InfiniteMenu";
import SpotlightCard from "../../component/SpotlightCard";
import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import CurvedLoop from "../../component/CurvedLoop";
import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";
import { useEffect, useRef } from "react";

const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const Home = () => {
  
const stats = [
  { number: 200, suffix: "+", label: "TVs Repaired" },
  { number: 5, suffix: "+", label: "Years Experience" },
  { number: 30, suffix: " Min", label: "Average Response" },
  { number: 100, suffix: "%", label: "Customer Satisfaction" },
];

  const items = [
  {
    image: 'assets/mount.jpg',
    link: '#',
    title: '',
    description: ' "TV Installation"'
  },
  {
    image: 'assets/updates.jpg',
    link: '#',
    title: '',
    description: 'Software Updates',
  },
  {
    image: 'assets/replacement.jpg',
    link: '#',
    title: '',
    description: 'No power',
  },
  {
    image: 'assets/replacement.jpg',
    link: '#',
    title: '',
    description: 'Screen replacement',
  },
  {
    image: 'assets/back.jpg',
    link: '#',
    title: '',
    description: 'Backlight Problems',
  },
    {
    image: 'assets/back.jpg',
    link: '#',
    title: '',
    description: 'Mother Board issues',
  },
    {
    image: 'assets/replacement.jpg',
    link: '#',
    title: '',
    description: 'Black screen',
  },
    {
    image: 'assets/hdmi.jpg',
    link: '#',
    title: '',
    description: 'No Sound',
  },
    {
    image: 'assets/hdmi.jpg',
    link: '#',
    title: '',
    description: 'Hdmi issues',
  }
];

const faqs = [
  {
    question: "Do you offer home service?",
    answer:
      "Yes, we provide home repair services for TVs and other electronics in selected areas.",
  },
  {
    question: "How much does TV repair cost?",
    answer:
      "The cost depends on the TV model and the type of fault. Contact us to talk with the an agent.",
  },
  {
    question: "Do you repair Smart TVs?",
    answer:
      "Yes, we repair Smart TVs from major brands including Samsung, LG, Sony, TCL, Hisense, Vitron, Skyworth,and more.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve Nairobi and surrounding areas. Contact us to confirm availability in your location.",
  },
  {
    question: "How long does repair take?",
    answer:
      "Most repairs are completed within 1hr to a whole day, depending on the issue and parts availability.",
  },
];

  return (
    <div className="home-container ">
      {/**topbar */}
      <div className="kinena">
        <PillNav
          logo={spana}
          logoAlt="Company Logo"
          items={[
            { label: 'Services', href: '#services' },
            { label: 'Contact', href: '#contact' },
            { label: 'Why us', href: '#why-us' },
          ]}
          activeHref="/"
          className="custom-nav "
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          theme="light"
          initialLoadAnimation={false}
        />
      </div>
        <div className="fortnight">
          <motion.img
            src={nyoi}
            alt="nyoi"
            className="nyoi"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

        <div className="mamoshi">
          <CurvedLoop 
            marqueeText="We ✦ Are✦ Professional ✦ Reliable ✦ Trusted ✦We ✦ Serve ✦ All ✦ Areas ✦ Around ✦ Nairobi ✦ Call us ✦Today ✦ "
            speed={5}
            curveAmount={400}
            direction="right"
            interactive
            className="custom-text-styl"
          />
        </div>
        </div>

      {/*divisions*/}
       <div className="bars">
       <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        <SpotlightCard className=" step custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <span className="cry">
               TV Repair & Installation Services in Nairobi
            </span>
            <span className="baby">
              Fast, affordable, and reliable TV repairs at your doorstep
            </span>

            <span className="baby">
              We'll diagnose and repair it quickly at your home
            </span>
         </SpotlightCard> 
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="contact"
        >
          <SpotlightCard className=" step custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">

            <button className="btn-grad call">
              <FaPhone />
              <Link to="https://call.whatsapp.com/voice/E2WPLydgxlBgp9PolvlRqQ" className="njing">
                 0742104220
              </Link>
            </button>

            <button className="btn-grad instagram">
              <FaInstagram />
              <Link to="https://www.instagram.com/pillmaster.510?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="njing">
                 Instagram
              </Link>
            </button>

            <button className=" btn-grad whatsapp">
              <FaWhatsapp/>
              <Link to="" className="njing">
                 Whatsapp
              </Link>
            </button>
          
           </SpotlightCard>
          </motion.div>
        </div>

      {/**animations */}
        <div id="services" className="gwash" >
          <InfiniteMenu items={items}
            scale={1.1}
          />
        </div>
      {/**contact */}
    <div className="bars">
  
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SpotlightCard className=" step custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
           {/* STATS */}
          <section className="py-20 bg-lime-500">
            <div className="max-w-7xl mx-auto px-2 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileInView={{ opacity: [0, 1], y: [50, 0] }}
                  viewport={{ once: true }}
                  className="text-center "
                >
                <div className="mula">
                  <h2 className="text-4xl md:text-5xl font-bold">
                  <Counter
                    value={item.number}
                    suffix={item.suffix}
                  />
                </h2>
                  <p className="tula">{item.label}</p>
                </div>
                </motion.div>
              ))}
            </div>  
         </section>
        </SpotlightCard> 
    </motion.div> 

        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <SpotlightCard className=" step custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div>

              <h2 className="vosti">
                Meet Steve
              </h2>

              <p className="stephen">
                Certified TV Technician with 5+ years experience
                repairing Smart TVs, LED TVs, OLED TVs and Android TVs.
              </p>
            </div>
              <button className="whatsapp btn-grad">
                <Link to="https://call.whatsapp.com/voice/E2WPLydgxlBgp9PolvlRqQ" className="njing">
                Get in touch
                </Link>
              </button>
          
          </SpotlightCard>
        </motion.div>  
        </div>

        <motion.div>
          <div className="smash">
            <p className="vietnam">Tvs we deal with</p>
            <CurvedLoop 
              marqueeText="Samsung ✦ LG ✦ Hisense ✦ Skyworth ✦ Sony ✦ Vitron ✦ TLC ✦ Apple Tv ✦ "
              speed={4}
              curveAmount={0}
              direction="left"
              interactive
              className="custom-text-style"
            />
          </div>

        </motion.div>

        {/*why us */}
        <motion.div id="why-us">
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="vietnam">
                Why Choose Us
              </h2>
    
              <div className="skyfall">
                {[
                  "✦ We Come To You ✦",
                  "✦ Same-Day Service ✦",
                  "✦ Affordable Pricing ✦",
                  "✦ Genuine Parts ✦",
                  "✦ Experienced Technicians ✦",
                  "✦ Nairobi Wide Coverage ✦",
                ].map((item) => (
                  <div
                    key={item}
                    className="mapema"
                  >
                    
                    <h3 className="font-semibold">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>

         {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <section className="bg-red-400 py-24">
          <div className="songs">
            <h2 className="text-center text-5xl font-bold mb-15">
              Frequently Asked Questions
            </h2>

            <div className=" skyfall">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="bg-white rounded-xl p-5 shadow"
                >
                  <summary className="cursor-pointer flex justify-between items-center">
                    {faq.question}
                    <BiChevronDown />
                  </summary>

                  <p className="answero">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </motion.div>

    </div>
  )
}

export default Home