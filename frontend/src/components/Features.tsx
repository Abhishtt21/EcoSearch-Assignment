import { motion } from "framer-motion";
import { Leaf, LayoutDashboard, Lock, Grid } from "lucide-react";

const features = [
  {
    icon: <LayoutDashboard className="text-green-600 w-10 h-10" />,
    title: "Climate Driven",
    description:
      "We put the revenue earned to work with climate investments in renewables and plantation drives.",
  },
  {
    icon: <Leaf className="text-green-600 w-10 h-10" />,
    title: "Optimized Search",
    description:
      "We provide quality search results, reducing energy consumption by 300%.",
  },
  {
    icon: <Lock className="text-green-600 w-10 h-10" />,
    title: "Privacy First",
    description:
      "We don't collect or store any data. We are a privacy-focused AI search engine.",
  },
  {
    icon: <Grid className="text-green-600 w-10 h-10" />,
    title: "Minimal Design",
    description:
      "Our design system is minimal to reduce the carbon footprints with user interaction.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-green-50 text-center px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Build Sustainable Systems <br />
        <span className="text-green-600">With Your Search</span>
      </motion.h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
