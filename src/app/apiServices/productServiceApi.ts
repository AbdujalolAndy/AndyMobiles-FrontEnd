import axios from "axios"
import { Product, ProductSearchObject } from "../types/product"
import assert from "assert";
import Definer from "../../lib/Definer";
import { serverApi } from "../../lib/config";
class ProductServiceApi {
    private readonly path: string
    constructor() {
        this.path = serverApi
    }
    async getTargetProducts(data: ProductSearchObject): Promise<Product[]> {
        try {
            const url = `${this.path}/products/getTargetProducts`
            const result = await axios.post(url, data, { withCredentials: true })
            console.log(`getTargetProducts state::: ${result.data.state}`)
            if (result?.data?.state == "fail") {
                throw new Error(result.data.message)
            }
            const products: Product[] = result.data.value;
            console.log(products)
            return products
        } catch (err: any) {
            console.log(`ERROR::: getRandomNewProducts, ${err.message}`)
            throw err
        }
    }

}
export default ProductServiceApi