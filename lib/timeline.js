

export async function getTimeline() {
    const res = await fetch('https://recordtest.wrtual.in/search/v1/timeline/879086982104829/');
    console.log(res)
    return res.json()["results"];
}