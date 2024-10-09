"use client";
import React from "react";
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

import PaginationSearchParams from "@/components/pagination-search-params";
import BlogsTags from "./blogs-tag";

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and start building your first app.",
    tags: ["React", "JavaScript"],
    image:
      "https://images.pexels.com/photos/793166/pexels-photo-793166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Advanced TypeScript Techniques",
    excerpt: "Dive deep into TypeScript and learn advanced concepts.",
    tags: ["TypeScript", "JavaScript"],
    image:
      "https://images.pexels.com/photos/358312/pexels-photo-358312.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "CSS Grid Layout Mastery",
    excerpt: "Master CSS Grid and create complex layouts with ease.",
    tags: ["CSS", "Web Design"],
    image:
      "https://images.pexels.com/photos/19295214/pexels-photo-19295214/free-photo-of-town-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Node.js Best Practices",
    excerpt:
      "Discover the best practices for building scalable Node.js applications.",
    tags: ["Node.js", "Backend"],
    image:
      "https://images.pexels.com/photos/13871553/pexels-photo-13871553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Introduction to GraphQL",
    excerpt: "Learn how to use GraphQL to build efficient APIs.",
    tags: ["GraphQL", "API"],
    image:
      "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    title: "Responsive Web Design Techniques",
    excerpt: "Create websites that look great on any device.",
    tags: ["CSS", "Web Design"],
    image:
      "https://images.pexels.com/photos/840666/pexels-photo-840666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    title: "State Management with Redux",
    excerpt:
      "Learn how to manage complex state in your React applications using Redux.",
    tags: ["React", "Redux"],
    image:
      "https://images.pexels.com/photos/849835/pexels-photo-849835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    title: "Building RESTful APIs with Express",
    excerpt: "Create robust and scalable APIs using Express.js and Node.js.",
    tags: ["Node.js", "API"],
    image:
      "https://images.pexels.com/photos/163194/old-retro-antique-vintage-163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// All unique tags

function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTags.length === 0 ||
        selectedTags.some((tag) => post.tags.includes(tag)))
  );

  return (
    <div className="w-full">
      {/* Cover Image */}
      <div className="relative h-[50vh]">
        <Image
          src="https://images.pexels.com/photos/4427813/pexels-photo-4427813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Blog Cover"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-center text-white">
            Stay up-to-date with legal world.
          </h1>
        </div>
      </div>

      <div className="px-4 py-8 max-w-[85rem] mx-auto">
        {/* Search Bar */}
        <div className="mb-8 flex w-full self-center justify-between gap-x-4 items-center">
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
        <BlogsTags posts={blogPosts} />

        {/* Featured Blog Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Large Featured Post */}
          <Card className="lg:col-span-2 col-start-1">
            <CardHeader className="p-0">
              <Image
                src={
                  "https://images.pexels.com/photos/5990047/pexels-photo-5990047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt={"card"}
                width={600}
                height={300}
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
          <div className="space-y-6 sticky top-0 self-start">
            <h2 className="text-2xl mb-4 font-serif">Featured Blogs</h2>
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
        <h2 className="text-2xl font-serif">Recommended Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className={`
                ${index % 3 === 0 ? "md:col-span-2 lg:col-span-1" : ""}
              `}
            >
              <CardHeader className="p-0 h-[300px] w-full relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  objectFit="cover"
                  // layout="responsive"
                  // className="rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2 font-serif">{post.title}</CardTitle>
                <p className="text-sm mb-4 line-clamp-1">{post.excerpt}</p>
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

export default BlogsPage;
