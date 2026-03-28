import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const AboutContent = () => {
  return (
    <section id="about" className="py-32 container mx-auto px-6 bg-white">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT VISUAL */}
        <div className="relative">
          <div className="aspect-square bg-slate-100 rounded-[4rem] p-4">
            <div className="w-full h-full border-2 border-dashed border-[#111111] rounded-[3rem] flex items-center justify-center">
              <span className="text-6xl font-black text-[#333333] opacity-10">
                RM
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-bold uppercase tracking-[0.3em] text-xs text-[#111111]">
            The Mission
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-3 text-[#333333]">
            Profil Profesional
          </h2>

          <div className="w-12 h-1.5 mt-6 rounded-full bg-[#111111]" />

          <p className="md:text-[20px] leading-relaxed mt-8 mb-10 text-[#666666]">
            Lulusan Sistem Informasi Universitas Sriwijaya dengan 
            keahlian mendalam dalam analisis sistem, pengembangan web, 
            dan desain UI/UX. Berpengalaman memimpin tim IT dalam proyek 
            implementasi strategis dan berkontribusi dalam publikasi ilmiah 
            di bidang data mining dan rekayasa proses bisnis.
          </p>

          <button className="px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-transform hover:scale-105 bg-[#111111] text-white">
            Unduh CV <FileText size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;