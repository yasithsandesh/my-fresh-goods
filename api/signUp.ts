import { UserDTO } from "@/models/userDTO";

export async function SignUp(userDTO: UserDTO) {

   try {

      const res = await fetch("http://localhost:8080/my-fresh-goods-api/SignUp", {
         method: 'POST',
         credentials: 'include',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(userDTO),
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