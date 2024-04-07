import axios from "axios";
import { serverApi } from "../../lib/config"
import { Bank } from "../types/bank";
import { BankInfoObj } from "../types/others";

class TransactionServiceApi {
    constructor() {
    }

    async getChosenBankCard(): Promise<Bank> {
        try {
            const url = `${serverApi}/bankcard/getTargetCard`;
            const result = await axios.get(url, { withCredentials: true })
            console.log(`GET getChosenBankCard state ${result.data.state}`)
            const chosenBankCard: Bank = result.data.value[0];
            return chosenBankCard
        } catch (err: any) {
            throw err
        }
    }

    async createBankCard(data: BankInfoObj): Promise<Bank> {
        try {
            const url = `${serverApi}/bankCard/createBankCard`;
            const result = await axios.post(url, data, { withCredentials: true })
            console.log(`POST createBankCard ${result.data.state}`)
            const newBankCard: Bank = result.data.value[0];
            return newBankCard
        } catch (err: any) {
            throw err
        }
    }
}

export default TransactionServiceApi