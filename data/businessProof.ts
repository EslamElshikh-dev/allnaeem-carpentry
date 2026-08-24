export type BusinessProofImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  description: string;
  category: "المقر" | "مركبة العمل";
  objectPosition?: string;
};

export const businessProofImages = [
  {
    src: "/images/business-proof/premises-signage.avif",
    width: 360,
    height: 640,
    alt: "المقر الفعلي للنعيم للمقاولات وأعمال النجارة ولافتة النشاط في حي المصيف بالرياض",
    title: "المقر الفعلي واللافتة",
    description:
      "صورة أصلية للمقر في حي المصيف، وتظهر اللافتة الثابتة باسم النشاط ورقم التواصل المعلن.",
    category: "المقر",
    objectPosition: "50% 34%",
  },
  {
    src: "/images/business-proof/signage-detail.avif",
    width: 360,
    height: 640,
    alt: "صورة قريبة للافتة النعيم للمقاولات وأعمال النجارة ورقم الهاتف 0570210104",
    title: "تطابق الاسم ورقم التواصل",
    description:
      "لقطة قريبة توضّح اسم النعيم للمقاولات وأعمال النجارة والخدمات ورقم التواصل بصورة مباشرة.",
    category: "المقر",
    objectPosition: "50% 28%",
  },
  {
    src: "/images/business-proof/work-vehicle.avif",
    width: 360,
    height: 640,
    alt: "مركبة عمل النعيم للمقاولات وأعمال النجارة تحمل اسم النشاط ورقم التواصل في الرياض",
    title: "مركبة العمل المعلّمة",
    description:
      "مركبة العمل تحمل هوية النشاط ورقم التواصل، وتُستخدم للتنقل وتقديم الخدمات داخل مدينة الرياض.",
    category: "مركبة العمل",
    objectPosition: "50% 27%",
  },
] as const satisfies readonly BusinessProofImage[];

export const socialProofImage =
  "/images/business-proof/premises-signage.avif";
