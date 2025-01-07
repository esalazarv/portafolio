import type { Metadata } from "next";
import Landing from "./(landing)/page";

export const metadata: Metadata = {
  title: "Eduardo Salazar | Full Stack Developer",
  description:
    "Full Stack Developer specializing in modern web technologies and scalable architectures",
};

export default function Home() {
  return <Landing />;
}
