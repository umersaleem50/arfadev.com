import React from "react";
import { ProfileForm } from "../form";

function ContactModule() {
  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="col-span-4 col-start-7">
        <ProfileForm />
      </div>
    </div>
  );
}

export default ContactModule;
