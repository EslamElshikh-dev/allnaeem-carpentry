import { Icon } from "@/components/Icon";
import {
  PHONE_E164,
  buildWhatsAppUrl,
  defaultWhatsAppMessage,
} from "@/data/site";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 left-4 z-50 flex flex-col gap-3 sm:bottom-7 sm:left-6">
      <a
        href={buildWhatsAppUrl(defaultWhatsAppMessage)}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل عبر واتساب"
        className="floating-action floating-action-whatsapp group"
      >
        <Icon name="whatsapp" className="size-6" />
        <span className="floating-tooltip">واتساب</span>
      </a>
      <a
        href={`tel:${PHONE_E164}`}
        aria-label="اتصال مباشر"
        className="floating-action floating-action-call group"
      >
        <Icon name="phone" className="size-6" />
        <span className="floating-tooltip">اتصال مباشر</span>
      </a>
    </div>
  );
}
