import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react"; // 🔹 Added Close icon (X)
import { FaFacebookF, FaTimes, FaLinkedinIn, FaDribbble } from "react-icons/fa";

const App = () => {
  const [animate, setAnimate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [reset, setReset] = useState(false);
  const [email, setEmail] = useState("");
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState(null);
  // 🔹 Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);
  const handleSend = () => {
    if (email.trim() === "") {
      alert("Please enter your email first!");
      return;
    }
    const handleHover = (key) => {
      setAnimate(key);
      setTimeout(() => setAnimate(null), 1000); // 1s ke baad reset
    };

    localStorage.setItem("userEmail", email);
    alert("✅ Email saved locally!");
    setEmail("");
  };
  const texts = [
    "I am a passionate full-stack developer.",
    "I love building responsive web apps.",
    "React and TailwindCSS are my favorite tools.",
    "I enjoy solving complex problems.",
    "Always learning new web technologies.",
    "Coding is my creative outlet.",
  ];
  const btns = [
    {
      btn: "Client satisfaction rate",
      id: "98%",
      p: "Delivering measurable financial impact.",
    },
    {
      btn: "Business transformed",
      id: "99+",
      p: "Helping companies grow, perform better.",
    },
    {
      btn: "Experience and Expertise",
      id: "14+",
      p: "Trusted and recommended by clients.",
    },
  ];

  const linkspt = [
    {
      p: "Branding",
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/688b9e09d32f9f878b9f63bd_Right%20Arrow.svg",
    },
    {
      p: "Web Development",
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/688b9e09d32f9f878b9f63bd_Right%20Arrow.svg",
    },
    {
      p: "Web Design",
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/688b9e09d32f9f878b9f63bd_Right%20Arrow.svg",
    },
    {
      p: "Marketing",
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/688b9e09d32f9f878b9f63bd_Right%20Arrow.svg",
    },
  ];
  const caseStudies = [
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a876ae79392bd4aef404c1_C-01-p-500.webp",
      title: "Smarter Flight Booking UX",
      description:
        "Led design for SaaS dashboards, landing pages, and mobile apps",
      challenge: "Led design for SaaS dashboards, landing pages, mobile apps",
      solution: "Led design for SaaS dashboards, landing pages, mobile apps",
      stats: [
        { percent: "60%", text: "Increase subscriber" },
        { percent: "40%", text: "Grow new user to Contact Us" },
      ],
    },
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a876b77104fdfdaaba3e82_C-02-p-500.webp",
      title: "Driving Digital Growth",
      description: "Driving Digital Growth leverages technology, innovation.",
      challenge: "Led design for SaaS dashboards, landing pages, mobile apps",
      solution: "Led design for SaaS dashboards, landing pages, mobile apps",
      stats: [
        { percent: "60%", text: "Increase subscriber" },
        { percent: "40%", text: "Grow new user to Contest Us" },
      ],
    },
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a876b7307554a4498a1040_C-03-p-500.webp",
      title: "Designing Future Success",
      description:
        "Led design for SaaS dashboards, landing pages, and mobile apps",
      challenge: "Led design for SaaS dashboards, landing pages, mobile apps",
      solution: "Led design for SaaS dashboards, landing pages, mobile apps.",
      stats: [
        { percent: "60%", text: "Increase subscriber" },
        { percent: "40%", text: "Grow new user to Contest Us" },
      ],
    },
  ];
  const products = [
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a216d4d57a91ab2e4173fe_Feture%2001-p-500.webp",
      title: "Horizon Tec Product",
      description:
        "Crafting visually stunning, user-centered websites tailored",
      arrow:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68851c2d5632001a61927f54_Right%20arrow%20servise.svg",
    },
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a216d2d7ac585cdf07fff1_Feture%2002-p-500.webp",
      title: "Creative Identity",
      description: "Built modern visuals enhancing brand enhancement",
      arrow:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68851c2d5632001a61927f54_Right%20arrow%20servise.svg",
    },
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a216d4d39a1a3d6c9ac6b0_Feture%2003-p-500.webp",
      title: "Commerce Website",
      description: "Designed seamless shopping experience online",
      arrow:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68851c2d5632001a61927f54_Right%20arrow%20servise.svg",
    },
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a216d4c5eac90a7ee31923_Feture%2004-p-500.webp",
      title: "AI Startup Landing",
      description: "Created engaging landing showcasing AI beautiful",
      arrow:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68851c2d5632001a61927f54_Right%20arrow%20servise.svg",
    },
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a216d27fc9a0ca071aff59_Feture%2005-p-500.webp",
      title: "Marketing Campain",
      description: "Delivered strategies driving measurable increment",
      arrow:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68851c2d5632001a61927f54_Right%20arrow%20servise.svg",
    },
    {
      src: "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a216d2d9e7cdc52d40aa5c_Feture%2006-p-500.webp",
      title: "Mobile App UI",
      description: "Designed intuitive interface for usability and UI",
      arrow:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68851c2d5632001a61927f54_Right%20arrow%20servise.svg",
    },
  ];
  const awards = [
    {
      companyImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d9747_Holo%20Tech%20Ltd.webp",
      companyName: "Pixel Nova",
      role: "Senior UI/UX Designer",
      awardImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d9750_Award%2001.webp",
      year: "2024 | 2025",
      awardText: "2x Award",
    },
    {
      companyImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d9741_Gold%20Winner.webp",
      companyName: "Designora",
      role: "Senior UI/UX Designer",
      awardImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d9753_Award%2002.webp",
      year: "2022 | 2023",
      awardText: "Award",
    },
    {
      companyImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d9744_Genuine%20Nova%20Flow.webp",
      companyName: "VibeForge",
      role: "Senior UI/UX Designer",
      awardImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d974d_Award%2003.webp",
      year: "2020 | 2021",
      awardText: "Award",
    },
    {
      companyImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d9744_Genuine%20Nova%20Flow.webp",
      companyName: "NovaCraft",
      role: "Senior UI/UX Designer",
      awardImg:
        "https://cdn.prod.website-files.com/687093791857daf2b2090c68/68935632d5e6ef16ea4d974a_Award%2004.webp",
      year: "2019 | 2019",
      awardText: "Award",
    },
  ];
  const designServices = [
    {
      title: "UI / UX Design",
      description:
        "Focused on creating intuitive, user-centered designs backed by research, testing, and strong visual logic.",
      skills: ["Wireframing", "Prototyping", "Usability", "Interaction"],
    },
    {
      title: "Graphic Design",
      description:
        "Designing visuals that communicate clearly and align with brand strategy, from logos to layouts.",
      skills: ["Typography", "Branding", "Illustration", "Layout"],
    },
    {
      title: "Sketch Skills",
      description:
        "Focused on creating intuitive, user-centered designs backed by research, testing, and strong visual logic.",
      skills: ["Symbols", "Artboards", "Prototyping", "Components"],
    },
    {
      title: "Front-End Dev",
      description:
        "Focused on creating intuitive, user-centered designs backed by research, testing, and strong visual logic.",
      skills: ["Webflow", "HTML", "CSS", "JavaScript"],
    },
  ];
  // Sidebar links
  const links = [
    { svg: "/public/about.svg", btn: "About Me", id: "about" },
    { svg: "/public/service.svg", btn: "My Service", id: "service" },
    { svg: "/public/choose.svg", btn: "Why Choose", id: "choose" },
    { svg: "/public/study.svg", btn: "Case Study", id: "case" },
    { svg: "/public/projects.svg", btn: "Feature Project", id: "projects" },
    { svg: "/public/award.svg", btn: "Award", id: "award" },
    { svg: "/public/design.svg", btn: "Design Skill", id: "design" },
    { svg: "/public/test.svg", btn: "Testimonial", id: "testimonial" },
    { svg: "/public/contact.svg", btn: "Connect Me", id: "connect" },
  ];
  const toggleSection = (id) => {
    if (active === id) {
      setActive(""); // same link clicked → reset to all
    } else {
      setActive(id);
    }
  };
  const infiniteText = texts.join(" ⚡ ");
  useEffect(() => {
    if (animate) {
      // 2s ke baad reset trigger
      const timer = setTimeout(() => {
        setReset(true); // reverse animation
        setAnimate(false);
      }, 500);

      // half-second baad reset state clear
      const resetTimer = setTimeout(() => setReset(false), 500);

      return () => {
        clearTimeout(timer);
        clearTimeout(resetTimer);
      };
    }
  }, [animate]);
  const triggerAnimation = () => setAnimate(true);
  // Function to trigger animation
  return (
    <>
      <div className="flex min-h-screen lg:overflow-hidden bg-gray-100  gap-3  lg:container lg:mx-auto w-full relative ">
        {/* left side */}

        {/* 🔹 Sidebar */}
        <aside
          ref={sidebarRef}
          className={`fixed top-0 left-0 h-screen lg:h-full overflow-y-auto w-64 bg-gray-200 shadow-md p-4 rounded-r-xl transform z-200 transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:rounded-xl lg:mt-6`}
        >
          {/* Profile Section */}
          <div className="relative text-center pb-5 h-45">
            {/* 🔹 Background Image with Shadow */}
            <div
              className="rounded-md h-32 w-full absolute top-0 left-0 right-0 shadow-lg bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage:
                  "url('https://cdn.prod.website-files.com/687093791857daf2b2090c68/6883253b6b5903135e4c2493_Nav%20top%20layer.webp')",
              }}
            />

            {/* 🔹 Profile Image with Deep Shadow */}
            <div className="relative flex flex-col items-center">
              <img
                src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a4cd42f93a9ab64dc78c98_Resume%20Nova%20Nav%20Image.webp"
                alt="Profile"
                className="w-24 h-24 rounded-full  border-white shadow-2xl absolute top-20 transition-transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>
          <h2 className="font-serif font-medium pt-3 text-lg text-black text-center">
            Ethan Riley
          </h2>
          {/* 🔹 Social Icons Box */}
          <div className="flex items-center justify-center gap-4 mt-4 bg-gray-800 rounded-lg p-3 shadow-md">
            <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition">
              <FaFacebookF size={14} />
            </div>
            <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition">
              <FaTimes size={14} />
            </div>
            <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition">
              <FaLinkedinIn size={14} />
            </div>
            <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition">
              <FaDribbble size={14} />
            </div>
          </div>
          {/* Nav Links */}
          {links.map((link) => (
            <div
              key={link.id}
              onClick={() => toggleSection(link.id)}
              className="flex bg-white items-center gap-2 p-3 mb-2 rounded-lg cursor-pointer mt-3 transition"
            >
              <img src={link.svg} alt={link.btn} className="w-5 h-5" />
              <span className="text-gray-800 dark:text-white">{link.btn}</span>
            </div>
          ))}

          <div className="bg-white p-3 shadow-lg rounded-xl flex-col flex gap-3 mt-5">
            <div class="text-16px black px-3">Top Rate on:</div>
            <div className="flex p-3 gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 20 20"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
                role="img"
              >
                <g clip-path="url(#clip0_424_1045)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 -0.5C7.7614 -0.5 10 1.73857 10 4.5V-0.5H15C17.7614 -0.5 20 1.73857 20 4.5C20 7.2614 17.7614 9.5 15 9.5C17.7614 9.5 20 11.7386 20 14.5C20 15.8712 19.4481 17.1134 18.5543 18.0167L18.5355 18.0355L18.5189 18.052C17.6154 18.9471 16.3723 19.5 15 19.5C13.637 19.5 12.3015 18.9546 11.4995 18.0702C11.4878 18.0588 11.4761 18.0471 11.4644 18.0355C11.4535 18.0246 11.4426 18.0136 11.4318 18.0026C10.5462 17.1005 10 15.864 10 14.5C10 17.2614 7.7614 19.5 5 19.5C2.23857 19.5 0 17.2614 0 14.5V9.5H5C2.23857 9.5 0 7.2614 0 4.5C0 1.73857 2.23857 -0.5 5 -0.5ZM9 4.5C9 6.70915 7.20915 8.5 5 8.5V0.5C7.20915 0.5 9 2.29086 9 4.5ZM19 14.5C19 12.2908 17.2092 10.5 15 10.5C12.7908 10.5 11 12.2908 11 14.5H19ZM1 10.5V14.5C1 16.7092 2.79086 18.5 5 18.5C7.20915 18.5 9 16.7092 9 14.5V10.5H1ZM11 8.5V0.5H15C17.2092 0.5 19 2.29086 19 4.5C19 6.70915 17.2092 8.5 15 8.5H11Z"
                    fill="#525252"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_424_1045">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="30"
                height="30"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_424_1046)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7779 5.34265C11.9556 4.79325 10.9889 4.5 10 4.5V-0.5C11.9778 -0.5 13.9112 0.08649 15.5557 1.1853C17.2002 2.28411 18.4819 3.84591 19.2388 5.67315C19.9956 7.5004 20.1937 9.5111 19.8078 11.4509C19.422 13.3907 18.4696 15.1726 17.0711 16.5711C15.6726 17.9696 13.8907 18.922 11.9509 19.3078C10.0111 19.6937 8.0004 19.4956 6.17315 18.7388C4.34591 17.9819 2.78411 16.7002 1.6853 15.0557C0.58649 13.4112 0 11.4778 0 9.5H5C5 10.4889 5.29325 11.4556 5.84265 12.2779C6.39205 13.1001 7.17295 13.7309 8.0866 14.1194C9.0002 14.4979 10.0055 14.5969 10.9754 14.4039C11.9453 14.211 12.8363 13.7348 13.5356 13.0356C14.2348 12.3363 14.711 11.4453 14.9039 10.4754C15.0969 9.50555 14.9979 8.5002 14.6194 7.5866C14.2409 6.67295 13.6001 5.89205 12.7779 5.34265Z"
                    fill="#525252"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 -0.499998C5 0.156612 4.87067 0.806792 4.6194 1.41342C4.36812 2.02005 3.99983 2.57124 3.53553 3.03554C3.07124 3.49983 2.52005 3.86813 1.91342 4.1194C1.30679 4.37067 0.656607 4.5 2.18555e-07 4.5L0 9.5C1.31322 9.5 2.61358 9.24135 3.82684 8.7388C5.0401 8.23625 6.1425 7.49965 7.07105 6.57105C7.99965 5.6425 8.73625 4.5401 9.2388 3.32684C9.74135 2.11358 10 0.813217 10 -0.5L5 -0.499998Z"
                    fill="#525252"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_424_1046">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="30"
                height="30"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_424_1047)">
                  <path
                    d="M19.9725 10.25H16.4002C13.2798 10.25 10.7502 12.7796 10.7502 15.9V19.4723C15.6752 19.1071 19.6073 15.175 19.9725 10.25Z"
                    fill="#525252"
                  ></path>
                  <path
                    d="M9.25015 19.4723V15.9C9.25015 12.7796 6.72055 10.25 3.60013 10.25H0.027832C0.392999 15.175 4.32518 19.1071 9.25015 19.4723Z"
                    fill="#525252"
                  ></path>
                  <path
                    d="M19.9725 8.75014C19.6073 3.82518 15.6752 -0.107001 10.7502 -0.472168V3.10013C10.7502 6.22054 13.2798 8.75014 16.4002 8.75014H19.9725Z"
                    fill="#525252"
                  ></path>
                  <path
                    d="M9.25015 -0.472168C4.32518 -0.107001 0.392999 3.82518 0.027832 8.75014H3.60013C6.72055 8.75014 9.25015 6.22054 9.25015 3.10013V-0.472168Z"
                    fill="#525252"
                  ></path>
                  <path
                    d="M6.7915 9.49967C8.17775 8.80702 9.3075 7.67727 10.0001 6.29102C10.6928 7.67727 11.8225 8.80702 13.2088 9.49967C11.8225 10.1923 10.6928 11.322 10.0001 12.7083C9.3075 11.322 8.17775 10.1923 6.7915 9.49967Z"
                    fill="#525252"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_424_1047">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </aside>

        {/* Right Side */}
        <main className="lg:mt-5   rounded-xl  bg-white w-full lg:overflow-y-auto lg:h-screen">
          {/* 🔹 Hamburger button */}
          <div className="flex items-center justify-between sticky top-0 bg-white z-400  w-full px-4 p-1 shadow-sm lg:hidden">
            {/* 🔹 Left side: Logo + Text */}
            <div className="flex items-center gap-3 container mx-auto">
              <img
                src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/6898d444c224377bdb993143_Tab%20Logo.webp"
                alt="logo"
                width={100}
              />
            </div>

            {/* 🔹 Right side: Hamburger / Close Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 text-white p-2 rounded-md transition duration-300 lg:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="sideright flex items-center justify-around gap-3 mb-15   ">
            <div className="side p-4">
              <div className=" hidden lg:block">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1126 9.23891L15.4645 10.5506C17.3978 11.3071 18.3645 11.6853 18.3325 12.2853C18.3004 12.8853 17.2916 13.1605 15.2739 13.7107C14.6732 13.8746 14.3728 13.9565 14.1646 14.1648C13.9563 14.3731 13.8743 14.6734 13.7105 15.2742C13.1603 17.2918 12.8851 18.3007 12.2851 18.3327C11.6851 18.3647 11.3068 17.3981 10.5503 15.4647L9.23867 12.1128C8.44659 10.0887 8.05059 9.07666 8.5635 8.56375C9.07642 8.05083 10.0884 8.44683 12.1126 9.23891Z"
                    stroke="black"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M9.04808 5.90258C9.22625 6.19824 9.61033 6.2935 9.906 6.11535C10.2017 5.9372 10.2969 5.5531 10.1187 5.25745L9.04808 5.90258ZM5.2577 10.1185C5.55335 10.2967 5.93744 10.2014 6.11559 9.90575C6.29374 9.61009 6.19848 9.226 5.90282 9.04784L5.2577 10.1185ZM4.79175 7.08317C4.79175 5.81752 5.81777 4.7915 7.08341 4.7915V3.5415C5.12742 3.5415 3.54175 5.12716 3.54175 7.08317H4.79175ZM7.08341 4.7915C7.91628 4.7915 8.64608 5.23544 9.04808 5.90258L10.1187 5.25745C9.5 4.23056 8.3725 3.5415 7.08341 3.5415V4.7915ZM5.90282 9.04784C5.23568 8.64584 4.79175 7.91605 4.79175 7.08317H3.54175C3.54175 8.37225 4.23081 9.49975 5.2577 10.1185L5.90282 9.04784Z"
                    fill="black"
                  ></path>
                  <path
                    d="M11.8763 6.77899C11.8982 7.12347 12.1952 7.38497 12.5397 7.36306C12.8842 7.34115 13.1457 7.04414 13.1238 6.69966L11.8763 6.77899ZM6.70106 13.1236C7.04556 13.1454 7.34252 12.8838 7.36437 12.5394C7.38621 12.1949 7.12465 11.8979 6.78016 11.8761L6.70106 13.1236ZM2.29175 7.08868C2.29175 4.43928 4.43955 2.2915 7.08895 2.2915V1.0415C3.74921 1.0415 1.04175 3.74891 1.04175 7.08868H2.29175ZM7.08895 2.2915C9.63425 2.2915 11.7171 4.27422 11.8763 6.77899L13.1238 6.69966C12.9229 3.54088 10.2981 1.0415 7.08895 1.0415V2.2915ZM6.78016 11.8761C4.27496 11.7173 2.29175 9.63434 2.29175 7.08868H1.04175C1.04175 10.2982 3.54176 12.9233 6.70106 13.1236L6.78016 11.8761Z"
                    fill="black"
                  ></path>
                </svg>
                <span className="px-10 text-[#1e1e1e]">Hello Folk</span>
              </div>
              <h2 className="text-4xl p-3 font-semibold mt-2">
                Freelance Web Designer from Los Angeles
              </h2>
              <div className="flex items-center text-center mt-3 w-full  lg:hidden ">
                <div className=" w-full p-3">
                  <img
                    src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a5f806a9d2add52beaf575_Resume%20Nova%20Hero%20Image-p-500.webp"
                    alt="boy pic"
                    width={1000}
                    height={100}
                  />
                  <div className="bg-[#323232] flex flex-col gap-2 items-start px-4 p-2 rounded-b-xl">
                    <img
                      src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/689b7d88772a73afb1940c69_Hero%20ratings.webp"
                      alt="pic"
                      width={120}
                    />
                    <p className="text-[#c8c8c8] text-md font-medium ">
                      Rated by 5K+ global clients and 20 companies
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center ">
                I specialize in delivering designs that are not only visually
                striking but also impactful.
              </p>
              <div className="flex md:gap-6  gap-2 justify-center mt-6 w-full items-center text-center  md:flex-row ">
                {/* 🔹 Button 1 */}
                <button
                  onMouseEnter={() => setHovered("talk")}
                  onMouseLeave={() => setHovered(null)}
                  className="relative flex items-center gap-3 md:px-8 px-2 h-12 text-center cursor-pointer bg-black text-white font-semibold rounded-xl overflow-hidden transition-all duration-500"
                >
                  <span
                    className={`transition-transform duration-700 ${
                      hovered === "talk" ? "-translate-y-12" : "translate-y-0"
                    }`}
                  >
                    Let’s talk
                  </span>
                  <span
                    className={`transition-transform text-4xl duration-700 ${
                      hovered === "talk" ? "translate-x-33" : "-translate-x-0"
                    }`}
                  >
                    →
                  </span>
                </button>

                {/* 🔹 Button 2 */}
                <button
                  onMouseEnter={() => setHovered("cv")}
                  onMouseLeave={() => setHovered(null)}
                  className="relative flex items-center gap-3 md:px-8 px-2 h-12 bg-white text-black font-semibold border border-black rounded-xl cursor-pointer overflow-hidden transition-all duration-500"
                >
                  <span
                    className={`transition-transform duration-700 ${
                      hovered === "cv" ? "-translate-y-12" : "translate-y-0"
                    }`}
                  >
                    Download CV
                  </span>
                  <span
                    className={`transition-transform text-4xl duration-700 ${
                      hovered === "cv" ? "translate-x-33" : "-translate-x-0"
                    }`}
                  >
                    →
                  </span>
                </button>
              </div>
              {/* images */}
              <div className="flex lg:flex-col flex-col md:flex-row  lg:justify-start lg:items-start items-center justify-center gap-6">
                <div className="images mt-12 flex justify-center items-center lg:justify-start lg:items-start h-25">
                  <img
                    src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/688344e499f7cdd68005ff5b_Satisfied%20client%2001.webp"
                    alt="pic boys"
                    width={50}
                    height={50}
                    className="rounded-full cursor-pointer   transition-transform duration-300 hover:scale-110"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/688344e499f7cdd68005ff59_Satisfied%20client%2002.webp"
                    alt="pic boys"
                    width={50}
                    height={50}
                    className="rounded-full cursor-pointer z-1 left-10 transition-transform duration-300 hover:scale-110"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/688344e499f7cdd68005ff55_Satisfied%20client%2003.webp"
                    alt="pic boys"
                    width={50}
                    height={50}
                    className="rounded-full cursor-pointer  z-2 left-21 transition-transform duration-300 hover:scale-110"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/6883c1c5aedff03f6da19d25_Ellipse%2010.webp"
                    alt="pic boys"
                    width={50}
                    height={50}
                    className="rounded-full cursor-pointer  z-2 left-31 transition-transform duration-300 hover:scale-110"
                  />
                  <div className="text-[16px] bg-black text-white rounded-full cursor-pointer w-13 h-13  left-40 z-5 flex items-center justify-center">
                    98%
                  </div>
                </div>
                <div className="flex flex-col lg:items-start justify-start">
                  <div className=" font-medium pb-1.5">
                    Loved by founders globally
                  </div>
                  <p>5K Clients Word-Wide</p>
                </div>
              </div>
            </div>
            <div className="flex hidden lg:block">
              <div className="">
                <img
                  src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a5f806a9d2add52beaf575_Resume%20Nova%20Hero%20Image-p-500.webp"
                  alt="boy pic"
                />
                <div className="bg-[#323232] flex flex-col gap-2 items-start px-4 p-2 rounded-b-xl">
                  <img
                    src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/689b7d88772a73afb1940c69_Hero%20ratings.webp"
                    alt="pic"
                    width={120}
                  />
                  <p className="text-[#c8c8c8] text-md font-medium ">
                    Rated by 5K+ global clients and 20 companies
                  </p>
                </div>
              </div>
            </div>
          </div>
          <marquee behavior="alternate" direction="left" scrollamount="6">
            ✨ I am a passionate full-stack developer 💻 | I love building
            responsive web apps 🌐 | React and TailwindCSS are my favorite tools
            ⚛️ | I enjoy solving complex problems 💡 | Always learning new web
            technologies 🚀 | Coding is my creative outlet ❤️
          </marquee>
          {/* About me */}
          <div className="bg-[#323232] rounded-xl text-[#fff] p-8 mt-15">
            <h3 className=" uppercase font-bold">- About Me</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <p className="font-medium text-md pt-2">
                I’m Ethan Riley, your creative partner in design. For me, design
                is all about creating experiences that really connect with
                people. It’s not just looking good
              </p>
              <img
                src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a5f806a9d2add52beaf575_Resume%20Nova%20Hero%20Image-p-500.webp"
                alt="boys"
                width={150}
                className="rounded-xl w-full md:w-50"
              />
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row justify-around items-start gap-4 mt-10 flex-wrap">
              {btns.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start text-start  text-white px-6 py-5 rounded-2xl hover:scale-105 transition-transform duration-300 max-w-xs"
                >
                  {/* 🔹 Button Title */}
                  <button className="text-lg bg-[#4D4D4D] font-semibold mb-2 py-3 px-4 rounded-xl">
                    {item.btn}
                  </button>

                  {/* 🔹 Description */}
                  <p className="text-sm mt-1">
                    <span className="text-2xl p-2">{item.id}</span>
                    {item.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* SERVICE */}
          <div className="flex flex-col gap-4 mt-5 p-8">
            <h3 className=" uppercase font-bold">- MY SERVICE</h3>
            <h2 className="font-semibold text-4xl">
              Professional Service Solutions
            </h2>
            <div className="flex gap-2 justify-around mt-6 w-full text-center items-center  md:flex-row">
              {/* 🔹 Button 1 */}
              <button
                onMouseEnter={() => setHovered("talk")}
                onMouseLeave={() => setHovered(null)}
                className="relative flex items-center gap-3 md:px-8 px-3 h-12 text-center cursor-pointer bg-black text-white font-semibold rounded-xl overflow-hidden transition-all duration-500"
              >
                <span
                  className={`transition-transform duration-700 ${
                    hovered === "talk" ? "-translate-y-12" : "translate-y-0"
                  }`}
                >
                  Hire Me
                </span>
                <span
                  className={`transition-transform text-4xl duration-700 ${
                    hovered === "talk" ? "translate-x-33" : "-translate-x-0"
                  }`}
                >
                  →
                </span>
              </button>

              {/* 🔹 Button 2 */}
              <button
                onMouseEnter={() => setHovered("cv")}
                onMouseLeave={() => setHovered(null)}
                className="relative flex items-center gap-3 md:px-8 px-3 h-12 bg-white text-black font-semibold border border-black rounded-xl cursor-pointer overflow-hidden transition-all duration-500"
              >
                <span
                  className={`transition-transform duration-700 ${
                    hovered === "cv" ? "-translate-y-12" : "translate-y-0"
                  }`}
                >
                  Watch Video
                </span>
                <span
                  className={`transition-transform text-4xl duration-700 ${
                    hovered === "cv" ? "translate-x-33" : "-translate-x-0"
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99984 18.3333C14.6022 18.3333 18.3332 14.6023 18.3332 9.99996C18.3332 5.39759 14.6022 1.66663 9.99984 1.66663C5.39746 1.66663 1.6665 5.39759 1.6665 9.99996C1.6665 14.6023 5.39746 18.3333 9.99984 18.3333Z"
                      stroke="black"
                      stroke-width="1.25"
                    ></path>
                    <path
                      d="M7.9165 9.33321V10.6669C7.9165 11.933 7.9165 12.566 8.2963 12.8219C8.67609 13.0777 9.1955 12.7946 10.2344 12.2285L11.4579 11.5615C12.7081 10.8802 13.3332 10.5395 13.3332 10C13.3332 9.46054 12.7081 9.11987 11.4579 8.43854L10.2344 7.77166C9.1955 7.20546 8.67609 6.92236 8.2963 7.17822C7.9165 7.43409 7.9165 8.06712 7.9165 9.33321Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="flex items-center justify-around gap-3 flex-col lg:flex-row p-3 w-full">
              <div className="flex flex-col gap-5  w-full ">
                {linkspt.map((linkspt, i) => (
                  <div className="flex items-center cursor-pointer justify-between gap-3 w-full bg-[#F5F5F5] rounded-xl px-8 py-3">
                    <a href="#Branding" className=" font-medium text-xl">
                      {linkspt.p}
                    </a>
                    <a href="#">
                      <img
                        src={linkspt.src}
                        width={40}
                        alt="arrow"
                        className="rounded-full border p-2"
                      />
                    </a>
                  </div>
                ))}
              </div>
              <img
                src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/6892294bb1f6b631388be253_RW%2004-p-500.webp"
                alt="product pic"
                className="rounded-xl w-100"
              />
            </div>
          </div>
          {/*Why Choose */}
          <div className="flex p-8 gap-4 flex-col items-start justify-center mt-5">
            <h2 className="font-semibold ">- Why Choose</h2>
            <h1 className="font-semibold text-4xl">Best Reasons Choosing</h1>
            <p className="text-[#525252]">
              Blending creativity with strategy, our design skills deliver
              impactful, user-focused solutions across digital platforms.
            </p>
            <div className="flex flex-col md:flex-row flex-wrap  gap-5">
              <div className="bg-[#ECEFF5] rounded-xl p-3 flex flex-col items-start justify-between h-60 gap-4 border-[0.5px]">
                <img
                  src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/68976199182e8a4213681d77_Why%20Choose%20Icon%2001.webp"
                  alt="flower"
                  width={50}
                />
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold text-md">Ontime Delivery</h2>
                  <p className="text-[#525252]">
                    Crafting visually stunning, user-centered websites tailored
                    to your brand and business — always delivered on schedule.
                  </p>
                </div>
              </div>
              <div className="bg-[#FFFFFF] rounded-xl p-3 flex flex-col items-start border-[0.5px] justify-between h-70">
                <img
                  src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/689761996b94960b925e09b0_Why%20Choose%20Icon%2002.webp"
                  alt="flower"
                  width={50}
                />
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold text-md">Creative Innovation</h2>
                </div>
              </div>
              <div className="bg-[#FFFFFF] rounded-xl p-3 flex flex-col items-start border-[0.5px] justify-between h-70">
                <img
                  src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/689761996f608c58f69eb3cf_Why%20Choose%20Icon%2003.webp"
                  alt="flower"
                  width={50}
                />
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold text-md">Continue Learning</h2>
                </div>
              </div>
            </div>
          </div>
          {/*CASE STUDY */}
          <div className="flex p-8 gap-4 flex-col items-start justify-center mt-5">
            <h2 className="font-semibold ">- CASE STUDY</h2>
            <h1 className="font-semibold text-4xl">Real Results Showcase</h1>
            <p className="text-[#525252]">
              Delivering standout experiences that are both visually striking
              and user-focused.
            </p>
            <div className="flex flex-col gap-10 p-3">
              {caseStudies.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row items-start gap-8 rounded-2xl bg-[#F3F3F3] p-6 shadow-sm hover:shadow-md transition"
                >
                  {/* Image Section */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full lg:w-1/3 rounded-xl object-cover"
                  />

                  {/* Text Section */}
                  <div className="flex flex-col w-full lg:w-2/3 gap-5">
                    <div>
                      <h1 className="font-semibold text-3xl sm:text-4xl">
                        {item.title}
                      </h1>
                      <p className="text-[#525252] mt-2">{item.description}</p>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="flex flex-col sm:flex-row sm:gap-10 gap-5">
                      <div>
                        <h2 className="font-semibold">- Challenge</h2>
                        <p className="text-[#525252]">{item.challenge}</p>
                      </div>
                      <div>
                        <h2 className="font-semibold">- Solution</h2>
                        <p className="text-[#525252]">{item.solution}</p>
                      </div>
                    </div>

                    {/* Stats Section */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      {item.stats.map((stat, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <h2 className="font-semibold border-r-2 pr-3">
                            {stat.percent}
                          </h2>
                          <p className="text-[#525252]">{stat.text}</p>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <button
                      className="relative flex w-55 items-center gap-3 px-4 h-12 mt-4 text-center cursor-pointer bg-black text-white font-semibold rounded-lg overflow-hidden"
                      onMouseEnter={triggerAnimation}
                      onFocus={triggerAnimation}
                    >
                      <span
                        className={`transition-transform ${
                          animate
                            ? "duration-300 -translate-y-12"
                            : reset
                            ? "duration-500 translate-y-0"
                            : "translate-y-0"
                        }`}
                      >
                        View case study
                      </span>
                      <span
                        className={`transition-transform text-4xl ${
                          animate
                            ? "duration-300 translate-x-12"
                            : reset
                            ? "duration-500 translate-x-0"
                            : "translate-x-0"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* FEATURE PROJECT */}
          <div className="flex flex-col gap-4 mt-5 p-8">
            <div className="flex flex-col gap-5 p-4">
              <h2 className="font-semibold ">- FEATURE PROJECT</h2>
              <h1 className="font-semibold text-4xl">Showcase Project Work</h1>
              <p className="text-[#525252]">
                boosting engagement, enhancing user experience, and driving
                measurable growth beyond expectations.
              </p>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 p-6">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-xl bg-[#F8F8F8] hover:bg-[#ECECEC] transition-all duration-300 p-4 cursor-pointer"
                >
                  {/* Product Image */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="rounded-xl w-full object-cover"
                  />

                  {/* Content */}
                  <div className="flex flex-col gap-3 mt-4">
                    <h1 className="font-semibold text-2xl md:text-3xl">
                      {item.title}
                    </h1>
                    <div className="flex items-center justify-around">
                      <p className="text-[#525252] text-sm md:text-base">
                        {item.description}
                      </p>

                      {/* Arrow */}
                      <img
                        src={item.arrow}
                        alt="arrow icon"
                        className="w-8 mt-2 transition-transform duration-300 hover:translate-x-2"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* AWARD */}
          <div className="flex flex-col gap-5 p-8 mt-6">
            <div className="flex flex-col gap-5 p-4">
              <h2 className="font-semibold ">- AWARD</h2>
              <h1 className="font-semibold text-4xl">
                Achievements and Awards
              </h1>
              <p className="text-[#525252]">
                Each award reflects our passion, creativity, and dedication to
                delivering exceptional design solutions that make a lasting
                impact.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-4">
              {awards.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col  sm:flex-row items-start sm:items-start justify-between gap-6 bg-[#F9F9F9] rounded-xl p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex  md:flex-row  items-start sm:items-start gap-2 text-start sm:text-left">
                    {/* Company Logo */}
                    <img
                      src={item.companyImg}
                      alt={item.companyName}
                      width={100}
                      className="rounded-xl object-cover  w-20"
                    />

                    {/* Company Info */}
                    <div className="flex flex-col gap-2">
                      <h1 className="font-semibold text-xl sm:text-2xl ">
                        {item.companyName}
                      </h1>
                      <p className="text-[#525252] text-sm">{item.role}</p>
                    </div>
                  </div>
                  <div className="flex  md:flex-row items-center md:justify-around justify-center  md:gap-11 gap-6">
                    {/* Award Image */}
                    <img
                      src={item.awardImg}
                      alt="Award"
                      width={140}
                      className="rounded-xl object-cover  w-30"
                    />

                    {/* Year Info */}
                    <div className="flex flex-col items-center justify-center text-center gap-2">
                      <h1 className="font-semibold text-xl md:text-2xl ">
                        {item.year}
                      </h1>
                      <p className="text-[#525252]">{item.awardText}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>{" "}
          {/* Creative Edge*/}
          <div className="flex flex-col gap-3 mt-5 p-8">
            <div className="flex flex-col gap-5 p-4">
              <h2 className="font-semibold ">- Creative Edge</h2>
              <h1 className="font-semibold text-4xl">
                Creative Talent Showcase
              </h1>
              <p className="text-[#525252]">
                Combining innovation, strategy, and design to craft powerful
                brand experiences that drive real results.
              </p>
            </div>
            <div className="flex flex-col md:flex-row">
              <img
                src="https://cdn.prod.website-files.com/687093791857daf2b2090c68/68a5f2382f8eefd0c1e5778e_Resume%20nova%20Creative%20Edge-p-500.webp"
                alt=""
                width={300}
                className="rounded-xl mr-3"
              />
              <div className="flex flex-col gap-10 p-4">
                {designServices.map((item, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    {/* Title */}
                    <h2 className="font-semibold text-2xl md:text-3xl">
                      {item.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[#525252] text-base md:text-lg">
                      {item.description}
                    </p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-3">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-1 border rounded-full text-sm text-[#333] hover:bg-black hover:text-white transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* TESTIMONIAL */}
          <div className="flex">
            <div className="flex flex-col gap-5 p-8">
              <h2 className="font-semibold ">- TESTIMONIAL</h2>
              <h1 className="font-semibold text-4xl">
                Trusted Client Opinions
              </h1>
              <p className="text-[#525252]">
                Real experiences that reflect the trust, results, and lasting
                relationships we’ve built through great design.
              </p>
            </div>
          </div>
          <div className="bg-[#323232] text-white rounded-3xl p-10 md:p-16 flex flex-col gap-8 shadow-lg">
            {/* Heading */}
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Let’s Work Together
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Collaborating closely to transform ideas into innovative,
                impactful designs that exceed expectations and elevate your
                brand’s presence.
              </p>
            </div>

            {/* Input Field */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-black outline-none border border-gray-400  bg-[#fff]"
              />
              <button
                onClick={handleSend}
                className="px-6 py-3 text-[#fff] bg-[#4D4D4D]  rounded-xl font-medium transition-all duration-300  active:scale-95 cursor-pointer"
              >
                Send
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-10 mt-8 text-gray-300">
              <div className="flex items-center gap-3 cursor-pointer hover:text-white transition">
                <span className="text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                    role="img"
                  >
                    <g clip-path="url(#clip0_156_757)">
                      <path
                        d="M17.7704 2.66647H16.8371V1.73314C16.8371 1.21794 16.4199 0.799805 15.9038 0.799805C15.3876 0.799805 14.9704 1.21794 14.9704 1.73314V2.66647H7.50378V1.73314C7.50378 1.21794 7.08564 0.799805 6.57044 0.799805C6.05524 0.799805 5.63711 1.21794 5.63711 1.73314V2.66647H4.70378C2.13058 2.66647 0.0371094 4.75994 0.0371094 7.33314V18.5331C0.0371094 21.1063 2.13058 23.1998 4.70378 23.1998H11.2371C11.7523 23.1998 12.1704 22.7817 12.1704 22.2665C12.1704 21.7513 11.7523 21.3331 11.2371 21.3331H4.70378C3.16004 21.3331 1.90378 20.0769 1.90378 18.5331V10.1331H20.5704V15.7331C20.5704 16.2483 20.9876 16.6665 21.5038 16.6665C22.0199 16.6665 22.4371 16.2483 22.4371 15.7331V7.33314C22.4371 4.75994 20.3436 2.66647 17.7704 2.66647ZM1.90378 8.26647V7.33314C1.90378 5.7894 3.16004 4.53314 4.70378 4.53314H17.7704C19.3142 4.53314 20.5704 5.7894 20.5704 7.33314V8.26647H1.90378ZM22.1244 20.3727C22.5407 20.789 22.5407 21.4647 22.1244 21.881L21.6372 22.441C21.123 22.9562 20.4454 23.1998 19.7706 23.1998C16.3042 23.1998 11.2371 18.3997 11.2371 14.6663C11.2371 13.9915 11.4807 13.3139 11.9959 12.7997L12.5559 12.3125C12.9722 11.8962 13.6479 11.8962 14.0642 12.3125L15.1916 13.5277C15.6079 13.9439 15.6079 14.6197 15.1916 15.0359L14.235 16.0029C15.0759 18.0973 16.502 19.4655 18.435 20.2029L19.4019 19.2462C19.8182 18.8299 20.4939 18.8299 20.9102 19.2462L22.1254 20.3737L22.1244 20.3727Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_156_757">
                        <rect
                          width="22.4"
                          height="22.4"
                          fill="white"
                          transform="translate(0.0371094 0.799805)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-white">Call Today</p>
                  <p className="text-sm">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-3 cursor-pointer hover:text-white transition">
                <span className="text-xl">
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.2371 3.5998C11.2371 2.05327 12.4906 0.799805 14.0371 0.799805C15.5836 0.799805 16.8371 2.05327 16.8371 3.5998C16.8371 2.05327 18.0906 0.799805 19.6371 0.799805C21.1836 0.799805 22.4371 2.05327 22.4371 3.5998C22.4371 6.0554 19.2722 8.6426 17.7014 9.84194C17.1918 10.2311 16.4824 10.2311 15.9738 9.84194C14.402 8.64354 11.238 6.0554 11.238 3.5998H11.2371ZM21.5038 10.1331C20.9886 10.1331 20.5704 10.5503 20.5704 11.0665V18.5331C20.5704 20.0769 19.3142 21.3331 17.7704 21.3331H4.70378C3.16004 21.3331 1.90378 20.0769 1.90378 18.5331V9.26607L7.93684 15.2991C8.84404 16.2063 10.034 16.6609 11.2278 16.6609C12.4299 16.6609 13.6348 16.2007 14.5588 15.2758L16.1502 13.5697C16.5011 13.1935 16.4806 12.6027 16.1044 12.2509C15.7274 11.8999 15.1375 11.9186 14.7847 12.2975L13.2158 13.9803C12.1238 15.0723 10.3476 15.0723 9.25564 13.9803L2.24071 6.96354C2.71111 6.0778 3.63324 5.46647 4.70378 5.46647H8.43711C8.95231 5.46647 9.37044 5.04927 9.37044 4.53314C9.37044 4.017 8.95231 3.5998 8.43711 3.5998H4.70378C2.13058 3.5998 0.0371094 5.69327 0.0371094 8.26647V18.5331C0.0371094 21.1063 2.13058 23.1998 4.70378 23.1998H17.7704C20.3436 23.1998 22.4371 21.1063 22.4371 18.5331V11.0665C22.4371 10.5503 22.019 10.1331 21.5038 10.1331Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-white">Email me</p>
                  <p className="text-sm">designer@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 cursor-pointer hover:text-white transition">
                <span className="text-xl">
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5705 10.5995V9.86914C20.5705 8.05882 20.5705 7.15368 20.0237 6.59128C19.477 6.02889 18.597 6.02889 16.8371 6.02889H14.8971C14.0409 6.02889 14.0338 6.02723 13.2639 5.64193L10.1544 4.08588C8.85606 3.43618 8.20691 3.11134 7.51536 3.13391C6.82381 3.15649 6.19599 3.52302 4.94036 4.25609L3.79435 4.92516C2.87204 5.46362 2.41088 5.73285 2.15734 6.18074C1.90381 6.62864 1.90381 7.17408 1.90381 8.26496V15.9341C1.90381 17.3675 1.90381 18.0842 2.22325 18.4831C2.43582 18.7484 2.73369 18.9269 3.06301 18.986C3.55792 19.0749 4.16386 18.7212 5.37569 18.0136C6.1986 17.5332 6.99058 17.0343 7.97502 17.1696C8.79992 17.2829 9.56647 17.8034 10.3038 18.1724"
                      stroke="currentColor"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M7.50391 3.13281V17.1328"
                      stroke="currentColor"
                      stroke-width="1.4"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M14.0371 5.93359V9.66693"
                      stroke="currentColor"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M16.3704 12C18.6434 12 20.5704 13.8821 20.5704 16.1654C20.5704 18.485 18.612 20.1129 16.803 21.2197C16.6712 21.2942 16.5221 21.3333 16.3704 21.3333C16.2187 21.3333 16.0696 21.2942 15.9378 21.2197C14.1322 20.1021 12.1704 18.493 12.1704 16.1654C12.1704 13.8821 14.0975 12 16.3704 12Z"
                      stroke="currentColor"
                      stroke-width="1.4"
                    ></path>
                    <path
                      d="M16.3701 16.2002H16.3791"
                      stroke="currentColor"
                      stroke-width="1.86667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-white">Office location</p>
                  <p className="text-sm">London, United Kingdom</p>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="border-t border-gray-700 mt-8 pt-4 flex flex-wrap gap-6 text-sm text-gray-400 justify-between">
              <div className="flex gap-4">
                <a href="#" className="hover:text-white cursor-pointer">
                  License
                </a>
                <a href="#" className="hover:text-white cursor-pointer">
                  Style guide
                </a>
                <a href="#" className="hover:text-white cursor-pointer">
                  ChangeLogs
                </a>
                <a href="#" className="hover:text-white cursor-pointer">
                  404
                </a>
                <a href="#" className="hover:text-white cursor-pointer">
                  Instructions
                </a>
              </div>

              <p className="text-gray-500 text-xs">
                Created by{" "}
                <span className="text-white cursor-pointer hover:underline">
                  anovaflow
                </span>{" "}
                — Powered by{" "}
                <span className="text-white cursor-pointer hover:underline">
                  Webflow
                </span>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
