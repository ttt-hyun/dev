import { allDocs } from "contentlayer/generated"
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx/Mdx";
// import "highlight.js/styles/night-owl.css";
import { format } from "date-fns";
import Image from "next/image";
import Headings from "@/components/mdx/Headings";

export const dynamic = 'force-static';

async function getDocFromParams(slug){
    // const doc = allDocs.find((doc) => doc.slugAsParams === slug);

    // if(!doc) notFound()

    // return doc
}


const singlePostPage = async (props) => {
    

    return (
        <>
        <div className="page-post">test</div>
        {/* <div className="page-post">
            <div className="layout-text flex-box justify-content-end align-items-center">
                <p className="date-text fs12 fw800">{date}</p>
            </div>
            <div className="post-thumb rd10">
                <Image src="/thumb_next_1.svg" alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="post-contents">
                <div className="title">
                    <h3>{doc.title}</h3>
                </div>
                <div className="contents markdown-body">
                    <Mdx code={doc.body.code} />
                </div>
            </div>
        </div>
        <div className="post-heading">
            <Headings code={doc.body.code} />
        </div> */}
        </>
    )
}

export default singlePostPage