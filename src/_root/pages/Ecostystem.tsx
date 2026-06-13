import CardNav from "../../component/CardNav";
import nyoi from "../../../public/assets/nyoi.png"
import { motion } from "framer-motion";
import bobmarley from "../../../public/assets/doorstep.png"
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import InfiniteCarousel from "../components/shared/InfiniteCarousel";
import Time from '../../../public/assets/time.png'
import location from "../../../public/assets/location.png"
import Star from "../../../public/assets/star.png"
import Pricing from "../../../public/assets/pricing.png"
import Fast from "../../../public/assets/fast.png"
import Personel from "../../../public/assets/personel.png"
import fix from "../../../public/assets/fix.png"
import shefi from "../../../public/assets/tick.png"

  const items = [
    {
      label: "Home",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        { label: "Why us", ariaLabel: "About us" },
        { label: "Faq", ariaLabel: "About us" }
      ]
    },
    {
      label: "Services", 
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Black Screen", ariaLabel: "Black screen" },
        { label: "No sound", ariaLabel: "Sound" },
        { label: "Tv mount", ariaLabel: "Mount on wall" },
        { label: "Software updates", ariaLabel: "Software" },
        { label: "Mother board issues", ariaLabel: "Hardware" },
        { label: "Backlight problems", ariaLabel: "Hardware" },
        { label: "Screen replacement", ariaLabel: "Hardware" },
        { label: "No power", ariaLabel: "Hardware" },
        { label: "Tv mount", ariaLabel: "services" }
      ]
    },
    {
      label: "Conact",
      bgColor: "#2F293A", 
      textColor: "#fff",
      links: [
        { label: "Whatsapp", ariaLabel: "Lets Chat" },
        { label: "Phone", ariaLabel: "Call us" },
        { label: "Instagram", ariaLabel: "Lets Chat" }
      ]
    },
    {
      label: "Faq",
      bgColor: "#2F293A", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#2F293A", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

   const carouselImages = [
  { src: Time, title: "24/7 emergency support", className: "caorosel-image" },
  { src: Personel, title: "Experienced Technicians", className: "caorosel-image" },
  { src: Pricing, title: "Affodable Pricing", className: "caorosel-image" },
  { src: Fast, title: "Fast Response Team", className: "caorosel-image" },
  { src: location, title: "Trusted Local Service", className: "caorosel-image" },
  { src: Star, title: "Customer Satisfaction", className: "caorosel-image" }
];

const services = [
  {
    image: "assets/mount.jpg",
    link: "#",
    title: "TV Installation",
    description: "TV Installation",
    details:
      "Professional wall mounting, setup, cable management, and configuration for all TV brands.",
  },
  {
    image: "assets/updates.jpg",
    link: "#",
    title: "Software Updates",
    description: "Software Updates",
    details:
      "Fix slow performance, app issues, and outdated firmware on Smart TVs and Android TVs.",
  },
  {
    image: "assets/replacement.jpg",
    link: "#",
    title: "No Power",
    description: "No Power",
    details:
      "Diagnosis and repair of TVs that won't turn on due to power supply or motherboard faults.",
  },
  {
    image: "assets/cracked.jpg",
    link: "#",
    title: "Screen Replacement",
    description: "Screen Replacement",
    details:
      "Replacement of cracked, damaged, or malfunctioning TV screens where repair is possible.",
  },
  {
    image: "assets/handrepair.jpg",
    link: "#",
    title: "Backlight Problems",
    description: "Backlight Problems",
    details:
      "Repair of dim displays, flickering screens, or TVs with sound but no picture.",
  },
  {
    image: "assets/back.jpg",
    link: "#",
    title: "Motherboard Issues",
    description: "Motherboard Issues",
    details:
      "Repair and replacement of faulty TV mainboards causing boot loops, freezing, or no display.",
  },
  {
    image: "assets/replacement.jpg",
    link: "#",
    title: "Black Screen",
    description: "Black Screen",
    details:
      "Troubleshooting and repair for TVs displaying a black screen while powered on.",
  },
  {
    image: "assets/power.jpg",
    link: "#",
    title: "No Sound",
    description: "No Sound",
    details:
      "Fix speaker, audio board, and software issues causing loss of sound.",
  },
  {
    image: "assets/hdmi.jpg",
    link: "#",
    title: "HDMI Issues",
    description: "HDMI Issues",
    details:
      "Repair damaged HDMI ports and resolve connectivity issues with decoders, consoles, and laptops.",
  },
];


const Ecostystem = () => {
  return (
    <div className="home-container">
      <CardNav
      logo={nyoi}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
      theme="light"
    />

    {/*intor pic*/}
    <div className="fortnight">
      <img 
        src={bobmarley}
        alt="tv technician"
        className="bob"
      />
      {/*division */}
      <motion.div>
        <div className="skeng">
          <div className="skilli">
             <span className="cryy">
               Kenya's Trusted TV Repair Experts
            </span>
            <span className="babyy">
              Fast, affordable, and reliable TV repair services for homes and business across
              Kenya. Available 24/7 with experienced technicians you can trust
            </span>

             <button className=" btn-grad whatsapp">
              <FaWhatsapp/>
              <Link to="https://wa.me/254742104220" className="njing">
                  Whatsapp
              </Link>
            </button>
            
          </div>

          <div className="skilli beng">
            aa
          </div>

        </div>

      </motion.div>
    </div>

    
    {/* CAROUSEL */}
    <motion.div
      className="tooltip"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
    <InfiniteCarousel images={carouselImages} speed={25} />
    </motion.div>

      {/*technicians */}
    <div className="skengdon">
      <motion.div>
        <div className="skillibeng">
          <img 
            src={fix}
            alt="KENYA TV REPAIR"
            className="fix"
          />
        </div>
      </motion.div>

      <motion.div>
        <div className="skillibeng">
          <span className="cry-two">
              Welcome to Kenya TV Repair 
          </span>
          <span className="baby-two">
            We're not just technicians, we're your neighbours who care.
            At Kenya Tv Repair, we believe in honest, transparent service with no hidden costs
            or suprises
          </span>
          <span className="baby-two">
            As Kenya's trusted TV repair, we've built our repuatation on reliability,
            proffessionalism and competitive pricing.
            Our team of certified technicians is commited to getting your television 
            back tp perfect working condition.
          </span>

        </div>
      </motion.div>

      <motion.div>
        <div className="tiki">
            <span className="vybz">
              <img 
                src={shefi}
                alt="tick"
                height={25}
              />
              Licensed Technicians
            </span>
            <span className="vybz">
              <img 
                src={shefi}
                alt="tick"
                height={25}
              />
              Transparent Pricing
            </span>
            <span className="vybz">
             <img 
                src={shefi}
                alt="tick"
                height={25}
              />
              Genuine Parts
            </span>
            <span className="vybz">
             <img 
                src={shefi}
                alt="tick"
                height={25}
              />
              Service Guarantee
            </span>
          </div>
      </motion.div>

    </div>

    <div className="pretty">
      <span className="pusi"> Our services </span>
      <span className="pusssy">
        Proffesional 
        <span className="bull"> TV Repair services </span>
      </span>
      <span className="brest">
        Expert repair and maintainance for all television brands and types across Kenya
      </span>

    </div>

    <div className="skenglondon">

      
      {services.map((service) => (
      <motion.div>
        <div className="badman" key={service.title}>
          <div className="gaza">
            <img
              src={service.image}
              alt="service"
              className="mbotoo"
            />
          </div>

          <div className="slim">
            <span className="indu">
              {service.title}
            </span>

            <p>{service.details}</p>
          </div>
        </div>
        </motion.div>
      ))}

    </div>

    <motion.div>
      <div className="timee">
        how it works

      <span className="bresto">
          Getting your appliances fixed is easy. Just follow these simple steps
      </span>


      </div>
    </motion.div>




    </div>
  )
}

export default Ecostystem