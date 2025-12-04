import Link from "next/link";

const NotFound = () => {
  return (
    <div className="grid grid-cols-1 place-items-center h-screen">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">
          404 - Page Not Found
        </h1>
        <p>Could not find requested resource</p>
        <Link href="/blog" className="text-blue-600 hover:underline">
          Go back to Blog
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
