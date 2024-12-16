export default async function OnCheckout(data) {


    try {

        const res = await fetch("http://localhost:8080/my-fresh-goods-api/Checkout", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if (res.ok) {

            const response = await res.json();

            if (response.success) {
                window.payhere.startPayment(response.payhereJson);
            } else {
                console.log(response.message)
            }

        }


    } catch (error) {
        return null;
    }
}