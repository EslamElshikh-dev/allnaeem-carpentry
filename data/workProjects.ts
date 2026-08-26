export type WorkProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  description: string;
  category: string;
  status: "عمل منجز" | "أثناء التنفيذ";
  objectPosition?: string;
};

export const workProjectImages = [
  {
    src: "/images/projects/custom-cabinet-wall.webp",
    width: 640,
    height: 400,
    alt: "وحدة خزائن ورفوف خشبية بإضاءة داخلية من أعمال النعيم للمقاولات وأعمال النجارة في الرياض",
    title: "وحدة خزائن ورفوف بتفصيل مخصص",
    description:
      "نموذج منفذ لخزائن ورفوف خشبية بتوزيع عملي وإضاءة داخلية تبرز تفاصيل التشطيب.",
    category: "تفصيل خزائن",
    status: "عمل منجز",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/projects/mirrored-wardrobe.webp",
    width: 512,
    height: 640,
    alt: "دولاب ملابس بأبواب مرايا وإطارات داكنة من أعمال النجارة المنفذة في الرياض",
    title: "دولاب ملابس بأبواب مرايا",
    description:
      "دولاب مفصل حسب المساحة بأبواب مرايا وإطارات داكنة وتكوين مناسب للاستخدام اليومي.",
    category: "تفصيل دواليب",
    status: "عمل منجز",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/projects/tv-wall-unit-process.webp",
    width: 240,
    height: 300,
    alt: "وحدة شاشة وجدار خشبي أثناء التنفيذ من أعمال النعيم للمقاولات وأعمال النجارة في الرياض",
    title: "وحدة شاشة وجدار خشبي",
    description:
      "توثيق من موقع العمل أثناء تجهيز وتركيب وحدة الشاشة والجدار الخشبي قبل التسليم النهائي.",
    category: "نجارة عامة",
    status: "أثناء التنفيذ",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/projects/wooden-entry-door-process.webp",
    width: 240,
    height: 300,
    alt: "باب مدخل خشبي أثناء التركيب من أعمال النعيم للمقاولات وأعمال النجارة في الرياض",
    title: "باب مدخل خشبي",
    description:
      "صورة من مرحلة تركيب وضبط باب المدخل الخشبي في موقع العمل قبل اكتمال التشطيب.",
    category: "أعمال أبواب",
    status: "أثناء التنفيذ",
    objectPosition: "50% 45%",
  },
  {
    src: "/images/projects/illuminated-wardrobe-process.webp",
    width: 240,
    height: 300,
    alt: "خزانة زاوية بإضاءة داخلية أثناء التنفيذ من أعمال النجارة في الرياض",
    title: "خزانة مضيئة بتفصيل زاوية",
    description:
      "توثيق لمرحلة تنفيذ خزانة بتوظيف الزاوية وإضاءة داخلية قبل الانتهاء من تجهيز الموقع.",
    category: "تفصيل خزائن",
    status: "أثناء التنفيذ",
    objectPosition: "50% 50%",
  },
] as const satisfies readonly WorkProjectImage[];

export const featuredWorkImage = workProjectImages[0];
