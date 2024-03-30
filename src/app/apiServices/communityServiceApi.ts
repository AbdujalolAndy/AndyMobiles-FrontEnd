import axios from "axios";
import { serverApi } from "../../lib/config";
import { searchBlogs } from "../types/others";
import { Blog } from "../types/blog";
import { Review } from "../types/review";

class CommunityServiceApi {
    private readonly path: string
    constructor() {
        this.path = serverApi
    }

    async getTargetCommunityPost(data: searchBlogs): Promise<Blog[]> {
        try {
            const url = `${this.path}/blogs/getTargetBlogs?filter=${data.filter}&page=${data.page}&limit=${data.limit}`;
            const result = await axios.get(url, { withCredentials: true });
            console.log(`getTargetCommunityPost State::: ${result.data.state}`);
            const blogs: Blog[] = result.data.value;
            console.log("blogs:::", blogs)
            return blogs
        } catch (err: any) {
            throw err
        }
    }

    async getProductReviews(product_id: string): Promise<Review[]> {
        try {
            const url = `${serverApi}/review/getReviews/${product_id}`
            const result = await axios.get(url, { withCredentials: true });
            console.log(`getProductReviews state, ${result.data.state}`)
            const reviews: Review[] = result.data.value;
            return reviews
        } catch (err) {
            throw err
        }
    }
}

export default CommunityServiceApi