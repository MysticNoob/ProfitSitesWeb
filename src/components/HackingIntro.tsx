import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert, Check, X } from 'lucide-react';

const commands = [
  'Initializing system breach...',
  'Bypassing security protocols...',
  'Accessing mainframe...',
  'Decrypting data streams...',
  'System compromised...',
];

const HackingIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentCommand >= commands.length) {
      setTimeout(() => {
        onComplete();
      }, 1000);
      return;
    }

    const command = commands[currentCommand];
    let index = 0;

    const typeWriter = setInterval(() => {
      setText(command.substring(0, index));
      index++;

      if (index > command.length) {
        clearInterval(typeWriter);
        setTimeout(() => {
          setCurrentCommand(prev => prev + 1);
        }, 500);
      }
    }, 50);

    return () => clearInterval(typeWriter);
  }, [currentCommand, onComplete]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="w-full max-w-2xl p-8">
        <div className="flex items-center mb-4 space-x-2">
          <Terminal className="text-green-500 w-6 h-6" />
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg font-mono text-sm">
          <div className="space-y-2">
            {commands.slice(0, currentCommand).map((cmd, index) => (
              <div key={index} className="flex items-center space-x-2 text-green-500">
                <Check className="w-4 h-4" />
                <span>{cmd}</span>
              </div>
            ))}
            {currentCommand < commands.length && (
              <div className="flex items-center space-x-2 text-green-500">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <ShieldAlert className="w-4 h-4" />
                </motion.div>
                <span>{text}{showCursor ? '_' : ''}</span>
              </div>
            )}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2 text-xs">
            <div className="bg-gray-800 p-2 rounded">
              <div className="text-gray-400">CPU Usage</div>
              <motion.div
                className="h-2 bg-green-500 rounded-full mt-1"
                initial={{ width: "0%" }}
                animate={{ width: "80%" }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>
            <div className="bg-gray-800 p-2 rounded">
              <div className="text-gray-400">Memory</div>
              <motion.div
                className="h-2 bg-green-500 rounded-full mt-1"
                initial={{ width: "0%" }}
                animate={{ width: "60%" }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="font-mono">
                {Array.from({ length: 32 }).map((_, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: Math.random() > 0.5 ? 1 : 0.3 }}
                    transition={{ duration: 0.5 }}
                  >
                    {Math.random() > 0.5 ? '1' : '0'}
                  </motion.span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HackingIntro;