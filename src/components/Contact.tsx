import { useState, type FormEvent } from 'react';
import { Github, Linkedin, Mail, Send, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { DecorativeDots, DecorativeCurve } from './Decorations';

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.message.trim()) e.message = 'Please enter a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactOptions = [
    { icon: Github, label: 'GitHub', value: 'github.com/MaahiShah287', href: 'https://github.com/MaahiShah287' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/maahi-shah-137b1b394', href: 'http://www.linkedin.com/in/maahi-shah-137b1b394' },
    { icon: Mail, label: 'Email', value: 'shahmaahi14@gmail.com', href: 'mailto:shahmaahi14@gmail.com' },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-plum-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 opacity-10">
        <DecorativeDots className="w-40 h-40" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <DecorativeCurve />
      </div>
      <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-rose/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose mb-4">
            08 — Contact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Let's Connect
          </h2>
          <p className="text-white/60 mt-4 text-lg max-w-2xl mx-auto">
            I'm open to Data Analytics opportunities, internships, collaborations, and meaningful
            projects.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''} grid lg:grid-cols-2 gap-8 lg:gap-12 items-start`}
        >
          {/* Contact options */}
          <div className="space-y-4">
            {contactOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <a
                  key={opt.label}
                  href={opt.href}
                  target={opt.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer no-underline"
                >
                  <div className="w-12 h-12 rounded-xl bg-rose/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-rose" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{opt.label}</p>
                    <p className="text-white/50 text-xs font-mono">{opt.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-plum mb-2">Message Sent!</h3>
                <p className="text-mauve text-sm">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-plum mb-1.5">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-plum-100 bg-ivory/50 text-charcoal text-sm focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/20 transition-all"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-plum mb-1.5">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-plum-100 bg-ivory/50 text-charcoal text-sm focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-plum mb-1.5">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-plum-100 bg-ivory/50 text-charcoal text-sm focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/20 transition-all resize-none"
                    placeholder="Your message"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
