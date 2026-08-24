import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <main className="grid min-h-[65vh] place-items-center bg-sand-50 px-4 py-20 text-center">
      <div className="max-w-xl">
        <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-brand-950 text-white shadow-xl shadow-brand-950/20"><Icon name="hammer" className="size-8" /></span>
        <p className="mt-7 text-sm font-black text-wood-700">404</p>
        <h1 className="mt-3 text-3xl font-black text-brand-950 sm:text-4xl">الصفحة غير موجودة</h1>
        <p className="mt-4 text-base leading-8 text-slate-600">قد يكون الرابط تغير أو كُتب بطريقة غير صحيحة. يمكنك العودة إلى الصفحة الرئيسية أو تصفح خدمات النجارة.</p>
        <Link href="/" className="button-primary mx-auto mt-7 min-h-12 w-fit px-6">العودة للرئيسية <Icon name="arrow-left" className="size-5" /></Link>
      </div>
    </main>
  );
}
