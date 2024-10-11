"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";

import deskStucture from "./sanity/deskStucture";
import { presentationTool } from "sanity/presentation";
import { resolve } from "./sanity/presentation/resolve";

import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";

import { schemaMarkup } from "@operationnation/sanity-plugin-schema-markup";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    codeInput(),
    table(),

    schemaMarkup(),

    structureTool({ structure: deskStucture }),
    visionTool({ defaultApiVersion: apiVersion }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin

    presentationTool({
      resolve: resolve,
      // previewUrl: santiyPreviewURL,
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL,
        draftMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],
});
