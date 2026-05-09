"use client";
import ButtonCopy from "@/components/CopyButton";
import { Copy } from "lucide-react";
import { toast } from "sonner";

function ButtonCopyEmail() {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("umersaleem50@gmail.com").catch(() => {
      toast("Failed to copy email.");
    });
  };

  return (
    <ButtonCopy onCopy={copyEmailToClipboard}>
      <Copy className="mr-2" />
      Copy Email
    </ButtonCopy>
  );
}

export default ButtonCopyEmail;
