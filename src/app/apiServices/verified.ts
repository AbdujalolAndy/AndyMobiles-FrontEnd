import UniversalCookie from "universal-cookie"
import { serverApi } from "../../lib/config";

const cookies = new UniversalCookie()
const doesExistToken = cookies.get("access_token");
let member_data: any = null
if (doesExistToken) {
    const memberDataJson: any = localStorage.getItem("member_data") ? localStorage.getItem("member_data") : null;
    member_data = JSON.parse(memberDataJson)
    if (member_data) {
        member_data.mb_image = member_data.mb_image ? `${serverApi}/${member_data.mb_image}` : ""
    }
} else {
    localStorage.removeItem("member_data")
}

export const verifiedMemberData = member_data ? member_data : null