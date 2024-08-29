"use client";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";
import OurTeam from "@/components/OurTeam";
import SocialMedias from "@/components/SocialMedias";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/whyUs";
import { usePathname } from "next/navigation";
import Image from "next/image";

const About = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white">
      {pathname === "/about" && (
        <div className="mt-24">
          <div className="text-center text-3xl text-yellow-800 font-serif">
            ABOUT US
          </div>
          <h1 className="text-center text-yellow-800 text-2xl font-serif pb-10">
            Who we are
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-14 px-8 md:px-16 mx-4 md:mx-20">
            <div className="flex justify-center items-center">
              <Image
                src={"/logo.jpg"}
                alt="Logo"
                width={350}
                height={350}
                className="w-full max-w-xs"
              />
            </div>
            <div className="text-emerald-900 text-center md:text-left font-bold text-2xl">
              Our Vision
              <p className="text-wrap text-black font-normal text-base mt-4">
                To be a global leader in connecting markets by delivering
                unparalleled value, quality, and innovation in every product we
                import and export. We aspire to bridge international borders,
                empowering businesses and consumers worldwide through
                sustainable practices, cutting-edge logistics, and a commitment
                to excellence in every transaction.
              </p>
            </div>
            <div className="text-emerald-900 text-center md:text-left font-bold text-2xl">
              Our Mission
              <p className="text-wrap text-black font-normal text-base mt-4">
                Our mission is to facilitate seamless global trade by providing
                reliable, efficient, and customized import and export solutions.
                We are dedicated to building strong partnerships, ensuring the
                highest standards of quality and service, and contributing to
                the success of our clients by delivering goods that meet their
                exact needs across international markets. Through integrity,
                innovation, and a customer-centric approach, we strive to create
                value and foster long-term growth for all stakeholders.
              </p>
            </div>
          </div>
          <div className="text-emerald-900 text-center font-bold text-2xl mt-16">
            Our Story
            <p className="text-wrap text-black px-4 md:px-28 text-left text-base font-normal mt-4 first-letter:text-7xl first-letter:mr-3 first-letter:float-left first-letter:text-emerald-900">
              At YM Trading, our journey began with a simple yet powerful
              vision: to connect businesses and markets across the globe.
              Founded in 1992, our company was born out of a passion for
              international trade and a deep understanding of the challenges and
              opportunities that come with it. From the outset, we recognized
              the growing demand for a reliable partner in the import-export
              industry—one that could navigate the complexities of global trade
              while maintaining a strong commitment to quality and customer
              satisfaction. With this in mind, we set out to build a company
              that not only meets but exceeds the expectations of our clients.
              Over the years, YM Trading has grown from a small operation into a
              dynamic global enterprise. Our success is built on the foundation
              of strong relationships with suppliers, manufacturers, and clients
              worldwide. We take pride in our ability to source and deliver a
              diverse range of products, including machinery, cars, stationery
              materials, and car spare parts, ensuring that each transaction is
              handled with the utmost care and precision. Our story is one of
              continuous growth and adaptation. As the global market evolves, so
              do we. We have embraced the latest technologies and best practices
              to streamline our processes, enhance efficiency, and reduce our
              environmental footprint. But at our core, our values remain
              unchanged: integrity, excellence, and a relentless focus on
              customer satisfaction. Today, YM Trading is more than just an
              import-export company; we are a trusted partner to businesses
              around the world. Our team of dedicated professionals works
              tirelessly to ensure that every shipment is delivered on time,
              every product meets the highest standards, and every client
              receives the personalized service they deserve. As we look to the
              future, we remain committed to our founding principles and to the
              continued success of our clients. Together, we are building a
              world where borders are no longer barriers, and where the flow of
              goods and ideas knows no limits. Join us on this exciting journey,
              and let’s create a prosperous future together.
            </p>
          </div>

          <div className="text-emerald-900 text-center font-bold text-2xl mt-16">
            Our Goal
            <p className="text-wrap text-black px-4 md:px-28 text-left text-base font-normal mt-4">
              At YM Trading, our goal is to be the premier partner in global
              trade, facilitating seamless connections between businesses and
              markets around the world. We strive to:
              <ol className="list-decimal mx-6 md:mx-14 mt-4">
                <li>
                  Deliver Excellence: Ensure that every product we import and
                  export meets the highest standards of quality and reliability.
                  We aim to exceed customer expectations by providing
                  exceptional service and maintaining rigorous quality control
                  processes.
                </li>
                <li>
                  Foster Long-Term Partnerships: Build and nurture lasting
                  relationships with our clients, suppliers, and partners. We
                  believe in collaboration and mutual growth, working together
                  to achieve shared success.
                </li>
                <li>
                  Enhance Global Connectivity: Bridge the gap between
                  international markets by providing efficient, cost-effective,
                  and timely logistics solutions. We aim to simplify the
                  complexities of global trade, making it accessible and
                  profitable for businesses of all sizes.
                </li>
                <li>
                  Promote Sustainability: Operate with a commitment to
                  environmental responsibility. We strive to minimize our carbon
                  footprint and support sustainable practices throughout our
                  supply chain, ensuring a positive impact on the communities
                  and ecosystems we touch.
                </li>
                <li>
                  Innovate Continuously: Embrace innovation and adapt to the
                  ever-changing global landscape. We are committed to staying
                  ahead of industry trends, leveraging technology, and exploring
                  new opportunities to better serve our clients.
                </li>
                <li>
                  Empower Our Clients: Support the growth and success of our
                  clients by offering customized solutions tailored to their
                  unique needs. We are dedicated to understanding their goals
                  and helping them navigate the complexities of international
                  trade with confidence.
                </li>
              </ol>
              Our ultimate goal is to be recognized as a leader in the
              import-export industry, known for our integrity, expertise, and
              unwavering dedication to our clients success. We are driven by a
              passion for global trade and a commitment to making a positive
              impact on the world.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
