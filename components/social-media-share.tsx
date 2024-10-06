"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Linkedin, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function ShareButtons({ className }: { className?: string }) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast("Link copied to clipboard!");
      })
      .catch((err) => {
        toast("Failed to copy link." );
      });
  };

  return (
    <div className={cn("flex flex-wrap gap-2 items-center", className)}>
      <span className="text-sm font-medium text-foreground font-sans">
        Share:
      </span>
      <Link href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="icon" aria-label="Share on Twitter">
          <Twitter className="h-4 w-4" />
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
      <Button
        variant="outline"
        size="icon"
        onClick={copyToClipboard}
        aria-label="Copy link"
      >
        <Link2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
