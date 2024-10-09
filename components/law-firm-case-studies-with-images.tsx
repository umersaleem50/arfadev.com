"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, Scale, Users, Award } from "lucide-react";
import Image from "next/image";

// Mock data for legal case studies
const caseStudies = [
  {
    id: 1,
    title: "Landmark Intellectual Property Victory",
    client: "Tech Innovations Corp.",
    practice: "Intellectual Property",
    outcome: "Patent Upheld",
    duration: "18 months",
    image:
      "https://images.pexels.com/photos/19295214/pexels-photo-19295214/free-photo-of-town-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Complex Merger Acquisition",
    client: "Global Enterprises Ltd.",
    practice: "Corporate Law",
    outcome: "$500M Deal Closed",
    duration: "6 months",
    image:
      "https://images.pexels.com/photos/13871553/pexels-photo-13871553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "High-Profile Environmental Lawsuit",
    client: "EcoGuard Foundation",
    practice: "Environmental Law",
    outcome: "$100M Settlement",
    duration: "24 months",
    image:
      "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "International Arbitration Success",
    client: "Worldwide Trading Co.",
    practice: "International Law",
    outcome: "Favorable Ruling",
    duration: "12 months",
    image:
      "https://images.pexels.com/photos/840666/pexels-photo-840666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Groundbreaking Civil Rights Case",
    client: "Equality Now Group",
    practice: "Civil Rights",
    outcome: "Precedent Set",
    duration: "36 months",
    image:
      "https://images.pexels.com/photos/849835/pexels-photo-849835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "Major Corporate Restructuring",
    client: "Renewal Industries Inc.",
    practice: "Bankruptcy Law",
    outcome: "Company Saved",
    duration: "9 months",
    image:
      "https://images.pexels.com/photos/849835/pexels-photo-849835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function LawFirmCaseStudies() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCaseStudies = caseStudies.filter(
    (study) =>
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.practice.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-background">
      {/* <div className="relative h-[70vh] min-h-[400px] w-full px-2">
        {
          <Image
            alt={caseStudies[1]?.title}
            className="object-cover"
            fill
            src={caseStudies[1].image}
          />
        }
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"></div>
      </div> */}
      <div className="max-w-[85rem] mx-auto py-12 mt-12">
        <h1 className="font-serif text-3xl text-left z-10 col-start-1 col-span-8 w-[80vw] lg:w-auto">
          {"Our Portfolio"}
        </h1>
        <p className="font-sans text-lg mt-4">
          Get a website today, & be among the best attornies.
        </p>
        <section className="max-w-[85rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24 pt-8">
          {filteredCaseStudies.map((study) => (
            <Card
              key={study.id}
              className="bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Image
                src={study.image}
                alt={study.title}
                width={300}
                height={200}
                className="w-full h-[200px] object-cover"
              />
              <CardHeader className="bg-primary text-white">
                <CardTitle className="font-serif">{study.title}</CardTitle>
                <CardDescription className="text-white font-sans">
                  {study.client}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 self-end justify-end">
                <div className="flex justify-between items-center mb-4">
                  <Badge
                    variant="secondary"
                    // className="bg-stone-200 text-stone-800"
                  >
                    {study.practice}
                  </Badge>
                  <span className="text-base font-sans text-secondary">
                    {study.duration}
                  </span>
                </div>
                <div className="flex justify-between gap-y-4 flex-col">
                  <span className="font-bold text-lg text-black font-serif">
                    {study.outcome}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="dark:text-secondary hover:dark:text-secondary-foreground"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {filteredCaseStudies.length === 0 && (
          <p className="text-center text-stone-500 mt-8">
            No case studies found. Try a different search term.
          </p>
        )}
      </div>
    </div>
  );
}
