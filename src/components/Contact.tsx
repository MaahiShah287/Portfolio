import { useState, type FormEvent } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { contactConfig } from '@/data/portfolio';
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

export default function Contact() {
  const { ref, visible } = useReveal();

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) {
      errs.name = 'Please provide your full name.';
    } else if (form.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters long.';
    }

    if (!form.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g. name@company.com).';
    }

    if (!form.message.trim()) {
      errs.message = 'Please include a brief message.';
    } else if (form.message.trim().length < 10) {
      errs.message = 'Message should contain at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', message: '' });
    setErrors({});
  };

  const socialLinks = [
    {
      name: 'GitHub',
      label: 'Explore code repositories & commits',
      value: contactConfig.github || contactConfig.placeholders.github,
      href: contactConfig.github,
      icon: Github,
    },
    {
      name: 'LinkedIn',
      label: 'Connect & discuss opportunities',
      value: contactConfig.linkedin || contactConfig.placeholders.linkedin,
      href: contactConfig.linkedin,
      icon: Linkedin,
    },
    {
      name: 'Email',
      label: 'Direct correspondence',
      value: contactConfig.email || contactConfig.placeholders.email,
      href: `mailto:${contactConfig.email}`,
      icon: Mail,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/70 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-brand-100/40 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow-badge mb-3">
              <MessageSquare size={13} className="text-brand-600" />
              08 — Get In Touch
            </div>
            <h2 className="section-title">
              Let's Connect
            </h2>
            <p className="section-subtitle mx-auto">
              I'm open to Data Analytics opportunities, internships, collaborations, and meaningful projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
            {/* LEFT COLUMN: Direct Connection Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-base font-bold text-navy-900 mb-2">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Feel free to connect directly through any platform below:
              </p>

              <div className="space-y-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.name !== 'Email' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card hover:border-brand-300 transition-all duration-200 group no-underline"
                    >
                      <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-all">
                        <Icon size={19} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-navy-900 group-hover:text-brand-600 transition-colors">
                            {item.name}
                          </span>
                          <ExternalLink size={12} className="text-slate-400 group-hover:text-brand-600" />
                        </div>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 mt-6">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0 animate-pulse" />
                  <div className="text-xs text-emerald-900 leading-relaxed">
                    <strong>Actively Seeking:</strong> Data Analyst internships and technical roles where analytical, Python, and SQL skills can drive measurable impact.
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Functional Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card">
              <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-navy-900">Send a Direct Message</h3>
                  <p className="text-xs text-slate-500">Client-side validated form ready for service integration.</p>
                </div>
                <Sparkles size={18} className="text-brand-600" />
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-2xs">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-navy-900">
                    Message Ready for Transmission!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your form submission has been validated successfully. In this current frontend deployment without a live mailing backend, please feel free to email me directly at{' '}
                    <a href={`mailto:${contactConfig.email}`} className="font-semibold text-brand-600 underline">
                      {contactConfig.email}
                    </a>{' '}
                    or message me on LinkedIn.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-2 inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-navy-900 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g., Alex Johnson"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy-900 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-all duration-200 ${
                        errors.name
                          ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                          : 'border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-navy-900 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="alex.johnson@organization.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy-900 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-all duration-200 ${
                        errors.email
                          ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                          : 'border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-navy-900 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Hi Maahi, I came across your portfolio and would like to connect regarding..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-navy-900 placeholder-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-all duration-200 resize-none ${
                        errors.message
                          ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                          : 'border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
