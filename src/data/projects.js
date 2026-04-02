export const projectsData = [
  {
    id: "m-tugas",
    title: "M-Tugas",
    shortDescription: "A web-based task management application built with Laravel, featuring secure authentication and role-based dashboards for Admins and Employees.",
    fullDescription: `M-Tugas is a web-based task management application designed to help teams track and manage their daily work efficiently. Built with Laravel, the app features a secure authentication system and provides dedicated, role-based dashboards for both Admins and Employees. It also includes a modern, fully responsive landing page built with the NiceAdmin template. Under the hood, the project strictly follows Laravel's standard MVC architecture (using PHP, Blade templates, and MySQL), making the codebase clean, scalable, and easy to maintain.`,
    features: [
      "Secure Authentication & Multi-role Dashboards (Admin vs. Employee).",
      "Clean, responsive UI powered by NiceAdmin.",
      "Informative landing page with integrated contact features."
    ],
    techStack: ["PHP", "Laravel", "MySQL", "HTML", "CSS"],
    images: ["/mt-tugas1.png", "/mt-tugas2.png", "/mt-tugas3.png"],
    links: { details: "/project/m-tugas", github: "https://github.com/naiiUnaisz/web-ManajemeTugas-laraver.git" }
  },
  {
    id: "busa-cileungsi",
    title: "Busa Cileungsi E-Commerce",
    shortDescription: "A fully functional e-commerce platform built with Laravel 12 and Livewire, featuring a dynamic product catalog, secure user authentication, and a dedicated admin dashboard for store management.",
    fullDescription: "Toko Kasur Busa Cileungsi is a comprehensive e-commerce platform designed to provide a seamless online shopping experience. Built using Laravel 12, Livewire, and Laravel Breeze, the project covers everything from secure user authentication to dynamic product catalogs and order transactions. Drawing inspiration from major marketplaces like Shopee and Tokopedia, the UI/UX is crafted using a mix of Tailwind CSS and Bootstrap to ensure a responsive and intuitive experience across all devices.",
    features: [
      "Dual-Role System: Dedicated views and features for Admin (Dashboard) and Users (Shopping)",
      "Dynamic Product Catalog: Interactive product listings and filtering inspired by leading online marketplaces.",
      "Secure Authentication: Integrated login and registration system powered by Laravel Breeze.",
      "Real-time UI & Responsive Design: Smooth interactions using Livewire, styled with Tailwind CSS and Bootstrap"
    ],
    techStack: ["PHP", "Laravel 12", "Livewire", "Tailwind CSS", "Bootstrap", "MySQL"],
    images: ["/busa-1.png", "/busa-2.png", "/busa-3.png", "/busa-4.png"],
    links: { details: "/project/busa-cileungsi", github: "https://github.com/naiiUnaisz/project-web-toko-KasurBusa-Unaisah-250458302059.git" }
  },
  {
    id: "masjid-display",
    title: "Masjid Digital Prayer Display",
    shortDescription: "A web-based, real-time digital prayer board built with HTML, CSS, and Vanilla JavaScript, featuring REST API integration for accurate prayer schedules.",
    fullDescription: `"Masjid Jamie An-Nur Digital Display" is a real-time information board designed specifically for mosques. Developed using fundamental web technologies (HTML, CSS, and Vanilla JavaScript), this application dynamically fetches location-based prayer times using a RESTful API. The interface is meticulously designed with a dark theme and glowing accents to ensure high readability from a distance. It displays the current time, dual calendars (Gregorian and Hijri), and includes smart countdowns for the next prayer and the month of Ramadan.`,
    features: [
      "REST API Integration: Dynamically fetches accurate, location-specific daily prayer times.",
      "Smart Countdowns: Real-time visual countdowns for the next prayer and the month of Ramadan.",
      "Active Status Highlight: Automatically highlights the current or upcoming prayer time card",
      "Announcement Marquee: Integrated running text for mosque schedules and information."
    ],
    techStack: ["HTML5", "CSS3", "Vanilla JS", "RESTful API"],
    images: ["/masjid-1.png", "/masjid-2.png"],
    links: { details: "/project/masjid-display", github: "https://github.com/naiiUnaisz/website-masjid.git" }
  }
];
