import { Member } from "./member";

export interface Review {
    _id: String;
    mb_id: String;
    review_target_id: String;
    review_stars: number
    review_context: string;
    review_group: string
    review_likes: number;
    review_dislikes: number;
    member_data: Member;
    updatedAt: Date;
    createdAt: Date;
}

export interface reviewCreateData {
    review_target_id: string;
    review_stars: number;
    review_context: string;
    review_group: string
}