"use client";

import { useAuth, useSignIn, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Files() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.replace("/sign-in");
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) {
    return <div>Redirecting to sign-in...</div>;
  }

  return (
    <div>
      <h1>Files</h1>
      <SignOutButton />
    </div>
  );
}

function SignOutButton() {
  const { clerk, isLoaded } = useClerk();

  const handleSignOut = () => {
    if (isLoaded) {
      clerk.signOut();
    }
  };

  return (
    <button
      onClick={handleSignOut}
      style={{
        padding: "8px 16px",
        backgroundColor: "#ef4444",
        color: "white",
        borderRadius: "8px",
        marginTop: "16px",
        cursor: "pointer",
      }}
    >
      Sign Out
    </button>
  );
}
