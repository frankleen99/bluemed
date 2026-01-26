import type { NextPageContext } from "next";
import Link from "next/link";
// import { Button } from "@/components/common/button";

export default function NotFound({ statusCode }: { statusCode?: number }) {
  return (
    <main className="m-auto flex h-screen flex-1 items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-seg-primary/30 text-7xl font-bold">
          {statusCode ?? "404"}
        </h1>
        <p className="text-primary text-base font-medium">
          {statusCode
            ? `An error ${statusCode} occurred.`
            : "Sorry, we couldn't find the page you're looking for."}
        </p>
        {/* <Button
          asChild
          className="cursor-pointer rounded-full px-4 py-2 text-sm/0"
        >
          <Link href="/">Go back home</Link>
        </Button> */}
      </div>
    </main>
  );
}

// Handle custom error pages for Next.js
NotFound.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};
