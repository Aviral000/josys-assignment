import React from 'react';
import './App.css';
import UserModule from './components/User.module';
import AddUserModule from './components/AddUser.module';

function App() {
  return (
    <div>
      <UserModule />
      <hr />
      <AddUserModule />
    </div>
  );
}

export default App;

// import React from "react"
// import { useForm, Resolver } from "react-hook-form"


// type FormValues = {
//   firstName: string
//   lastName: string
// }


// const resolver: Resolver<FormValues> = async (values) => {
//   return {
//     values: values.firstName ? values : {},
//     errors: !values.firstName
//       ? {
//           firstName: {
//             type: "required",
//             message: "This is required.",
//           },
//         }
//       : {},
//   }
// }


// const App: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>({ resolver })
//   const onSubmit = handleSubmit((data) => console.log(data))


//   return (
//     <form onSubmit={onSubmit}>
//       <input {...register("firstName")} placeholder="Bill" />
//       {errors?.firstName && <p>{errors.firstName.message}</p>}


//       <input {...register("lastName")} placeholder="Luo" />


//       <input type="submit" />
//     </form>
//   )
// }

// export default App;