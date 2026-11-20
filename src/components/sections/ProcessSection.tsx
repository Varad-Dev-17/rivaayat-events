import React, { useState } from 'react';
import { PROCESS_STEPS } from '../../data/content';
import { SectionHeading } from '../common/SectionHeading';
import { CheckCircle2, Clock } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Process"
          title="How We Bring Your"
          highlight="Vision to Life"
          subtitle="A seamless 5-stage journey from initial consultation to the grand celebration."
        />

        {/* Step Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {PROCESS_STEPS.map((step, index) => {
            const isActive = index === activeStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(index)}
                className={`p-4 rounded-xl text-center transition-all duration-200 border flex flex-col items-center justify-center ${
                  isActive
                    ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                    : 'bg-white text-charcoal border-rangoli-border hover:border-amber-400'
                }`}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-1.5 ${
                  isActive ? 'bg-white text-amber-600' : 'bg-amber-50 text-amber-600'
                }`}>
                  {step.step}
                </span>
                <span className="font-heading text-sm font-semibold leading-tight">
                  {step.title.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Details on Pure White background */}
        <div className="rounded-2xl bg-white border border-rangoli-border p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-wider text-amber-600 font-bold block mb-1">
                Stage {currentStep.step} • {currentStep.sanskritName}
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl text-charcoal font-semibold mb-3">
                {currentStep.title}
              </h3>

              <p className="text-sm font-medium text-amber-600 italic mb-4">
                "{currentStep.tagline}"
              </p>

              <p className="text-base text-charcoal-muted leading-relaxed font-light mb-6">
                {currentStep.description}
              </p>

              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-charcoal mb-3">
                  Key Deliverables:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {currentStep.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-amber-50/50 border border-amber-200/60 flex items-center gap-2 text-xs font-medium text-charcoal"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-6 rounded-xl bg-rangoli-bg border border-rangoli-border text-center flex flex-col items-center">
                <Clock className="w-6 h-6 text-amber-500 mb-2" />
                <span className="text-xs uppercase tracking-wider text-charcoal-muted font-medium mb-1">
                  Duration
                </span>
                <span className="font-heading text-2xl font-bold text-charcoal mb-1">
                  {currentStep.duration}
                </span>
                <p className="text-xs text-charcoal-muted font-light">
                  Carefully coordinated by our lead event planners.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
