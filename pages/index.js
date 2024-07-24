import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useRef } from "react";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Create refs for the sections
  const portfolioRef = useRef(null);

  // Function to handle scrolling
  const scrollToPortfolio = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Prem Swaroop</title>
        <meta name="description" content="Portfolio of Prem Swaroop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Prem Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <button
                  onClick={scrollToPortfolio}
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                >
                  Resume
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Prem Swaroop
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              An electronics student with a passion for web development. #internet of things #web
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://www.linkedin.com/in/prem-swaroop-675a4b22a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-900 transition duration-300"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.youtube.com/@premswaroop3813"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-800 transition duration-300"
              >
                <AiFillYoutube />
              </a>
              <a
                href="https://www.instagram.com/prem_pochiraju/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-700 transition duration-300"
              >
                <AiFillInstagram />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Hi, I’m Prem, an <span className="text-teal-500">electronics</span> student
              with a passion for web development. While my academic journey revolves around electronics, I find immense joy in creating and designing
              <span className="text-teal-500">websites</span> during my free time. This blend of hardware and software skills allows 
              me to bring a unique perspective to my projects.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer a wide range of services, including brand design,
              programming, and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Electronics</h3>
              <p className="py-2">Creating circuits suited for your needs</p>
              <h4 className="py-4 text-teal-600">Tech I work with</h4>
              <p className="text-gray-800 py-1">Circuit Design</p>
              <p className="text-gray-800 py-1">Embedded Systems</p>
              <p className="text-gray-800 py-1">PCB Layout</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Software</h3>
              <p className="py-2">Want to code something with me?</p>
              <h4 className="py-4 text-teal-600">Tech I work with</h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Web Dev</p>
              <p className="text-gray-800 py-1">Data Analysis</p>
            </div>
          </div>
        </section>
        <section ref={portfolioRef} className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Hey there! I’m Prem Swaroop, a master’s student in electronics 
              who’s totally into web development and design. 
              When I’m not buried in circuits and microcontrollers, 
              I’m crafting sleek websites and cool interfaces. 
              I love blending my techie side with creative flair 
              to build awesome projects that bring hardware and 
              software together. Let’s make something epic!
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Let me show you some of my work.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
