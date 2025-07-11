
import React from 'react';

interface Metric {
  value: string;
  label: string;
  description: string;
}

export const MetricsSection: React.FC = () => {
  const metrics: Metric[] = [
    {
      value: "1Bn+",
      label: "Daily searches",
      description: "Number of searches on ChatGPT only"
    },
    {
      value: "12%",
      label: "Search similarity",
      description: "Only 12% of results are similar between Google and ChatGPT"
    },
    {
      value: "2X",
      label: "Conversion Rate",
      description: "Users coming from ChatGPT convert at a much higher rate"
    }
  ];

  return (
    <section className="py-20 px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="text-5xl md:text-6xl font-bold text-[#FDF6E3] mb-2">
                {metric.value}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#FDF6E3] mb-2">
                {metric.label}
              </h3>
              <p className="text-lg text-[#FDF6E3]/80 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
