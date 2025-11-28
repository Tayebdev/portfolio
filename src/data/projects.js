import TransigoImage from '../assets/Transigo_.png';
import TrendifyImage from '../assets/Trendify.png';
import BloodImage from '../assets/blood.png';
import FooduImage from '../assets/Foodu.png';
import BarberImage from '../assets/baerber.png';
import PowerStackImage from '../assets/PowerStack.png';

export const projects = [

    {
        id: 7,
        title: 'Transigo',
        description: 'Smart logistics platform in Algeria connecting clients and drivers for fast, reliable cargo delivery, with real-time tracking, truck sharing, and AI-powered route optimization.',
        category: 'Mobile App',
        image: TransigoImage,
        tags: ['Flutter', 'GetX', 'Firebase', 'Flask', 'Node.js', 'SQL', "MVC", "REST API", "Socket.io"],
        link: '#'
    },
    {
        id: 8,
        title: 'Trendify',
        description: 'Trendify is a modern e-commerce platform offering a sleek, personalized shopping experience. It showcases trendy products with intuitive navigation, vibrant UI, and smart recommendations to help users discover and buy the latest styles effortlessly.',
        category: 'Mobile App',
        image: TrendifyImage,
        tags: ['Flutter', 'Firebase', 'Node.js', 'SQL', 'GetX', 'MVC', "REST API"],
        link: 'https://github.com/Tayebdev/Trendify'
    },
    {
        id: 9,
        title: 'Blood Donation',
        description: 'Blood Donation is a cross-platform Flutter app that instantly connects blood donors with recipients. Users can register as donors, request blood, search nearby donors by type and location, and receive real-time alerts when a match is found making the donation process faster, easier, and more reliable.',
        category: 'Mobile App',
        image: BloodImage,
        tags: ['Flutter', 'Provider', 'MVC', 'Firebase'],
        link: 'https://github.com/Tayebdev/blood-donation'
    },
    {
        id: 10,
        title: 'Foodu',
        description: 'Foodu is an intelligent, multi-role food delivery platform inspired by modern systems like Uber Eats. It connects clients, restaurants, drivers, and administrators inside one unified ecosystem with real-time operations, advanced logistics, and seamless user experience.',
        category: 'Mobile App',
        image: FooduImage,
        tags: ['Flutter', 'GetX', 'MVVM', 'Node.js', 'Firebase', 'REST API'],
        link: 'https://github.com/Tayebdev/Foodu'
    },
    {
        id: 11,
        title: 'Barber Shop',
        description: 'Barber Shop is a modern Flutter and Firebase application that streamlines the entire barbershop experience. Clients can easily browse barbers, book appointments, and track their bookings in real time, while barbers can manage schedules, confirm reservations, and organize their daily workflow. Designed with a clean UI and smooth performance, the app makes barber–client interactions faster, smarter, and more convenient.',
        category: 'Mobile App',
        image: BarberImage,
        tags: ['Flutter', 'Firebase', 'MVC', 'GetX'],
        link: 'https://github.com/Tayebdev/Barber-Shop'
    },
    {
        id: 12,
        title: 'PowerStack',
        description: 'PowerStack is a backend system built with Node.js, Express, and MySQL to efficiently manage nutritional supplements. It provides a secure RESTful API for handling products, orders, and performance tracking, ensuring fast, reliable, and scalable operations for both admin users and customers.',
        category: 'Backend',
        image: PowerStackImage,
        tags: ['Node.js', 'Socket.io', 'MVC', 'SQL', 'Knex'],
        link: 'https://github.com/Tayebdev/PowerStack'
    }
];

export const categories = [
    'Machine Learning',
    'SQL',
    'Power BI',
    'AI/LLM',
    'Spatial Data Science'
];
