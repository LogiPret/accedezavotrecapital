"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after a brief moment
    router.replace("/");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          Redirection en cours...
        </h1>
        <p className="text-muted-foreground">
          Vous allez être redirigé vers la page d&apos;accueil.
        </p>
      </div>
    </div>
  );
}
