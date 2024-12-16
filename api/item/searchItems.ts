import { ProductSearchDTO } from "@/models/item";

export async function searchItems(productSearchDTO:ProductSearchDTO) {
    try {

        const res = await fetch("http://localhost:8080/my-fresh-goods-api/SearchItems", {
            method: 'POST',
            credentials: 'include',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(productSearchDTO),
         })
        if (res.ok) {
            const response = await res.json();

            return response
        }

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
    } catch (error) {
        return null
    }
}