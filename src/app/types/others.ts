import { Product } from "./product";

export interface HomePageProducts {
    scrolled: boolean;
    products: Product[];
    setSearchObjHome: any;
    searchObjHome: searchObjHome
}

export interface searchObjHome {
    limit: number;
    page: number;
    order: string;
    homeProduct: string;
}

export interface searchBlogs {
    order?: string,
    filter: string,
    page: number;
    limit: number;
    mb_id?: string;
}

export interface searchTargetBrands {
    limit: number;
    order?: string;
    page?: number;
    search?: string;
    random?: boolean;
}