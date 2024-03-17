export interface Blog {
    _id: String;
    mb_id: String;
    blog_title: String;
    blog_category: String;
    blog_context: String;
    blog_likes: Number;
    blog_views: Number;
    blog_comments: Number;
    blog_status: String;
    createdAt: Date;
    updateAt: Date;
}