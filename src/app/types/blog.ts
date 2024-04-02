import { Member } from "./member";

export interface Blog {
    _id: String;
    mb_id: String;
    blog_title: String;
    blog_category: String;
    blog_context: String;
    blog_image?: string;
    blog_likes: Number;
    blog_views: Number;
    blog_comments: Number;
    blog_status: String;
    mb_data: Member;
    createdAt: Date;
    updateAt: Date;
}
export interface SearchObjBlog {
    order: string;
    filter: string;
    limit: number;
    page: number;
    mb_id?: string
}