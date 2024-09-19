// STATIC RENDERING - REVALIDATE AFTER X SEC (DEFINED BELOW)
// ALSO CALLED Incremental Static Regeneration

export const revalidate = 10; // revalidate after 10 sec

const ContentPage = async () => {    
    const content = await fetch("https://whatthecommit.com/index.txt").then((response) => response.text());

  return (
    <div style={{backgroundColor: "blanchedalmond"}}>{content}</div>
  )
}

export default ContentPage