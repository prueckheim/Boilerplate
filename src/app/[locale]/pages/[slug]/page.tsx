import React from "react"
import {allPages} from "contentlayer/generated";
export const generateStaticParams = async () =>
    allPages.map((page) => ({ slug: page._raw.flattenedPath }));
export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const page = allPages.find(
        (page) => page._raw.flattenedPath === `pages/${params.slug}`
    );
    return { title: page?.title };
};

const PageLayout = ({ params }: { params: { slug: string } }) => {
    const page = allPages.find(
        (page) => page._raw.flattenedPath === `pages/${params.slug}`
    );

    return (
        <article className="mx-auto max-w-xl py-8">
            {page && (
                <>
                    <div className="mb-8 text-left">
                        <h1 className="text-3xl font-bold">{page.title}</h1>
                    </div>
                    <div
                        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
                        dangerouslySetInnerHTML={{__html: page.body.html}}
                    />
                </>
            )}
        </article>
    );
};

export default PageLayout;