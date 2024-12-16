

export async function getSingleItem(id: string) {
    try {
        const res = await fetch(`http://localhost:8080/my-fresh-goods-api/SingleItem?pid=${id}`, {
            method: 'GET',
            credentials: 'include'
        })

        if (res.ok) {
            const response = await res.json();
            return response
        }

    } catch (error) {

    }
}