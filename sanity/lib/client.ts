// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })

import { draftMode } from "next/headers";
import { createClient, type QueryOptions, type QueryParams } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";
import { token } from "./token";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: (!process.env.NEXT_PUBLIC_NOCDN as boolean) || false,
  stega: {
    enabled: true || process.env.NEXT_PUBLIC_VERCEL_ENV === "preview",
    studioUrl: "/studio",
  },
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && !token) {
    throw new Error("Missing environment variable SANITY_API_READ_TOKEN");
  }

  const queryOptions: QueryOptions = {
    perspective: "published",
    useCdn: (!process.env.NOCDN as boolean) || false,
  };
  let maybeRevalidate = revalidate;

  if (isDraftMode) {
    queryOptions.token = token;
    // this is causing the issue
    queryOptions.perspective = "previewDrafts";
    queryOptions.stega = false;
    queryOptions.cache = "no-cache";
    queryOptions.useCdn = false;

    // Do not cache in Draft Mode
    maybeRevalidate = 0;
  } else if (tags.length) {
    // Cache indefinitely if tags supplied, purge with revalidateTag()
    maybeRevalidate = false;
  }

  return client.fetch<QueryResponse>(query, params, {
    ...queryOptions,
    next: {
      revalidate: maybeRevalidate,
      tags,
    },
  });
}
