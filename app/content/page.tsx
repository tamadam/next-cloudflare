// STATIC RENDERING - REVALIDATE AFTER X SEC (DEFINED BELOW)
// ALSO CALLED Incremental Static Regeneration
// ITS NOT SUPPORTED WHEN USING EDGE RUNTIME
//

import RandomText from "./components/RandomText/RandomText";

export const revalidate = 10;

export const runtime = "edge";

const ContentPage = async () => {
  const content = await fetch("https://whatthecommit.com/index.txt").then(
    (response) => response.text()
  );

  return (
    <div>
      <p>Content Page</p>
      <RandomText text={content} />
    </div>
  );
};

export default ContentPage;
