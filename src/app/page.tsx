import CTA from "@/components/Landing/CTA";
import Footer from "@/components/Landing/Footer";
import Header from "@/components/Landing/Header";
import Hero from "@/components/Landing/Hero";
import Howitworks from "@/components/Landing/Howitworks";
import Pricing from "@/components/Landing/Pricing";
import Whattoask from "@/components/Landing/Whattoask";
import Head from "next/head";
import Image from "next/image";


export default function Home() {
  return (
<div className="min-h-screen bg-background">
  <Header/>
  <Hero/>
  <Howitworks/>
  <Whattoask/>
  <Pricing/>
  <CTA/>
</div>
  );
}
