import axios from "axios"
import { Product, ProductSearchObject } from "../types/product"
import assert from "assert";
import Definer from "../../lib/Definer";
class ProductServiceApi {
    private readonly path: string
    constructor() {
        this.path = "asas"
    }
    async getRandomNewProducts(data: ProductSearchObject): Promise<Product[]> {
        try {
            const url = `${this.path}/products/allPoducts`
            const result = await axios.post(url, data, { withCredentials: true })
            console.log(`getRandomProducts state::: ${result.data.state}`)
            assert.ok(result?.data, Definer.general_err1);
            assert.ok(result?.data?.state == "fail", result?.data?.message)
            const products: Product[] = result.data.value;
            return products
        } catch (err: any) {
            console.log(`ERROR::: getRandomNewProducts, ${err.message}`)
            throw err
        }
    }
}