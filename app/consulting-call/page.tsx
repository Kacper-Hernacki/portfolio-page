import Script from "next/script";

export default function ConsultingCallPage() {
  return (
    <>
      {/* <!-- Calendly inline widget begin -->*/}
      <div className="calendly-inline-widget" data-url="https://calendly.com/moderndev/30min" style={{ minWidth: "100vw", height: "100vh" }}></div>
      <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
      {/* <!-- Calendly inline widget end -->*/}
    </>

  );
}
