'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const commands = [
  'git push --set-upstream origin feature/new-api',                    // Git
  'docker buildx build -v /data:/data -p 8080:8080 myapp:latest',      // Docker
  'pytest -m "smoke and not slow" tests/',                             // Pytest with markers
  'uvicorn main:app --reload',                                         // FastAPI
  'mongo --eval "db.stats()"',                                         // MongoDB
  'rabbitmqctl status',                                                // RabbitMQ
  'ansible-playbook site.yml -i inventory.ini',                        // Ansible running playbook
  'appium --allow-cors --address 0.0.0.0 --driver uiautomator2',       // Appium advanced
  'aws s3 ls',                                                         // AWS CLI
  'sudo systemctl restart nginx',                                      // Linux/systemctl
  'jenkins-cli list-jobs',                                             // Jenkins
  'htop',                                                              // Linux monitoring
  'tail -f /var/log/syslog'                                            // Log monitoring
];

export default function TerminalSection() {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: commands,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      cursorChar: '█',
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm md:text-base w-full max-w-2xl mx-auto shadow-xl">
      <div className="flex items-center mb-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="text-green-400">
        <span className="text-blue-400">~/projects $</span>{' '}
        <span ref={el}></span>
      </div>
    </div>
  );
} 