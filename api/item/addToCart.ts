export async function AddToCart(itemId: string, qty: string) {

  try {

    const res = await fetch(`http://localhost:8080/my-fresh-goods-api/AddToCart?itemId=${itemId}&qty=${qty}`, {
      method: "GET",
      'credentials': 'include',
    });

    if (res.ok) {

      const response = await res.json();

      return response;

    }


  } catch (error) {

  }

}