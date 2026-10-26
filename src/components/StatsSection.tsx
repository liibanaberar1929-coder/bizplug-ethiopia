import { Building2, LayoutGrid, Headphones } from 'lucide-react';
import { useInView, useCountUp } from '../lib/useAnimations';

interface Stat {
  icon: typeof Building2;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

const STATS: Stat[] = [
  { icon: Building2, label: 'Businesses Linked', value: 500, suffix: '+' },
  { icon: LayoutGrid, label: 'Service Categories', value: 12, suffix: '+' },
  { icon: Headphones, label: 'Priority Support', value: 24, suffix: '/7' },
];

export function StatsSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 left-1/3 w-96 h-96 bg-action-600/20 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} active={inView} delay={idx * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, active, delay }: { stat: Stat; active: boolean; delay: number }) {
  const Icon = stat.icon;
  const count = useCountUp(stat.value, active);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-action-600/15 border border-action-600/30 rounded-2xl mb-5">
        <Icon className="h-8 w-8 text-action-400" />
      </div>
      <div className="text-5xl md:text-6xl font-extrabold text-white font-display tabular-nums tracking-tight">
        {stat.prefix}
        {count}
        <span className="text-action-400">{stat.suffix}</span>
      </div>
      <p className="text-navy-200 text-sm md:text-base font-medium mt-3 uppercase tracking-wider">
        {stat.label}
      </p>
    </div>
  );
}
