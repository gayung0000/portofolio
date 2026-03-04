/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Smartphone, 
  Database, 
  Terminal, 
  ChevronRight, 
  ChevronLeft,
  Download,
  Menu,
  X,
  Search,
  CheckCircle2,
  Cpu,
  Trophy,
  Instagram,
  ExternalLink,
  Globe,
  QrCode
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Translations ---

const TRANSLATIONS = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      certificates: "Certificates",
      activity: "Activity",
      contact: "Contact"
    },
    hero: {
      title: "GAYUNG",
      subtitle: "DEVELOPER",
      desc: "Junior Android & Backend Developer focused on building systematic, scalable solutions with a disciplined engineering mindset.",
      downloadCV: "Download CV",
      contactMe: "Contact Me"
    },
    about: {
      title: "About Me",
      subtitle: "A disciplined developer with a passion for systematic problem solving and leadership.",
      desc1: "I am a Junior Developer specializing in Android (Kotlin) and Backend (Laravel) development. My background as a Paskibraka member has instilled in me a high level of discipline, consistency, and a strong sense of responsibility.",
      desc2: "I approach software engineering not just as coding, but as a process of building reliable systems that solve real-world problems. My focus is on writing clean, modular code and maintaining a growth mindset in every project I undertake.",
      disciplined: "Disciplined",
      disciplinedDesc: "Paskibraka mindset",
      systematic: "Systematic",
      systematicDesc: "Engineer's workflow",
      achievement: "Rank 1 Software Eng."
    },
    skills: {
      title: "Technical Skills",
      subtitle: "My core competencies grouped by category."
    },
    certificates: {
      title: "Certificates",
      subtitle: "External validation of my skills and continuous learning journey.",
      viewDetails: "View Details",
      verify: "Verify Certificate",
      visitIssuer: "Visit Issuer"
    },
    activity: {
      title: "Documentation & Activity",
      subtitle: "A visual narrative of my leadership, training, and technical activities."
    },
    workflow: {
      title: "Engineering Workflow",
      subtitle: "My systematic approach to building high-quality software."
    },
    contact: {
      title: "Let's Build Something",
      exceptional: "Exceptional.",
      desc: "I'm currently looking for an internship opportunity at PT Molca. If you're looking for a disciplined and growth-oriented developer, let's talk.",
      emailMe: "Email Me"
    }
  },
  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      certificates: "Sertifikat",
      activity: "Kegiatan",
      contact: "Kontak"
    },
    hero: {
      title: "GAYUNG",
      subtitle: "DEVELOPER",
      desc: "Junior Android & Backend Developer yang fokus membangun solusi sistematis dan terukur dengan pola pikir engineer yang disiplin.",
      downloadCV: "Unduh CV",
      contactMe: "Hubungi Saya"
    },
    about: {
      title: "Tentang Saya",
      subtitle: "Developer disiplin dengan gairah untuk pemecahan masalah sistematis dan kepemimpinan.",
      desc1: "Saya adalah Junior Developer yang berspesialisasi dalam pengembangan Android (Kotlin) dan Backend (Laravel). Latar belakang saya sebagai anggota Paskibraka telah menanamkan tingkat disiplin, konsistensi, dan rasa tanggung jawab yang tinggi.",
      desc2: "Saya mendekati rekayasa perangkat lunak bukan sekadar coding, tetapi sebagai proses membangun sistem handal yang menyelesaikan masalah dunia nyata. Fokus saya adalah menulis kode yang bersih, modular, dan menjaga pola pikir berkembang dalam setiap proyek.",
      disciplined: "Disiplin",
      disciplinedDesc: "Pola pikir Paskibraka",
      systematic: "Sistematis",
      systematicDesc: "Alur kerja Engineer",
      achievement: "Peringkat 1 RPL"
    },
    skills: {
      title: "Keahlian Teknis",
      subtitle: "Kompetensi inti saya yang dikelompokkan berdasarkan kategori."
    },
    certificates: {
      title: "Sertifikat",
      subtitle: "Validasi eksternal atas keterampilan dan perjalanan belajar berkelanjutan saya.",
      viewDetails: "Lihat Detail",
      verify: "Verifikasi Sertifikat",
      visitIssuer: "Kunjungi Penerbit"
    },
    activity: {
      title: "Dokumentasi & Kegiatan",
      subtitle: "Narasi visual dari kepemimpinan, pelatihan, dan aktivitas teknis saya."
    },
    workflow: {
      title: "Alur Kerja Engineering",
      subtitle: "Pendekatan sistematis saya dalam membangun perangkat lunak berkualitas tinggi."
    },
    contact: {
      title: "Mari Bangun Sesuatu yang",
      exceptional: "Luar Biasa.",
      desc: "Saya sedang mencari kesempatan magang di PT Molca. Jika Anda mencari pengembang yang disiplin dan berorientasi pada pertumbuhan, mari bicara.",
      emailMe: "Email Saya"
    }
  }
};

// --- Data Definitions ---

const SKILLS = {
  backend: ["Laravel", "PHP", "MySQL", "REST API", "Auth"],
  mobile: ["Kotlin", "Android Studio", "Firebase", "Jetpack Compose"],
  web: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React"],
  tools: ["GitHub", "VS Code", "Postman", "Figma", "Git"]
};

const CERTIFICATES = [
  {
    name: {
      en: "Olimpiade SMK PalComTech 2026 - English",
      id: "Olimpiade SMK PalComTech 2026 - Bahasa Inggris"
    },
    issuer: "Institut Teknologi dan Bisnis PalComTech",
    issuerUrl: "https://palcomtech.ac.id",
    year: "2026",
    image: "b.inggris.jpg",
    verificationUrl: "https://palcomtech.ac.id/verify/12",
    desc: {
      en: "Participated in the English field in the PalComTech 2026 Vocational High School Olympiad Event.",
      id: "Berpartisipasi pada bidang Bahasa Inggris dalam Event Olimpiade SMK PalComTech 2026."
    }
  },
  {
    name: {
      en: "Olimpiade SMK PalComTech 2026 - Mathematics",
      id: "Olimpiade SMK PalComTech 2026 - Matematika"
    },
    issuer: "Institut Teknologi dan Bisnis PalComTech",
    issuerUrl: "https://palcomtech.ac.id",
    year: "2026",
    image: "matematika.jpg",
    verificationUrl: "https://palcomtech.ac.id/verify/13",
    desc: {
      en: "Participated in the Mathematics field in the PalComTech 2026 Vocational High School Olympiad Event.",
      id: "Berpartisipasi pada bidang Matematika dalam Event Olimpiade SMK PalComTech 2026."
    }
  },
  {
    name: {
      en: "Critical Thinking Program 4C",
      id: "Program Berpikir Kritis 4C"
    },
    issuer: "Gamelab Indonesia",
    issuerUrl: "https://www.gamelab.id",
    year: "2025",
    score: "90",
    image: "gamelab-polapikir.png",
    verificationUrl: "https://www.gamelab.id/certificate/verify/CT-4C-1",
    desc: {
      en: "Developing critical thinking mindset for professional development.",
      id: "Mengembangkan pola pikir kritis untuk pengembangan profesional."
    }
  },
  {
    name: {
      en: "Collaboration Program 4C",
      id: "Program Kolaborasi 4C"
    },
    issuer: "Gamelab Indonesia",
    issuerUrl: "https://www.gamelab.id",
    year: "2025",
    score: "88",
    image: "certificate gamelab kolaborasi.jpg",
    verificationUrl: "https://www.gamelab.id/certificate/verify/CL-4C-9",
    desc: {
      en: "Mastering teamwork and collaborative problem-solving.",
      id: "Menguasai kerja tim dan pemecahan masalah kolaboratif."
    }
  },
  {
    name: {
      en: "Creativity Program 4C",
      id: "Program Kreativitas 4C"
    },
    issuer: "Gamelab Indonesia",
    issuerUrl: "https://www.gamelab.id",
    year: "2025",
    score: "88",
    image: "certificate gamelab kreatif.jpg",
    verificationUrl: "https://www.gamelab.id/certificate/verify/CR-4C-10",
    desc: {
      en: "Enhancing creative thinking in technical environments.",
      id: "Meningkatkan pemikiran kreatif dalam lingkungan teknis."
    }
  },
  {
    name: {
      en: "Eco Fashion Training",
      id: "Pelatihan Eco Fashion"
    },
    issuer: "Bupati Musi Banyuasin",
    year: "2025",
    image: "echofashion.png",
    desc: {
      en: "Participation in sustainable fashion training and development.",
      id: "Partisipasi dalam pelatihan dan pengembangan busana berkelanjutan."
    }
  },
  {
    name: {
      en: "Rank 1 Academic Achievement",
      id: "Prestasi Akademik Peringkat 1"
    },
    issuer: "SMKN 3 Sekayu",
    issuerUrl: "https://smkn3sekayu.sch.id",
    year: "2025",
    image: "peringkat_1.png",
    desc: {
      en: "Achieved Rank 1 in Software Engineering class.",
      id: "Meraih Peringkat 1 di kelas Rekayasa Perangkat Lunak."
    }
  },
  {
    name: {
      en: "Rank 3 Academic Achievement",
      id: "Prestasi Akademik Peringkat 3"
    },
    issuer: "SMKN 3 Sekayu",
    issuerUrl: "https://smkn3sekayu.sch.id",
    year: "2024",
    score: "85.62",
    image: "peringkat_3.png",
    desc: {
      en: "Achieved Rank 3 in Software Engineering class for the first semester of the 2024/2025 academic year.",
      id: "Meraih Peringkat 3 di kelas Rekayasa Perangkat Lunak untuk semester ganjil tahun ajaran 2024/2025."
    }
  },
  {
    name: {
      en: "Water SAR Basic Training",
      id: "Diksar SAR Air"
    },
    issuer: "Saka Bhayangkara",
    year: "2025",
    image: "SAR_AIR.png",
    desc: {
      en: "Intensive water search and rescue training.",
      id: "Pelatihan pencarian dan penyelamatan air yang intensif."
    }
  }
];

const ORGANIZATIONS = [
  {
    id: "paskibraka",
    title: {
      en: "Regional Paskibraka 2025",
      id: "Paskibraka Kabupaten 2025"
    },
    thumbnail: "pengukuhan.jpg",
    images: [
      { 
        url: "pelatihan.jpg", 
        caption: {
          en: "Intensive discipline training during regional Paskibraka preparation.",
          id: "Latihan disiplin intensif selama persiapan Paskibraka kabupaten."
        }
      },
      { 
        url: "pengukuhan.jpg", 
        caption: {
          en: "Official inauguration as a member of the regional flag hoisting team.",
          id: "Pelantikan resmi sebagai anggota tim pengibar bendera kabupaten."
        }
      }
    ]
  },
  {
    id: "osis",
    title: {
      en: "Student Organization (OSIS)",
      id: "Organisasi Intra Sekolah (OSIS)"
    },
    thumbnail: "plsntikanosis.jpeg",
    images: [
      { 
        url: "plsntikanosis.jpeg", 
        caption: {
          en: "Official Inauguration for the 2025/2026 period.",
          id: "Pelantikan Resmi periode tahun 2025/2026."
        }
      }
    ]
  },
  {
    id: "pramuka",
    title: {
      en: "Scouts (Saka Bhayangkara)",
      id: "Pramuka (Saka Bhayangkara)"
    },
    thumbnail: "pramuka1.jpeg",
    images: [
      { 
        url: "pramuka1.jpeg", 
        caption: {
          en: "Photo session after training and receiving the Water SAR certificate.",
          id: "Sesi pemotretan setelah pelatihan dan mendapatkan sertifikat SAR Air."
        }
      }
    ]
  }
];

const WORKFLOW = [
  { 
    step: "01", 
    title: {
      en: "Requirement Analysis",
      id: "Analisis Kebutuhan"
    }, 
    desc: {
      en: "Understanding the core problem and user needs.",
      id: "Memahami masalah inti dan kebutuhan pengguna."
    }
  },
  { 
    step: "02", 
    title: {
      en: "System Design",
      id: "Desain Sistem"
    }, 
    desc: {
      en: "Architecting the solution and choosing the right stack.",
      id: "Merancang solusi dan memilih stack yang tepat."
    }
  },
  { 
    step: "03", 
    title: {
      en: "Database Planning",
      id: "Perencanaan Database"
    }, 
    desc: {
      en: "Designing efficient schemas for data integrity.",
      id: "Merancang skema yang efisien untuk integritas data."
    }
  },
  { 
    step: "04", 
    title: {
      en: "Modular Development",
      id: "Pengembangan Modular"
    }, 
    desc: {
      en: "Writing clean, maintainable, and scalable code.",
      id: "Menulis kode yang bersih, mudah dipelihara, dan skalabel."
    }
  },
  { 
    step: "05", 
    title: {
      en: "Testing",
      id: "Pengujian"
    }, 
    desc: {
      en: "Ensuring reliability through rigorous quality checks.",
      id: "Memastikan keandalan melalui pemeriksaan kualitas yang ketat."
    }
  },
  { 
    step: "06", 
    title: {
      en: "Refinement",
      id: "Penyempurnaan"
    }, 
    desc: {
      en: "Continuous improvement based on feedback.",
      id: "Peningkatan berkelanjutan berdasarkan umpan balik."
    }
  }
];

// --- Components ---

const Navbar = ({ lang, setLang }: { lang: 'en' | 'id', setLang: (l: 'en' | 'id') => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.about, href: "#about" },
    { name: t.skills, href: "#skills" },
    { name: t.certificates, href: "#certificates" },
    { name: t.activity, href: "#activity" },
    { name: t.contact, href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-primary/80 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter gradient-text">GAYUNG.</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-2 ml-4 bg-white/5 p-1 rounded-lg border border-white/10">
            <button 
              onClick={() => setLang('en')}
              className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${lang === 'en' ? 'bg-accent text-white' : 'text-slate-400 hover:text-white'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('id')}
              className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${lang === 'id' ? 'bg-accent text-white' : 'text-slate-400 hover:text-white'}`}
            >
              ID
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
            <button 
              onClick={() => setLang('en')}
              className={`px-2 py-1 text-[10px] font-bold rounded ${lang === 'en' ? 'bg-accent text-white' : 'text-slate-400'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('id')}
              className={`px-2 py-1 text-[10px] font-bold rounded ${lang === 'id' ? 'bg-accent text-white' : 'text-slate-400'}`}
            >
              ID
            </button>
          </div>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-primary border-b border-white/10 py-6 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-400 hover:text-white">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="h-1 w-20 bg-accent mt-4 rounded-full" />
  </div>
);

export default function App() {
  const [lang, setLang] = useState<'en' | 'id'>('en');
  const [selectedCertificate, setSelectedCertificate] = useState<typeof CERTIFICATES[0] | null>(null);
  const [selectedOrg, setSelectedOrg] = useState<typeof ORGANIZATIONS[0] | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen selection:bg-accent/30">
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-accent/10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
              {t.hero.title} <br />
              <span className="gradient-text">{t.hero.subtitle}</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/cv.pdf" 
                download="Gayung_CV.pdf"
                className="px-8 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-all flex items-center gap-2 group"
              >
                {t.hero.downloadCV} <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
                {t.hero.contactMe}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border-2 border-white/10">
                {/* 
                  TIP: To use a local image, place your photo in the 'public' folder 
                  and change the src to "/your-photo.jpg"
                */}
                <img 
                  src="profile.jpeg" 
                  alt="Gayung Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Trophy />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">Achievement</p>
                  <p className="font-bold">{t.about.achievement}</p>
                </div>
              </div>
            </motion.div>

            <div>
              <SectionHeading 
                title={t.about.title} 
                subtitle={t.about.subtitle}
              />
              <div className="space-y-6 text-slate-400 leading-relaxed">
                <p>
                  {t.about.desc1}
                </p>
                <p>
                  {t.about.desc2}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 glass-card">
                    <CheckCircle2 className="text-accent mb-2" />
                    <h4 className="text-white font-semibold">{t.about.disciplined}</h4>
                    <p className="text-xs">{t.about.disciplinedDesc}</p>
                  </div>
                  <div className="p-4 glass-card">
                    <Cpu className="text-cyan-accent mb-2" />
                    <h4 className="text-white font-semibold">{t.about.systematic}</h4>
                    <p className="text-xs">{t.about.systematicDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title={t.skills.title} 
            subtitle={t.skills.subtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-8"
            >
              <Database className="text-accent mb-6 w-10 h-10" />
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.backend.map(s => (
                  <span key={s} className="px-3 py-1 bg-white/5 rounded-lg text-xs border border-white/5">{s}</span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-8"
            >
              <Smartphone className="text-cyan-accent mb-6 w-10 h-10" />
              <h3 className="text-xl font-bold mb-4">Mobile</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.mobile.map(s => (
                  <span key={s} className="px-3 py-1 bg-white/5 rounded-lg text-xs border border-white/5">{s}</span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-8"
            >
              <Code2 className="text-accent mb-6 w-10 h-10" />
              <h3 className="text-xl font-bold mb-4">Web</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.web.map(s => (
                  <span key={s} className="px-3 py-1 bg-white/5 rounded-lg text-xs border border-white/5">{s}</span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-8"
            >
              <Terminal className="text-cyan-accent mb-6 w-10 h-10" />
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.tools.map(s => (
                  <span key={s} className="px-3 py-1 bg-white/5 rounded-lg text-xs border border-white/5">{s}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title={t.certificates.title} 
            subtitle={t.certificates.subtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATES.map((cert, i) => (
              <motion.div
                key={cert.name[lang]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-slate-800">
                  <img 
                    src={cert.image} 
                    alt={cert.name[lang]} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white group-hover:text-accent transition-colors">{cert.name[lang]}</h3>
                  {cert.score && (
                    <span className="px-2 py-1 bg-accent/10 text-accent text-[10px] font-bold rounded border border-accent/20">
                      Score: {cert.score}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mb-4">{cert.issuer} • {cert.year}</p>
                <p className="text-sm text-slate-400 line-clamp-2 mb-6">{cert.desc[lang]}</p>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCertificate(cert);
                  }}
                  className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white hover:bg-accent hover:border-accent transition-all flex items-center justify-center gap-2"
                >
                  <Search className="w-3.5 h-3.5" /> {t.certificates.viewDetails}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Section */}
      <section id="activity" className="section-padding bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title={t.activity.title} 
            subtitle={t.activity.subtitle}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ORGANIZATIONS.map((org, i) => (
              <motion.div
                key={org.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => {
                  setSelectedOrg(org);
                  setCurrentSlide(0);
                }}
                className="glass-card overflow-hidden group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={org.thumbnail} 
                    alt={org.title[lang]} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="px-6 py-2 bg-accent text-white rounded-full text-sm font-bold">
                      View Gallery
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-white mb-1">{org.title[lang]}</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{org.images.length} Photos</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title={t.workflow.title} 
            subtitle={t.workflow.subtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WORKFLOW.map((item, i) => (
              <motion.div
                key={item.title[lang]}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-0 text-4xl font-black text-white/5 select-none">
                  {item.step}
                </div>
                <div className="absolute left-0 top-3 w-8 h-[2px] bg-accent" />
                <h3 className="text-xl font-bold mb-2 text-white">{item.title[lang]}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-accent to-cyan-accent" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title} <br /><span className="gradient-text">{t.contact.exceptional}</span></h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-12">
                {t.contact.desc}
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a href="mailto:gayungnibosss@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-xl font-semibold hover:scale-105 transition-all">
                  <Mail className="w-5 h-5" /> {t.contact.emailMe}
                </a>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/gayung6214/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center glass-card hover:bg-white/10 transition-all text-white">
                    <Instagram />
                  </a>
                  <a href="https://www.linkedin.com/in/gayung19" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center glass-card hover:bg-white/10 transition-all text-white">
                    <Linkedin />
                  </a>
                  <a href="https://github.com/gayung0000/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center glass-card hover:bg-white/10 transition-all text-white">
                    <Github />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2026 Gayung.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/gayung0000/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/gayung19" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/gayung6214/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Certificate Detail Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-full max-w-4xl overflow-hidden relative"
            >
              <button 
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-accent transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-square md:aspect-auto bg-slate-800 overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                  <img 
                    src={selectedCertificate.image} 
                    alt={selectedCertificate.name[lang]} 
                    className="w-full h-full object-contain md:object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{selectedCertificate.name[lang]}</h3>
                      <p className="text-slate-400">{selectedCertificate.issuer} • {selectedCertificate.year}</p>
                    </div>
                    {selectedCertificate.score && (
                      <div className="text-right">
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Score</p>
                        <p className="text-2xl font-black text-accent">{selectedCertificate.score}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="h-[1px] w-full bg-white/10 my-6" />
                  
                  <p className="text-slate-300 leading-relaxed mb-8">
                    {selectedCertificate.desc[lang]}
                  </p>

                  <div className="space-y-3">
                    {selectedCertificate.issuerUrl && (
                      <a 
                        href={selectedCertificate.issuerUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 glass-card hover:bg-white/10 transition-all group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[9px] text-slate-500 uppercase tracking-widest leading-none mb-1">{t.certificates.visitIssuer}</p>
                          <p className="text-xs font-bold text-white flex items-center gap-1">
                            {selectedCertificate.issuer} <ExternalLink className="w-2.5 h-2.5" />
                          </p>
                        </div>
                      </a>
                    )}

                    {selectedCertificate.verificationUrl && (
                      <a 
                        href={selectedCertificate.verificationUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 glass-card hover:bg-white/10 transition-all group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-cyan-accent/10 flex items-center justify-center text-cyan-accent group-hover:bg-cyan-accent group-hover:text-white transition-all">
                          <QrCode className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[9px] text-slate-500 uppercase tracking-widest leading-none mb-1">{t.certificates.verify}</p>
                          <p className="text-xs font-bold text-white flex items-center gap-1">
                            Verification Link <ExternalLink className="w-2.5 h-2.5" />
                          </p>
                        </div>
                      </a>
                    )}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button 
                      onClick={() => setSelectedCertificate(null)}
                      className="px-6 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white hover:bg-white/10 transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedOrg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedOrg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl relative"
            >
              <button 
                onClick={() => setSelectedOrg(null)}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors flex items-center gap-2"
              >
                <X className="w-6 h-6" /> Close
              </button>

              <div className="relative group">
                <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      src={selectedOrg.images[currentSlide].url}
                      alt={selectedOrg.title[lang]}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                </div>

                {selectedOrg.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => setCurrentSlide((prev) => (prev === 0 ? selectedOrg.images.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={() => setCurrentSlide((prev) => (prev === selectedOrg.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedOrg.title[lang]}</h3>
                <p className="text-slate-400 italic">"{selectedOrg.images[currentSlide].caption[lang]}"</p>
                <div className="mt-4 flex justify-center gap-2">
                  {selectedOrg.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-2 h-2 rounded-full transition-all ${currentSlide === i ? "w-8 bg-accent" : "bg-white/20"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
