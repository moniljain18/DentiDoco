import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {SignedIn, SignOutButton, SignUpButton,SignedOut } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
<div>
  <h1>home page</h1>
  <SignedOut>
  <SignUpButton mode="modal">sign up</SignUpButton>
  </SignedOut>

 <SignedIn>
  <SignOutButton>Log OUT</SignOutButton>
  </SignedIn>
</div>
  );
}
