// IMPORT IMAGE (SESUAIKAN PATH)
import himsiFeed from "../../assets/design/himsifeed.webp";
import caktadentFeed from "../../assets/design/caktadentfeed.webp";
import calonFeed from "../../assets/design/calonfeed.webp";

import ipadMacTablet from "../../assets/icons/project/caktadent.webp";
import ipadMacMac from "../../assets/icons/project/caktadent.webp";

import ipadWatchTablet from "../../assets/icons/project/caktadent.webp";
import ipadWatchWatch from "../../assets/icons/project/caktadent.webp";

export const DATA_DESIGN = {
  iphone: {
    title: "Instagram Feed Design",
    description:
      "Desain template feed Instagram untuk organisasi HIMSI FASILKOM Universitas Sriwijaya yang digunakan selama satu periode kepengurusan.Template ini dibuat untuk menjaga konsistensi visual konten media sosial serta memudahkan tim media dalam membuat berbagai jenis konten seperti laporan kegiatan, pengumuman, informasi penting, dan peringatan hari besar nasional.",
    tabletImg: himsiFeed,
    phoneImg: himsiFeed,
    showPhone: true,
  },
  mac: {
    title: "Corporate Social Media Design",
    description:
      "Desain konten Instagram untuk brand Caktadent Indonesia dengan konsep visual korporat dan profesional. Desain ini dirancang dengan pendekatan visual yang bersih dan modern, serta selaras dengan identitas warna brand guna memperkuat citra yang konsisten dan terpercaya di media sosial.",
    tabletImg: caktadentFeed,
    phoneImg: caktadentFeed,
    showPhone: true,
  },
  watch: {
    title: "Desain Feed Kampanye",
    description:
      "Desain feed Instagram kampanye calon dengan konsep modern dan komunikatif, menekankan konsistensi warna, tipografi jelas, serta tata letak terstruktur untuk menyampaikan informasi calon, visi-misi, dan program kerja secara efektif dan menarik.",
    tabletImg: calonFeed,
    phoneImg: calonFeed,
    showPhone: false,
  },
} as const;

export type DesignType = keyof typeof DATA_DESIGN;
