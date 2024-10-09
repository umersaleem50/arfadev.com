"use client";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import PaginationSearchParams from "@/components/pagination-search-params";

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and start building your first app.",
    tags: ["React", "JavaScript"],
    image: "/card.jpg?height=400&width=600",
  },
  {
    id: 2,
    title: "Advanced TypeScript Techniques",
    excerpt: "Dive deep into TypeScript and learn advanced concepts.",
    tags: ["TypeScript", "JavaScript"],
    image: "/card.jpg?height=200&width=300",
  },
  {
    id: 3,
    title: "CSS Grid Layout Mastery",
    excerpt: "Master CSS Grid and create complex layouts with ease.",
    tags: ["CSS", "Web Design"],
    image: "/card.jpg?height=200&width=300",
  },
  {
    id: 4,
    title: "Node.js Best Practices",
    excerpt:
      "Discover the best practices for building scalable Node.js applications.",
    tags: ["Node.js", "Backend"],
    image: "/card.jpg?height=200&width=300",
  },
  {
    id: 5,
    title: "Introduction to GraphQL",
    excerpt: "Learn how to use GraphQL to build efficient APIs.",
    tags: ["GraphQL", "API"],
    image: "/card.jpg?height=200&width=300",
  },
  {
    id: 6,
    title: "Responsive Web Design Techniques",
    excerpt: "Create websites that look great on any device.",
    tags: ["CSS", "Web Design"],
    image: "/card.jpg?height=200&width=300",
  },
  {
    id: 7,
    title: "State Management with Redux",
    excerpt:
      "Learn how to manage complex state in your React applications using Redux.",
    tags: ["React", "Redux"],
    image: "/card.jpg?height=200&width=300",
  },
  {
    id: 8,
    title: "Building RESTful APIs with Express",
    excerpt: "Create robust and scalable APIs using Express.js and Node.js.",
    tags: ["Node.js", "API"],
    image: "/card.jpg?height=200&width=300",
  },
];

// All unique tags
const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

export default function BlogListing({ params }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTags.length === 0 ||
        selectedTags.some((tag) => post.tags.includes(tag)))
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Cover Image */}
      <div className="relative h-[50vh]">
        <Image
          src="/card.jpg?height=400&width=1200"
          alt="Blog Cover"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Our Blog
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8 flex w-full self-center justify-between gap-x-4">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 "
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
              size={20}
            />
          </div>
          <Button variant={"default"} className="px-8">
            Search
          </Button>
        </div>

        {/* Tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Featured Blog Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Large Featured Post */}
          <Card className="lg:col-span-2 col-start-1">
            <CardHeader className="p-0">
              <Image
                src={"/card.jpg"}
                alt={"card"}
                width={600}
                height={400}
                layout="responsive"
                className="rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-6">
              <time className="font-sans mb-4 text-primary">
                {new Date().toDateString()}
              </time>
              <CardTitle className="mb-2 text-2xl font-serif">
                {filteredPosts[0]?.title}
              </CardTitle>
              <p className=" mb-4">{filteredPosts[0]?.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {filteredPosts[0]?.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-full">
                Read More
              </Button>
            </CardFooter>
          </Card>

          {/* Smaller Featured Posts */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              Featured Blogs
            </h2>
            {filteredPosts.slice(1, 4).map((post) => (
              <Card key={post.id} className="flex flex-row h-auto">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={120}
                  height={120}
                  className="rounded-l-lg object-cover"
                />
                <CardContent className="p-4 gap-y-2 flex flex-col justify-between">
                  <CardTitle className="text-lg font-serif">
                    {post.title}
                  </CardTitle>
                  <CardDescription>
                    Learn how I helped chishti law firm for 3x traffic, in just
                    one week.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(4).map((post, index) => (
            <Card
              key={post.id}
              className={`
                ${index % 3 === 0 ? "md:col-span-2 lg:col-span-1" : ""}
              `}
            >
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  layout="responsive"
                  className="rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2 font-serif">{post.title}</CardTitle>
                <p className="text-sm mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <PaginationSearchParams />
      </div>
    </div>
  );
}
