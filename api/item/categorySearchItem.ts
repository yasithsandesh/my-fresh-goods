

export async function categorySearchItem(id:string,page:string) {
    try {

        const res = await fetch(`http://localhost:8080/my-fresh-goods-api/CategoryItems?id=${id}&page=${page}`, {
            method: 'GET',
            credentials: 'include'
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