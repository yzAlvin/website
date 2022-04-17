export type Article = {
    id: string;
    attributes: ArticleAttributes;
};

export type ArticleAttributes = {
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export type AboutMe = {
    id: string;
    attributes: AboutMeAttributes;
}

export type AboutMeAttributes = {
    body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export type Project = {
    id: string;
    attributes: ProjectAttributes;
}

export type ProjectAttributes = {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    projectLink: string;
    repoLink: string;
}

export type ApiResponse = {
    data: any;
    meta?: { pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
        }
    };
}