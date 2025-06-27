"use client";

import { useCallback } from "react";
import Script from "next/script";

const HubspotContactForm = () => {
  const handleLoad = useCallback(() => {
    if ((window as any).hbspt) {
      (window as any).hbspt.forms.create({
        portalId: "48222835",
        formId: "d0eb35ed-0415-444d-9f05-7db4ad1023f9",
        target: "#hubspotForm",
      });
    }
  }, []);

  return (
    <>
      <Script
        src="https://js.hsforms.net/forms/v2.js"
        strategy="afterInteractive"
        onLoad={handleLoad}
      />
      <div id="hubspotForm" className="w-full" />
    </>
  );
};

export default HubspotContactForm;
