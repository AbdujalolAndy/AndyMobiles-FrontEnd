export interface Brand {
    _id: string;
    mb_nick: string;
    mb_phone: string;
    mb_password: string;
    mb_status: string;
    mb_type: string;
    mb_top?: string;
    mb_image: string;
    mb_address: string;
    mb_email: string;
    mb_likes: number;
    mb_views: number;
    mb_comments: number;
    mb_followers: number;
    mb_followings: number;
    mb_description: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Member {
    _id: string;
    mb_nick: string;
    mb_phone: string;
    mb_password: string;
    mb_status: string;
    mb_type: string;
    mb_top?: string;
    mb_image?: string;
    mb_address?: string;
    mb_email?: string;
    mb_likes: number;
    mb_views: number;
    mb_followers: number;
    mb_followings: number;
    mb_description?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface SignUpMember {
    mb_nick: string;
    mb_email: string;
    mb_password: string;
    mb_phone: string;
}

export interface UpdateMemberData {
    mb_nick?: string;
    mb_phone?: string;
    mb_image?: string;
    mb_description?: string;
    mb_password?: string;
    mb_email?: string;
    mb_address?: string
}