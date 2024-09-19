// STATIC RENDERING - REVALIDATE AFTER X SEC (DEFINED BELOW)
// ALSO CALLED Incremental Static Regeneration
// ITS NOT SUPPORTED WHEN USING EDGE RUNTIME
//

import Button from "../components/Button";



export const revalidate = 10; // revalidate after 10 sec

export const runtime = 'edge';

const ContentPage = async () => {    
    const content = await fetch("https://whatthecommit.com/index.txt").then((response) => response.text());

  return (
    <div style={{backgroundColor: "blanchedalmond", display: "grid", placeItems: "center"}}>{content}
    <Button /></div>
  )
}

export default ContentPage