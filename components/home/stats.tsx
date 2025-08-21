'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

const stats = [
  {
    value: 15000,
    label: 'Propriétés disponibles',
    suffix: '+'
  },
  {
    value: 2500,
    label: 'Visites 3D réalisées',
    suffix: '+'
  },
  {
    value: 98,
    label: 'Taux de satisfaction',
    suffix: '%'
  },
  {
    value: 450,
    label: 'Agents partenaires',
    suffix: '+'
  }
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-3xl md:text-4xl font-bold text-slate-900">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-slate-600 mt-2 text-sm md:text-base">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}