export type Article = {
    id: string;
    attributes: ArticleAttributes;
};

export type ArticleAttributes = {
    Title: string;
    Body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}