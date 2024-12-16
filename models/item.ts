// "Item": {
//     "id": 3,
//     "title": " Red Grapes (100gm)",
//     "measuringType": "KG",
//     "price": 330,
//     "description": "Red Grapes (100gm)",
//     "freshness": 3,
//     "garden": {
//       "id": 1,
//       "gradenName": "Green Leaf Farms",
//       "description": "A family-run organic farm providing fresh fruits and vegetables.",
//       "gradenAddress": {
//         "id": 1,
//         "adress": "123 Farm Road",
//         "postalCode": "80136",
//         "city": {
//           "id": 8,
//           "name": "Galle"
//         }
//       }
//     },
//     "category": {
//       "id": 6,
//       "name": "Fresh Fruits"
//     },
//     "qty": 50,
//     "itemStatus": {
//       "id": 3,
//       "status": "new"
//     }
//   },


export interface Category{
    id:number,
    name:string,
    emoji:string
}

export interface ItemStatus{
    id:number
    status:string
}

export interface GradenAddress{
    id:number
    address:string
    postalCode:string
    city:{
        id:number
        name:string
    }
}

export interface Garden{
    id:number
    gradenName:string
    description:string
    gradenAddress:GradenAddress
}

export interface Item{
    id:number
    title:string
    measuringType:string
    price:number
    description:string
    freshness:number
    garden:Garden
    category:Category
    qty:number
    itemStatus:ItemStatus
}

export interface SingleItemResponseDTO{
    Item:Item
    similarItemsList:Item[]
}

export interface CartItemDTO{
    id:number
    cartId:number
    itemId:number
    itemName:string
    price:number
    qty:number
}

export interface City{
    id:number
    name:string
}
export interface FeaturesResponseDTO{
    categoryList:Category[]
    itemStatusList:ItemStatus[]
    cityList:City[]
}

    // private String categoryName;
    // private int freshness;
    // private double priceRangeStart;
    // private double priceRangeEnd;
    // private String sortText;
    // private int first;

export interface ProductSearchDTO{
    categoryName:string
    freshness:number
    priceRangeStart:number
    priceRangeEnd:number
    sortText:string
    first:number
    text:string
}

export interface ProductSearchResponse{
    items:Item[]
    allItemCount:number
}

export interface Address{
    id:number
    firstName:string
    lastName:string
    mobile:string
    line1:string
    line2:string
    postalCode:string
    city:City
}

export interface Cart{
    id:number
    item:Item
    qty:number
    total:number
}

export interface GetCheckoutDTO{
    address:Address
    cartList:Cart[]
    cityList:City[]
}


export interface GetCheckoutResponse{
    code:number
    data:GetCheckoutDTO
    message:string
    status:boolean
}


export interface LoadHomeResponse{
    categorys:Category[]
    topCategorys:TopCategory[]
}

export interface TopCategory{
    category:Category
    items:Item[]
}