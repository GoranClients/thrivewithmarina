import Link from "next/link";

import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-vista-white px-5 py-24 text-center">
      <h1 className="font-display text-5xl tracking-[-0.04em] text-marsh">
        404
      </h1>
      <p className="mt-4 max-w-md text-lg text-grullo">
        This page could not be found.
      </p>
      <div className="mt-10">
        <Button href="/" variant="dark">
          Back to home
        </Button>
      </div>
    </main>
  );
}
