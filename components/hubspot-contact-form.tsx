"use client";

import HubspotForm from "react-hubspot-form";

const HubspotContactForm = () => {
  return (
    <>
      <HubspotForm
        portalId={"48222835"}
        formId={"d0eb35ed-0415-444d-9f05-7db4ad1023f9"}
        loading={<div>Loading...</div>}
      />
    </>
  );
};

export default HubspotContactForm;
