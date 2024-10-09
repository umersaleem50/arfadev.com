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
import { useSearchParams } from "next/navigation";

function PaginationSearchParams() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 2);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious isActive={false} href={`?page=${page - 1 - 1}`} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`?page=${page - 1}`}>{page - 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`?page=${page}`} isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`?page=${page + 1}`}>{page + 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`?page=${page + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationSearchParams;
