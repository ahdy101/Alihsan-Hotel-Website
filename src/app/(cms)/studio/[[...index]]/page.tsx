"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config"; // Fixed path

export default function StudioPage() { // Better naming convention
  return <NextStudio config={config} />;
}