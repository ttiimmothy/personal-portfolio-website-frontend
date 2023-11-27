import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

function ErrorPage() {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Layout location={router.asPath}>
        <div className="w-full h-[90vh] flex flex-col gap-3 justify-center items-center">
          <Image
            src={`${router.basePath}/error.svg`}
            alt="not found error"
            width={700}
            height={600}
            className="h-[400px] w-auto"
            priority
          />
          <p className="text-2xl font-bold">Oops! Page not Found</p>
          <p className="text-md text-slate-500">
            We couldn&apos;t find the page you were looking for.
          </p>
          <Link href="/" className="mt-4">
            <p className="text-md font-bold bg-slate-400 hover:bg-slate-600 text-white px-2 py-1 rounded-md dark:bg-slate-200 dark:hover:bg-slate-300 dark:text-gray-800">
              Go back to Home
            </p>
          </Link>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default ErrorPage;
