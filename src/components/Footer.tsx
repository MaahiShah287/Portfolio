import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const links = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/MaahiShah287', target: '_blank' },
    { icon: Linkedin, label: 'LinkedIn', href: 'http://www.linkedin.com/in/maahi-shah-137b1b394', target: '_blank' },
    { icon: Mail, label: 'Email', href: 'mailto:shahmaahi14@gmail.com', target: undefined },
  ];

  return (
    <footer className="bg-plum-900 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <span className="w-2 h-2 rounded-full bg-rose" />
              <span className="font-serif text-lg font-bold text-white">Maahi Shah</span>
            </div>
            <p className="text-white/50 text-sm">
              Aspiring Data Analyst | Computer Engineering Student
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.target}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-rose hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">&copy; Maahi Shah</p>
        </div>
      </div>
    </footer>
  );
}
