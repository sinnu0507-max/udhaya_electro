import api from "./api";

export async function getContactInfo() {

    const response = await api.get("contact/");

    return response.data;

}