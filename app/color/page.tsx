import React from "react";

// --background: 42 38% 91%;
//     --foreground: 206 85% 8%;
//     --card: 23 43% 74%;
//     --card-foreground: 206 85% 8%;
//     --popover: 187 33% 26%;
//     --popover-foreground: 23 43% 74%;
//     --primary: 181 34% 34%;
//     --primary-foreground: 42 38% 91%;
//     --secondary: 23 43% 74%;
//     --secondary-foreground: 206 85% 8%;
//     --muted: 186 34% 34%;
//     --muted-foreground: 32 27% 84%;
//     --accent: 186 34% 34%;
//     --accent-foreground: 32 27% 74%;
//     --destructive: 0 84.2% 60.2%;
//     --destructive-foreground: 206 85% 8%;
//     --border: 181 34% 34%;
//     --input: 181 34% 34%;
//     --ring: 181 34% 34%;
//     --radius: 0rem;
//     --chart-1: 17 42% 57%;
//     --chart-2: 32 27% 74%;
//     --chart-3: 186 34% 34%;
//     --chart-4: 187 34% 26%;
//     --chart-5: 206 85% 28%;

function page() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="bg-background w-40 border border-white h-40 block">
          --background
        </div>
        <div className="bg-foreground w-40 border border-white h-40 block">
          --foreground
        </div>
        <div className="bg-card w-40 border border-white h-40 block">
          --card
        </div>
        <div className="bg-card-foreground w-40 border border-white h-40 block">
          --card-foreground
        </div>
        <div className="bg-popover w-40 border border-white h-40 block">
          --popover
        </div>
        <div className="bg-popover-foreground w-40 border border-white h-40 block">
          --popover-foreground
        </div>
        <div className="bg-primary w-40 border border-white h-40 block">
          --primary
        </div>
        <div className="bg-primary-foreground w-40 border border-white h-40 block">
          --primary-foreground
        </div>
        <div className="bg-secondary w-40 border border-white h-40 block">
          --secondary
        </div>
        <div className="bg-secondary-foreground w-40 border border-white h-40 block">
          --secondary-foreground
        </div>
        <div className="bg-muted w-40 border border-white h-40 block">
          --muted
        </div>
        <div className="bg-muted-foreground w-40 border border-white h-40 block">
          --muted-foreground
        </div>
        <div className="bg-accent w-40 border border-white h-40 block">
          --accent
        </div>
        <div className="bg-accent-foreground w-40 border border-white h-40 block">
          --accent-foreground
        </div>
        <div className="bg-destructive w-40 border border-white h-40 block">
          --destructive
        </div>
        <div className="bg-destructive-foreground w-40 border border-white h-40 block">
          --destructive-foreground
        </div>
        <div className="bg-border w-40 border border-white h-40 block">
          --border
        </div>
        <div className="bg-ring w-40 border border-white h-40 block">
          --ring
        </div>
        <div className="bg-chart-1 w-40 border border-white h-40 block">
          --chart-1
        </div>
        <div className="bg-chart-2 w-40 border border-white h-40 block">
          --chart-2
        </div>
        <div className="bg-chart-3 w-40 border border-white h-40 block">
          --chart-3
        </div>
        <div className="bg-chart-4 w-40 border border-white h-40 block">
          --chart-4
        </div>
        <div className="bg-chart-5 w-40 border border-white h-40 block">
          --chart-5
        </div>
      </div>
    </>
  );
}

export default page;
