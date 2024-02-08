import { news } from "./types";

export const removeDuplicate = (articles:any) =>{
    const randomArticles:news[] = articles?.articles
    const filteringArticles = randomArticles.filter(article => article?.source.id !== null)
    return filteringArticles;
}