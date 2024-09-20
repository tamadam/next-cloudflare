// STATIC RENDERING - WITHOUT EDGE RUNTIME
// WITH EDGE RUNTIME IT FETCHES THE ENDPOINT ON EVERY REFRESH
// REVALIDATION NOT WORKS AS EXPEXTED
// ALSO CALLED Incremental Static Regeneration
// ITS NOT SUPPORTED WHEN USING EDGE RUNTIME

import RandomText from "./components/RandomText/RandomText";

export const revalidate = 10;

export const runtime = "edge";

const ContentPage = async () => {
  const content = await fetch("https://whatthecommit.com/index.txt", {
    next: { tags: ["content"] },
  }).then((response) => response.text());

  return (
    <div>
      <p>Content Page</p>
      <RandomText text={content} />
    </div>
  );
};

export default ContentPage;
