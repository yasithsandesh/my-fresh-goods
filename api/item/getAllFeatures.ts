export async function  getAllFeatures(){

   try {

    const res = await fetch("http://localhost:8080/my-fresh-goods-api/GetFeatures", {
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

