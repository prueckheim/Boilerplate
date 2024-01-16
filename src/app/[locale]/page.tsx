// app/page.tsx
"use client"
import React from "react"
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, allPages, Post, Page } from 'contentlayer/generated';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import CustomButton from "@/components/Button";
import Navigation from "@/components/Navigation";
import page from "@/app/[locale]/pages/[slug]/page";

function PostCard(post: Post) {
  const t = useTranslations();
  return (
    <Link href={post.url}>
        <div className="w-[500px] bg-white rounded-xl m-5 p-5">
            <time dateTime={post.date} className="mb-4 block text-xs text-gray-400">
                {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            <h2 className="mb-4 text-3xl font-bold cursor-pointer">{post.title}</h2>
            <p className="text-md [&>*]:mb-3 [&>*:last-child]:mb-0 text-gray-700">
                {post.body.raw.substring(0, 120)} {post.body.raw.length >= 120 && '...'}
            </p>
            <CustomButton>{t('readmore')}</CustomButton>
        </div>
    </Link>
  );
}

export default function Home() {
    // how to use i18n
    const t = useTranslations();

    const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
      <main className="flex flex-col items-center justify-center p-24 bg-gray-100">
          <div
              className="relative flex flex-col gap-4 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] text-white">
              <h1 className="text-3xl font-bold text-blue-500 font-open">
                  Boilerplate
              </h1>

              {allPages.map((page: any, idx: number) => (
                  <Link href={page.url}>
                      <Navigation key={idx} {...page}>{page.slug}</Navigation>
                  </Link>
              ))}
          </div>
          <div className="mx-auto max-w-xl py-8">
              <h1 className="mb-8 text-center text-2xl text-gray-500">{t('title')}</h1>
              {posts.map((post: any, idx: number) => (
                  <PostCard key={idx} {...post} />
              ))}
          </div>
          <div className="mx-auto max-w-xl text-xs">
              <LocaleSwitcher/>
          </div>
      </main>
);
}
