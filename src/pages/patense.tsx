import Image from "next/image";
import NavBar from "./components/navbar";
import ProjectPage from "./components/projectpage";
import { Project } from "./components/projectpage";
import { Button, buttonVariants } from "../../src/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

function Patense() {
  return (
    <ProjectPage>
      <NavBar></NavBar>
      <div className="container mx-auto max-w-3xl p-8">
        <h1 className="mb-6 text-center text-6xl font-bold">Patense.ai</h1>
        <div className="mb-4 flex items-center justify-center">
          <video width="100%" height="auto" controls muted>
            <source src={"/patensedemo4.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mx-auto my-2 flex max-w-xs flex-row justify-between px-10">
          <Link
            href={"https://patense.ai"}
            target="_blank"
            className={buttonVariants({ variant: "secondary" })}
          >
            See it live!
          </Link>
          <Link
            href={"https://github.com/JohnZolton/patense.ai"}
            target="_blank"
            className={buttonVariants({ variant: "secondary" })}
          >
            View Code <Github />
          </Link>
        </div>
        <p className="mb-6 text-lg">
          Patense.ai is a patent prosecution tool to help lawyers analyze office
          actions.
        </p>

        <section className="mb-8">
          <h2 className="mb-2 text-3xl font-semibold">Patent 101</h2>
          <p className="mb-4">
            If someone already published your thing, you can&apos;t patent it.
            If you find a feature or combination of features that no one else
            has published, you can patent it (if it&apos;s not obvious).
          </p>
          <p className="mb-4">
            During the application process, patent examiners find relevant
            references. Patent lawyers then either convince the examiner the
            references don&apos;t say the same thing or amend to differentiate
            from the reference.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-3xl font-semibold">Tool Overview</h2>
          <p className="mb-4">
            Patense.ai extracts every possible inventive feature from a
            specification (the initial document filed that reserves your place
            in time), searches the references for each feature, and uses GPTs to
            analyze whether the feature is disclosed or not. This essentially
            creates a map of every possible amendment, saving hours of attorney
            time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-3xl font-semibold">V1 - Naive</h2>
          <p className="mb-4">
            V1 executed a single walk through the specification. 1-2 page chunks
            were sent one at a time to GPT-3.5 along with a running list of
            features. This was slow and didn&apos;t scale well to 100+ page
            specifications. Even after upgrading to premium Vercel hosting (5
            minute serverless functions) and transferring to AWS serverless (15
            minutes max runtime).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-3xl font-semibold">V2 - O(log(n))</h2>
          <p className="mb-4">
            V2: Split the entire specification into short 1-2 page chunks, send
            all chunks in parallel to separate GPT calls asking it to extract
            every inventive feature. Then recursively combine the lists of
            features two at a time with more GPT calls. The runtime was
            O(log(n)), meaning that if we doubled our input length from 100 to
            200 pages, we&apos;re only adding one additional cycle of
            consolidation (s/o merge sort for the inspiration). I still ran into
            OpenAI API rate limits, but those can be managed with timeouts and
            money since I was well within the runtime limitations on AWS.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-3xl font-semibold">Vector Databases</h2>
          <p className="mb-4">
            Once all the possible inventive features are extracted, the cited
            references are split into small chunks, converted to vectors, and
            stored. This lets you quickly get relevant sections of text based on
            a query. The query is converted to a vector (tokenized) and then
            mapped in the same vector space as the references. From here, the
            closest vectors of text are likely the most relevant.
          </p>
          <p className="mb-4">
            I used a &apos;parent document retriever&apos; which is a little
            more sophisticated. It splits the text into chunks, then splits
            those chunks into even smaller chunks. The smaller chunks are
            queried for the search but it returns the larger chunks, providing
            more context to the model.
          </p>
          <p className="mb-4">
            We get the most relevant chunks of references, pass them to GPT with
            each feature, and ask if the feature is disclosed by the text. Those
            responses are stored in a report so the user can easily tell which
            features make for good amendments and which don&apos;t.
          </p>
          <p className="mb-4">
            Using a vector DB like this was fast but ultimately wasn&apos;t good
            enough to get the relevant text for each feature. It&apos;s not
            guaranteed that the vector query will get the proper text from large
            documents.{" "}
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-2 text-3xl font-semibold">V3: $$$</h2>
          <p className="mb-4">Vector DBs aren&apos;t viable, so what is?</p>
          <p className="mb-4">
            What&apos;s more precise than a vector search? Sending the whole
            text in as context. But we can&apos;t do that for every feature,
            that&apos;d be insanely expensive, and wasteful.
          </p>
          <p className="mb-4">
            But we don&apos;t need to search for EVERY feature, we just need to
            search for the best one. How do we determine that? We let the user
            decide.
          </p>
          <p className="mb-4">
            Now we essentially pass in a feature and use LLM calls to ask
            &quot;Does this page disclose this feature?&quot;. We take all the
            references a user uploads, split them into single pages and pass
            everything to an LLM in a few hundred simultaneous calls. With some
            prompt engineering and regex&apos;s we turn the output into
            something we can manage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-3xl font-semibold">App Structure</h2>
          <p className="mb-4">
            The user uploads a PDF of the specification and all the cited
            references. Documents are stored using UploadThing, a
            developer-friendly wrapper on AWS S3. From there, some LangChain
            functions verify the PDFs have proper recognized text before
            proceeding.
          </p>
          <p className="mb-4">
            Payments are handled with Stripe, using a subscription model with an
            allotted 2 million monthly tokens, and then additional tokens billed
            at $10/million. Authentication is handled with Clerk. Queries take a
            while and run on an AWS Lambda function with a 15-minute max runtime
            to handle the ~300 GPT calls and inevitable rate-limiting (until I
            give OpenAI all my money).
          </p>
          <p className="mb-4">
            Users can let AI extract every possible inventive element for them,
            or just use it as a high-precision search function. Results are
            prompt engineered and parsed with regex&apos;s, then displayed for
            the user.
          </p>
        </section>
      </div>
    </ProjectPage>
  );
}

export default Patense;
