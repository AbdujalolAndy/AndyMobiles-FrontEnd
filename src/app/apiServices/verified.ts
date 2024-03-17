import UniversalCookie from "universal-cookie"

const cookies = new UniversalCookie()
const doesExistToken = cookies.get("access_token");
let member_data: any = null
if (doesExistToken) {
    const memberDataJson: any = localStorage.getItem("member_data") ? localStorage.getItem("member_data") : null
    member_data = JSON.parse(memberDataJson)
} else {
    localStorage.removeItem("member_data")
}

export const verifiedMemberData = member_data ? member_data : null