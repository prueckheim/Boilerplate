// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}));

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/*.md`,
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (page) => `/${page._raw.flattenedPath}`,
    },
  },
}));



export default makeSource({ contentDirPath: "data", documentTypes: [Post, Page] });
