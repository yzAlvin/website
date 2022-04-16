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

export type AboutMe = {
    id: string;
    attributes: AboutMeAttributes;
}

export type AboutMeAttributes = {
    Body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}