import { Member } from "./member";

export interface Review {
    _id: String;
    mb_id: String;
    review_target_id: String;
    review_stars: Number
    review_context: String;
    review_likes: Number;
    review_dislikes: Number;
    member_data: Member;
    updatedAt: Date;
    createdAt: Date;
}