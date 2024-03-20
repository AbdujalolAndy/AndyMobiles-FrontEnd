import axios from "axios"
import { serverApi } from "../../lib/config"
import { Brand } from "../types/member"

class BrandsServiceApi {
    private readonly path: string
    constructor() {
        this.path = serverApi
    }

    async getTargetBrands(data: any): Promise<Brand[]> {
        try {
            const url = `${this.path}/brands/getTargetBrands?random=${data.random}&limit=${data.limit}`,
                result = await axios.get(url, { withCredentials: true });
            console.log(`getTargetBrands state::: ${result.data.state}`);
            if (result.data.message === "fail") {
                throw new Error(result.data.message)
            }
            const brands: Brand[] = result.data.value
            console.log(`getTargetBrands::: ${brands}`)
            return brands
        } catch (err: any) {
            throw err
        }
    }
}

export default BrandsServiceApi