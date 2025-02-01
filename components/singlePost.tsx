import React from "react";

interface PostProps {
  post: {
    id: string;
    title: string;
    slug: string;
    description: string;
    imageUrl: string;
    date: string;
    datetime: string;
    category: { title: string; href: string };
  };
}

const SinglePost = ({ post }: PostProps) => {
  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative max-w-xl">
        <img
          alt=""
          src={post.imageUrl}
          className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] dark:brightness-75"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        {/* 日期和标签 */}
        <div className="mt-5 flex items-center gap-x-4 text-xs">
          <time dateTime={post.datetime} className="text-gray-500">
            {post.date}
          </time>
          <a
            href={post.category.href}
            className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 dark:text-gray-400 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            {post.category.title}
          </a>
        </div>

        <div className="group relative">
          <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300">
            <a href={post.slug}>
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">
            {post.description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default SinglePost;
