export const projectsData = [
  {
    id: "mindmate",
    title: "MindMate – Gamified Productivity App",
    shortDescription: {
      en: "A productivity and task management application built with Flutter and Laravel that combines to-do list management with gamification features such as mood tracking, puzzle rewards, and a point-based entertainment shop to encourage users to build consistent daily habits.",
      id: "Aplikasi produktivitas dan manajemen tugas yang dibangun dengan Flutter dan Laravel yang menggabungkan manajemen daftar tugas dengan fitur gamifikasi seperti pelacakan suasana hati, hadiah puzzle, dan toko hiburan berbasis poin untuk mendorong pengguna membangun kebiasaan harian yang konsisten."
    },
    fullDescription: {
      en: "MindMate is a collaborative mobile application developed as a Final Project together with a UI/UX Designer. The application focuses on helping users build productive daily habits by combining task management with gamification elements. Instead of only checking off tasks, users can earn points after completing activities, monitor their daily mood, solve puzzles for entertainment, and redeem rewards through an in-app point shop. The backend was developed using Laravel, while the mobile application was built with Flutter.",
      id: "MindMate adalah aplikasi mobile kolaboratif yang dikembangkan sebagai Proyek Akhir bersama dengan Desainer UI/UX. Aplikasi ini berfokus untuk membantu pengguna membangun kebiasaan harian yang produktif dengan menggabungkan manajemen tugas dengan elemen gamifikasi. Alih-alih hanya menandai tugas, pengguna bisa mendapatkan poin setelah menyelesaikan aktivitas, memantau suasana hati harian, memecahkan puzzle untuk hiburan, dan menukarkan hadiah melalui toko poin dalam aplikasi. Backend dikembangkan menggunakan Laravel, sementara aplikasi mobile dibangun dengan Flutter."
    },
    features: {
      en: [
        "User Authentication (Login & Register)",
        "Daily To-Do List Management",
        "Point Reward System for completed tasks",
        "Mood Tracking",
        "Puzzle Mini Game",
        "Reward / Entertainment Shop",
        "User Profile",
        "Laravel REST API Integration"
      ],
      id: [
        "Autentikasi Pengguna (Login & Daftar)",
        "Manajemen Daftar Tugas Harian",
        "Sistem Hadiah Poin untuk tugas yang diselesaikan",
        "Pelacakan Suasana Hati",
        "Game Mini Puzzle",
        "Toko Hadiah / Hiburan",
        "Profil Pengguna",
        "Integrasi REST API Laravel"
      ]
    },
    techStack: ["Flutter", "Laravel", "PHP", "MySQL", "REST API", "Git", "GitHub", "Figma"],
    images: ["/mindmate.png", "/mindmate1.png", "/mindmate2.png", "/mindmate3.png"],
    links: { 
      details: "/project/mindmate", 
      github: [
        { label: { en: "Mobile App", id: "Aplikasi Mobile" }, url: "https://github.com/naiiUnaisz/mindmate-flutter" },
        { label: { en: "Backend", id: "Backend" }, url: "https://github.com/naiiUnaisz/mindmate-laravel" }
      ]
    },
    techStackCard: ["Flutter", "Laravel", "REST API", "PHP", "MySQL", "Gamification"]
  },
  {
    id: "busa-cileungsi",
    title: "Busa Cileungsi E-Commerce",
    shortDescription: {
      en: "A fully functional e-commerce platform built with Laravel 12 and Livewire, featuring a dynamic product catalog, secure user authentication, and a dedicated admin dashboard for store management.",
      id: "Platform e-commerce yang berfungsi penuh yang dibangun dengan Laravel 12 dan Livewire, dengan katalog produk dinamis, autentikasi pengguna yang aman, dan dashboard admin khusus untuk manajemen toko."
    },
    fullDescription: {
      en: "Toko Kasur Busa Cileungsi is a comprehensive e-commerce platform designed to provide a seamless online shopping experience. Built using Laravel 12, Livewire, and Laravel Breeze, the project covers everything from secure user authentication to dynamic product catalogs and order transactions. Drawing inspiration from major marketplaces like Shopee and Tokopedia, the UI/UX is crafted using a mix of Tailwind CSS and Bootstrap to ensure a responsive and intuitive experience across all devices.",
      id: "Toko Kasur Busa Cileungsi adalah platform e-commerce komprehensif yang dirancang untuk memberikan pengalaman belanja online yang lancar. Dibangun menggunakan Laravel 12, Livewire, dan Laravel Breeze, proyek ini mencakup segalanya mulai dari autentikasi pengguna yang aman hingga katalog produk dinamis dan transaksi pesanan. Terinspirasi dari marketplace besar seperti Shopee dan Tokopedia, UI/UX dibuat dengan kombinasi Tailwind CSS dan Bootstrap untuk memastikan pengalaman yang responsif dan intuitif di semua perangkat."
    },
    features: {
      en: [
        "Dual-Role System: Dedicated views and features for Admin (Dashboard) and Users (Shopping)",
        "Dynamic Product Catalog: Interactive product listings and filtering inspired by leading online marketplaces.",
        "Secure Authentication: Integrated login and registration system powered by Laravel Breeze.",
        "Real-time UI & Responsive Design: Smooth interactions using Livewire, styled with Tailwind CSS and Bootstrap"
      ],
      id: [
        "Sistem Dual-Peran: Tampilan dan fitur khusus untuk Admin (Dashboard) dan Pengguna (Belanja)",
        "Katalog Produk Dinamis: Daftar dan filter produk interaktif yang terinspirasi oleh marketplace online terkemuka.",
        "Autentikasi Aman: Sistem login dan registrasi terintegrasi yang didukung oleh Laravel Breeze.",
        "UI Real-time & Desain Responsif: Interaksi yang lancar menggunakan Livewire, diberi gaya dengan Tailwind CSS dan Bootstrap"
      ]
    },
    techStack: ["PHP", "Laravel 12", "Livewire", "Tailwind CSS", "Bootstrap", "MySQL"],
    images: ["/busa-1.png", "/busa-2.png", "/busa-3.png", "/busa-4.png"],
    links: { 
      details: "/project/busa-cileungsi", 
      github: [
        { label: { en: "Source Code", id: "Kode Sumber" }, url: "https://github.com/naiiUnaisz/project-web-toko-KasurBusa-Unaisah-250458302059.git" }
      ]
    },
    techStackCard: ["PHP", "Laravel 12", "Livewire", "Tailwind CSS", "Bootstrap", "MySQL"]
  },
  {
    id: "m-tugas",
    title: "M-Tugas",
    shortDescription: {
      en: "A web-based task management application built with Laravel, featuring secure authentication and role-based dashboards for Admins and Employees.",
      id: "Aplikasi manajemen tugas berbasis web yang dibangun dengan Laravel, dengan autentikasi aman dan dashboard berbasis peran untuk Admin dan Karyawan."
    },
    fullDescription: {
      en: "M-Tugas is a web-based task management application designed to help teams track and manage their daily work efficiently. Built with Laravel, the app features a secure authentication system and provides dedicated, role-based dashboards for both Admins and Employees. It also includes a modern, fully responsive landing page built with the NiceAdmin template. Under the hood, the project strictly follows Laravel's standard MVC architecture (using PHP, Blade templates, and MySQL), making the codebase clean, scalable, and easy to maintain.",
      id: "M-Tugas adalah aplikasi manajemen tugas berbasis web yang dirancang untuk membantu tim melacak dan mengelola pekerjaan harian mereka secara efisien. Dibangun dengan Laravel, aplikasi ini memiliki sistem autentikasi yang aman dan menyediakan dashboard khusus berbasis peran untuk Admin dan Karyawan. Ini juga mencakup halaman arahan modern yang sepenuhnya responsif yang dibangun dengan template NiceAdmin. Di balik layar, proyek ini secara ketat mengikuti arsitektur MVC standar Laravel (menggunakan PHP, template Blade, dan MySQL), membuat basis kode bersih, scalable, dan mudah dipelihara."
    },
    features: {
      en: [
        "Secure Authentication & Multi-role Dashboards (Admin vs. Employee).",
        "Clean, responsive UI powered by NiceAdmin.",
        "Informative landing page with integrated contact features."
      ],
      id: [
        "Autentikasi Aman & Dashboard Multi-peran (Admin vs. Karyawan).",
        "UI bersih dan responsif yang didukung oleh NiceAdmin.",
        "Halaman arahan informatif dengan fitur kontak terintegrasi."
      ]
    },
    techStack: ["PHP", "Laravel", "MySQL", "HTML", "CSS"],
    images: ["/mt-tugas1.png", "/mt-tugas2.png", "/mt-tugas3.png"],
    links: { 
      details: "/project/m-tugas", 
      github: [
        { label: { en: "Source Code", id: "Kode Sumber" }, url: "https://github.com/naiiUnaisz/web-ManajemeTugas-laraver.git" }
      ]
    },
    techStackCard: ["PHP", "Laravel", "MySQL", "HTML", "CSS"]
  },
  {
    id: "masjid-display",
    title: "Masjid Digital Prayer Display",
    shortDescription: {
      en: "A web-based, real-time digital prayer board built with HTML, CSS, and Vanilla JavaScript, featuring REST API integration for accurate prayer schedules.",
      id: "Papan jadwal sholat digital berbasis web secara real-time yang dibangun dengan HTML, CSS, dan Vanilla JavaScript, dengan integrasi REST API untuk jadwal sholat yang akurat."
    },
    fullDescription: {
      en: "\"Masjid Jamie An-Nur Digital Display\" is a real-time information board designed specifically for mosques. Developed using fundamental web technologies (HTML, CSS, and Vanilla JavaScript), this application dynamically fetches location-based prayer times using a RESTful API. The interface is meticulously designed with a dark theme and glowing accents to ensure high readability from a distance. It displays the current time, dual calendars (Gregorian and Hijri), and includes smart countdowns for the next prayer and the month of Ramadan.",
      id: "\"Masjid Jamie An-Nur Digital Display\" adalah papan informasi real-time yang dirancang khusus untuk masjid. Dikembangkan menggunakan teknologi web dasar (HTML, CSS, dan Vanilla JavaScript), aplikasi ini secara dinamis mengambil jadwal sholat berbasis lokasi menggunakan RESTful API. Antarmuka dirancang dengan cermat dengan tema gelap dan aksen bercahaya untuk memastikan keterbacaan yang tinggi dari jarak jauh. Ini menampilkan waktu saat ini, kalender ganda (Gregorian dan Hijriyah), dan mencakup countdown cerdas untuk sholat berikutnya dan bulan Ramadhan."
    },
    features: {
      en: [
        "REST API Integration: Dynamically fetches accurate, location-specific daily prayer times.",
        "Smart Countdowns: Real-time visual countdowns for the next prayer and the month of Ramadan.",
        "Active Status Highlight: Automatically highlights the current or upcoming prayer time card",
        "Announcement Marquee: Integrated running text for mosque schedules and information."
      ],
      id: [
        "Integrasi REST API: Secara dinamis mengambil jadwal sholat harian akurat dan spesifik lokasi.",
        "Countdown Cerdas: Countdown visual real-time untuk sholat berikutnya dan bulan Ramadhan.",
        "Penyorotan Status Aktif: Secara otomatis menyorot kartu waktu sholat saat ini atau yang akan datang",
        "Layar Pengumuman: Teks berjalan terintegrasi untuk jadwal dan informasi masjid."
      ]
    },
    techStack: ["HTML5", "CSS3", "Vanilla JS", "RESTful API"],
    images: ["/masjid-1.png", "/masjid-2.png"],
    links: { 
      details: "/project/masjid-display", 
      github: [
        { label: { en: "Source Code", id: "Kode Sumber" }, url: "https://github.com/naiiUnaisz/website-masjid.git" }
      ]
    },
    techStackCard: ["HTML5", "CSS3", "Vanilla JS", "RESTful API"]
  }
];
