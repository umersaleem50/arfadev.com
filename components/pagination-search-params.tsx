"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

function PaginationSearchParams() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber <= 0) {
      params.set("page", "1");
    } else params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination className="lg:py-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={createPageURL(page - 1)} />
        </PaginationItem>
        {page > 1 && (
          <PaginationItem>
            <PaginationLink href={createPageURL(page - 1)}>
              {page - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href={createPageURL(page)} isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={createPageURL(page + 1)}>
            {page + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={createPageURL(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationSearchParams;
