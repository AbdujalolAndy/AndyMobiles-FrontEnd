export interface Brand {
    _id: String;
    mb_nick: String;
    mb_phone: String;
    mb_password: String;
    mb_status: String;
    mb_type: String;
    mb_top?: String;
    mb_image: String;
    mb_address: String;
    mb_email: String;
    mb_likes: Number;
    mb_views: Number;
    mb_comments: Number;
    mb_followers: Number;
    mb_followings: Number;
    mb_description: String;
    createdAt: Date;
    updatedAt: Date;
}

export interface Member {
    _id: String;
    mb_nick: String;
    mb_phone: String;
    mb_password: String;
    mb_status: String;
    mb_type: String;
    mb_top?: String;
    mb_image?: String;
    mb_address?: String;
    mb_email?: String;
    mb_likes: Number;
    mb_views: Number;
    mb_followers: Number;
    mb_followings: Number;
    mb_description?: String;
    createdAt: Date;
    updatedAt: Date;
}

export interface SignUpMember {
    mb_nick: string,
    mb_email: string,
    mb_password: string
    mb_phone: string
}
