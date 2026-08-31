import type { Metadata } from "next";

export const siteUrl = "https://www.nexifire.com.au";

type PageMetadataOptions = {
  description: string;
  pathname: string;
  title: string;
};

export const createPageMetadata = ({
  description,
  pathname,
  title,
}: PageMetadataOptions): Metadata => ({
  title,
  description,
  alternates: {
    canonical: new URL(pathname, siteUrl).toString(),
  },
});

export const createCanonicalMetadata = (pathname: string): Metadata => ({
  alternates: {
    canonical: new URL(pathname, siteUrl).toString(),
  },
});
