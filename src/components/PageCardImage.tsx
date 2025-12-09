import { Post } from "@/interfaces/post";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Post;
}

const PageCardImage = ({ post }: Props) => {
  const { title, description, slug, createdAt, image } = post;
  const { url, width, height } = image.formats.medium;

  return (
    <div className="bg-white block p-6 border border-slate-200 rounded-lg shadow-sm">
      <Link
        href={`/blog/${slug}`}
        aria-label="View post image"
        className="text-center block"
      >
        <Image
          className="rounded-lg inline-block"
          src={url}
          alt={`Image ${title}`}
          width={width}
          height={height}
        />
      </Link>
      <Link href={`/blog/${slug}`} aria-label={`Read: ${title}`}>
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h5>
      </Link>
      <p className="mb-6 text-slate-600">{description}</p>
      <Link
        href={`/blog/${slug}`}
        className="inline-flex items-center text-slate-600 bg-slate-100 box-border border border-slate-300 hover:bg-slate-200 hover:text-slate-900 focus:ring-4 focus:ring-slate-300 shadow-sm font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none"
      >
        Leer más
        <svg
          className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </Link>
    </div>
  );
};
export default PageCardImage;
