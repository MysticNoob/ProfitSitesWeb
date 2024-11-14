import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Profit Sites
              </span>
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md">
              We create beautiful, functional websites that help businesses grow and
              succeed in the digital world.
            </p>
            <div className="mt-6 flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-400 hover:text-primary-500"
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-400 hover:text-primary-500"
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-400 hover:text-primary-500"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-400 hover:text-primary-500"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              {['Web Development', 'UI/UX Design', 'SEO', 'Maintenance'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-base text-gray-500 dark:text-gray-400 hover:text-primary-500"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base text-gray-500 dark:text-gray-400 hover:text-primary-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-400">
            © {new Date().getFullYear()} Profit Sites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;