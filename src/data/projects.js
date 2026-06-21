import TransigoImage from "../assets/Transigo_.png";
import TrendifyImage from "../assets/Trendify.png";
import BloodImage from "../assets/blood.png";
import FooduImage from "../assets/Foodu.png";
import BarberImage from "../assets/baerber.png";
import PowerStackImage from "../assets/PowerStack.png";
import KwitelyImage from "../assets/Kwitely.png";
import KwitelyServiceImage from "../assets/KwitelyService.png";

export const projects = [
  {
    id: 1,
    title: "Transigo",
    description:
      "Smart logistics platform in Algeria connecting clients and drivers for fast, reliable cargo delivery, with real-time tracking, truck sharing, and AI-powered route optimization.",
    category: "Mobile App",
    image: TransigoImage,
    tags: [
      "Flutter",
      "GetX",
      "Firebase",
      "Flask",
      "Node.js",
      "SQL",
      "MVC",
      "REST API",
      "Socket.io",
    ],
    link: "https://transigodz.com/",
    playStore: "https://play.google.com/store/apps/details?id=com.transigodz.client",
  },
  {
    id: 2,
    title: "Kwitely",
    description:
      "Smart healthcare platform connecting doctors, patients, and delivery agents, offering AI-powered assistance, real-time chat, appointment scheduling, and integrated location services for efficient medical support and service delivery.",
    category: "Full-Stack Platform",
    image: KwitelyImage,
    tags: [
      "Flutter",
      "GetX",
      "React",
      "Node.js",
      "Knex.js",
      "SQL",
      "MVC",
      "REST API",
      "Socket.io",
      "Firebase",
      "Google Maps API",
      "Figma",
    ],
    link: "https://kwitely.com/",
    playStore: "https://play.google.com/store/apps/details?id=com.kwitely.kwitelyapp",
    link: "https://github.com/Tayebdev/Qwitely"
  },
    {
    id: 3,
    title: "Kwitely Service",
    description:
      "A service-provider application built for healthcare agents and delivery personnel to manage medical requests, navigate in real-time, communicate with patients and doctors, and efficiently complete service tasks. The app offers live tracking, task management, and optimized route handling.",
    category: "Full-Stack Platform",
    image: KwitelyServiceImage,
    tags: [
      "Flutter",
      "GetX",
      "React",
      "Node.js",
      "Knex.js",
      "SQL",
      "MVC",
      "REST API",
      "Socket.io",
      "Firebase",
      "Google Maps API",
      "Figma",
    ],
    link: "https://kwitely.com/",
    playStore: "https://play.google.com/store/apps/details?id=com.kwitely.service",
  },
  {
    id: 4,
    title: "Trendify",
    description:
      "Trendify is a modern e-commerce platform offering a sleek, personalized shopping experience. It showcases trendy products with intuitive navigation, vibrant UI, and smart recommendations to help users discover and buy the latest styles effortlessly.",
    category: "Mobile App",
    image: TrendifyImage,
    tags: ["Flutter", "Firebase", "Node.js", "SQL", "GetX", "MVC", "REST API"],
    link: "https://github.com/Tayebdev/Trendify",
  },
  {
    id: 5,
    title: "Blood Donation",
    description:
      "Blood Donation is a cross-platform Flutter app that instantly connects blood donors with recipients. Users can register as donors, request blood, search nearby donors by type and location, and receive real-time alerts when a match is found making the donation process faster, easier, and more reliable.",
    category: "Mobile App",
    image: BloodImage,
    tags: ["Flutter", "Provider", "MVC", "Firebase"],
    link: "https://github.com/Tayebdev/blood-donation",
  },
  {
    id: 6,
    title: "Foodu",
    description:
      "Foodu is an intelligent, multi-role food delivery platform inspired by modern systems like Uber Eats. It connects clients, restaurants, drivers, and administrators inside one unified ecosystem with real-time operations, advanced logistics, and seamless user experience.",
    category: "Mobile App",
    image: FooduImage,
    tags: ["Flutter", "GetX", "MVVM", "Node.js", "Firebase", "REST API"],
    link: "https://github.com/Tayebdev/Foodu",
  },
  {
    id: 7,
    title: "Barber Shop",
    description:
      "Barber Shop is a modern Flutter and Firebase application that streamlines the entire barbershop experience. Clients can easily browse barbers, book appointments, and track their bookings in real time, while barbers can manage schedules, confirm reservations, and organize their daily workflow. Designed with a clean UI and smooth performance, the app makes barber–client interactions faster, smarter, and more convenient.",
    category: "Mobile App",
    image: BarberImage,
    tags: ["Flutter", "Firebase", "MVC", "GetX"],
    link: "https://github.com/Tayebdev/Barber-Shop",
  },
  {
    id: 8,
    title: "PowerStack",
    description:
      "PowerStack is a backend system built with Node.js, Express, and MySQL to efficiently manage nutritional supplements. It provides a secure RESTful API for handling products, orders, and performance tracking, ensuring fast, reliable, and scalable operations for both admin users and customers.",
    category: "Backend",
    image: PowerStackImage,
    tags: ["Node.js", "Socket.io", "MVC", "SQL", "Knex"],
    link: "https://github.com/Tayebdev/PowerStack",
  },
];

export const categories = [
  "Machine Learning",
  "SQL",
  "Power BI",
  "AI/LLM",
  "Spatial Data Science",
];
