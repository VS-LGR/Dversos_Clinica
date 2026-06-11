declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type ContactChannel = "whatsapp" | "phone" | "map" | "instagram" | "facebook";

function fireGtag(...args: unknown[]) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag(...args);
}

export function trackLead(params: {
  method: string;
  content_type?: string;
  content_name?: string;
}) {
  fireGtag("event", "generate_lead", {
    method: params.method,
    content_type: params.content_type ?? "contact",
    content_name: params.content_name,
  });
}

export function trackContactClick(
  channel: ContactChannel,
  label?: string
) {
  if (channel === "whatsapp") {
    trackLead({
      method: "whatsapp",
      content_type: "contact_link",
      content_name: label,
    });
    return;
  }

  if (channel === "phone") {
    fireGtag("event", "click_to_call", {
      method: "phone",
      content_name: label,
    });
    return;
  }

  fireGtag("event", "select_content", {
    content_type: "contact_link",
    content_id: channel,
    content_name: label,
  });
}
