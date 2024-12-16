export async function Verification(verificationcode: string) {

    try {

        const response = await fetch("http://localhost:8080/my-fresh-goods-api/Verification", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                verification: verificationcode
            }),
        })

        if(response.ok){

          const json =  await response.json()
          console.log(json)
          return json

        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

    } catch (error) {
        return null
    }

}

export async function checkLogin(){
    try {
        const res = await fetch(`http://localhost:8080/my-fresh-goods-api/Verification`, {
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