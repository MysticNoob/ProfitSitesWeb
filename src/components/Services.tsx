import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Gauge } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that enhance user experience and engagement.',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'SEO Optimization',
    description: 'Boost your online visibility and reach your target audience effectively.',
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: 'Performance',
    description: 'Lightning-fast websites optimized for speed and efficiency.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
          >
            Comprehensive web solutions tailored to your needs
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-4">
                <div className="text-primary-600 dark:text-primary-400">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;