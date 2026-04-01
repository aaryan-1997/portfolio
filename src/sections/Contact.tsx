import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2, MessageSquare, Phone, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { SOCIAL_LINKS } from '../constants';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email Me',
      value: 'aryan9499@gmail.com',
      href: SOCIAL_LINKS.email,
      color: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: '+91 8896716095',
      href: SOCIAL_LINKS.whatsapp,
      color: 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Ram Niwas Singh',
      href: SOCIAL_LINKS.linkedin,
      color: 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-600/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Let's Connect"
          subtitle="Ready to bring your mobile app idea to life? I'm just a message away."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700/50 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Contact Information</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                I'm currently available for freelance work and full-time opportunities. Let's build something amazing together.
              </p>

              <div className="space-y-6">
                {contactMethods.map((method, i) => (
                  <a
                    key={i}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group p-3 -m-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-all"
                  >
                    <div className={`w-12 h-12 ${method.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <method.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{method.label}</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {method.value}
                      </p>
                    </div>
                    <ExternalLink size={16} className="text-slate-300 dark:text-slate-600 group-hover:text-blue-600 transition-colors" />
                  </a>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-slate-100 dark:border-slate-700/50">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Follow My Work</h4>
                <div className="flex gap-4">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white overflow-hidden relative group">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <h4 className="text-xl font-bold mb-2 relative z-10">Quick Response</h4>
              <p className="text-blue-100 relative z-10">
                I usually respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700/50">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Message Sent!</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 max-w-sm">
                    Thank you for reaching out. I've received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 px-8 py-3 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-2xl font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                      <input
                        {...register('name')}
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white transition-all"
                      />
                      {errors.name && <p className="text-red-500 text-xs font-bold ml-1">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                      <input
                        {...register('email')}
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white transition-all"
                      />
                      {errors.email && <p className="text-red-500 text-xs font-bold ml-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Subject</label>
                    <input
                      {...register('subject')}
                      placeholder="Project Inquiry"
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white transition-all"
                    />
                    {errors.subject && <p className="text-red-500 text-xs font-bold ml-1">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Tell me about your project or just say hi..."
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white transition-all resize-none"
                    />
                    {errors.message && <p className="text-red-500 text-xs font-bold ml-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-blue-600/25 group"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} 
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
