import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lakshith S Lokesh Portfolio",
    short_name: "Lakshith Portfolio",
    description: "Professional portfolio of Lakshith S Lokesh.",
    start_url: "/",
    display: "browser",
    background_color: "#08090b",
    theme_color: "#08090b",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
