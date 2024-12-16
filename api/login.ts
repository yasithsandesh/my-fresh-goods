export async function Login(email: string, password: string) {

    // let response;

    // const loginDTO = {
    //     email:email,
    //     password:password
    // }

    // await fetch("http://localhost:8080/my-fresh-goods-api/Login",{
    //     method: 'POST',
    //     credentials: 'include',
    //     headers: {
    //        'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(loginDTO),
    // }).then((response)=>{
    //     if(response.ok){
    //         return response.json()
    //     }
    // }).then((data)=>{
    //     response = data;
    // }).catch((err)=>{
    //     console.log(err)
    // })



    const loginDTO = {
        email: email,
        password: password,
        type:"user"
    }

    try {

        const response = await fetch("http://localhost:8080/my-fresh-goods-api/Login", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginDTO),
        })

        if (response.ok) {
            return response.json()
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        return null
    }

}