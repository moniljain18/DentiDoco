import CTA from "@/components/Landing/CTA";
import Footer from "@/components/Landing/Footer";
import Header from "@/components/Landing/Header";
import Hero from "@/components/Landing/Hero";
import Howitworks from "@/components/Landing/Howitworks";
import Pricing from "@/components/Landing/Pricing";
import Whattoask from "@/components/Landing/Whattoask";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Head from "next/head";
import Image from "next/image";


export default async function Home() {
  const user = await currentUser()
 //redirect auth user to dashboard 
 if (user) redirect ("/dashboard");

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
