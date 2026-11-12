import { useEffect } from "react";
import { Icon } from "./ui/Icon";

const LUMA_SCRIPT_ID = "luma-checkout";
const LUMA_SCRIPT_SRC = "https://embed.lu.ma/checkout-button.js";
const LUMA_EVENT_ID = "evt-0n0iJ19v0AD6uRS";
const LUMA_EVENT_URL = `https://luma.com/event/${LUMA_EVENT_ID}`;

export default function LumaCheckoutButton() {
  useEffect(() => {
    if (document.getElementById(LUMA_SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = LUMA_SCRIPT_ID;
    script.src = LUMA_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <a
      href={LUMA_EVENT_URL}
      className="btn btn-primary btn-sm luma-floating-cta"
      data-luma-action="checkout"
      data-luma-event-id={LUMA_EVENT_ID}
    >
      <Icon name="spark" size={14} aria-hidden="true" />
      <span>Register</span>
    </a>
  );
}

