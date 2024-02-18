export const getNewsTopHeadlines =async () => {
    const newData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_TOKEN}`,{cache:"no-store"})
    return newData.json()
}
export const getNewsSearch =async (keyword:string) => {
    const newData = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API_TOKEN}&q=${keyword}&pageSize=10`,{cache:"no-store"})
    return newData.json()
}

export const getRUSNews =async () => {
    const newData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_TOKEN}`,{cache:"no-store"})
    return newData.json()
}