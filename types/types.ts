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
    blurb: string;
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
    github: string;
    linkedin: string;
    mailto: string;
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
    cover: {data: {attributes: {name: string; url: string; alternativeText: string; formats: {small: {url: string}; medium: {url: string}; thumbnail: {url: string};}}}}
}

export type ApiResponse = {
    data: AboutMe;
    meta?: { pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
        }
    };
}