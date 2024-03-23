import axios from "axios";
import { serverApi } from "../../lib/config";
import { searchBlogs } from "../types/others";
import { Blog } from "../types/blog";

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
}

export default CommunityServiceApi