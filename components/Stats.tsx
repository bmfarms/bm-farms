import { Fish, Bird, Factory, Package, Sun } from 'lucide-react';

const stats = [
  {
    icon: <Bird className="w-8 h-8 text-green-700" />,
    value: "500,000+",
    label: "Broiler Capacity",
    subtext: "18 Environment Houses"
  },
  {
    icon: <Fish className="w-8 h-8 text-green-700" />,
    value: "2,000 Acres",
    label: "Fish Farming",
    subtext: "2,500+ Tons Annual Supply"
  },
  {
    icon: <Factory className="w-8 h-8 text-green-700" />,
    value: "120,000",
    label: "Bags / Month",
    subtext: "High-Capacity Feed Output"
  },
  {
    icon: <Package className="w-8 h-8 text-green-700" />,
    value: "3,600 Tons",
    label: "PP Bags / Year",
    subtext: "Industrial Packaging"
  },
  {
    icon: <Sun className="w-8 h-8 text-green-700" />,
    value: "50 MW",
    label: "Solar Energy Project",
    subtext: "Clean Energy Output"
  }
];

export default function Stats() {
  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition"
            >
              <div className="mb-3 p-3 bg-green-50 rounded-full">
                {item.icon}
              </div>
              <span className="text-xl sm:text-2xl font-extrabold text-gray-900">
                {item.value}
              </span>
              <span className="text-sm font-bold text-green-800 mt-1">
                {item.label}
              </span>
              <span className="text-xs text-gray-500 mt-1">
                {item.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}