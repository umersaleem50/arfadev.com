"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Facebook, Linkedin, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ButtonCopy from "./CopyButton";

export default function ShareButtons({ className }: { className?: string }) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const shareLinks = {
    twitter: `https://x.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl).catch((err) => {
      toast("Failed to copy link.");
    });
  };

  return (
    <div className={cn("flex flex-wrap gap-2 items-center", className)}>
      <span className="text-sm font-medium text-foreground font-sans">
        Share:
      </span>
      <Link href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="icon" aria-label="Share on Twitter">
          <X className="h-4 w-4" />
        </Button>
      </Link>
      <Link
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="icon" aria-label="Share on Facebook">
          <Facebook className="h-4 w-4" />
        </Button>
      </Link>
      <Link
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="icon" aria-label="Share on LinkedIn">
          <Linkedin className="h-4 w-4" />
        </Button>
      </Link>
      <ButtonCopy
        className={"border"}
        onCopy={copyToClipboard}
        aria-label="Copy link"
      ></ButtonCopy>
    </div>
  );
}
