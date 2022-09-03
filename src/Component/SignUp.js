// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import axios from "axios";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import Swal from "sweetalert2";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [toggle, setToggle] = useState(false);

//   const modelSchema = yup.object().shape({
//     name: yup.string().required(),
//     email: yup.string().required(),
//     password: yup.string().required(),
//   });

//   const { handleSubmit, register } = useForm({
//     resolver: yupResolver(modelSchema),
//   });

//   const onSubmit = handleSubmit(async (val) => {
//     console.log(val);
//     const { name, email, password } = val;

//     const formData = new FormData();

//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("password", password);

//     await axios
//       .post("https://foodaviz.herokuapp.com/api/create", val)
//       .then((res) => {
//         Swal.fire({
//           position: "center",
//           icon: "success",
//           title: "Welcome back on board",
//           showConfirmButton: false,
//           timer: 2500,
//         });
//         navigate("/signin");
//       });
//   });

//   const onToggle = () => {
//     setToggle(!toggle);
//   };

//   return (
//     <Container>
//       <Overlay>
//         <Form onSubmit={onSubmit}>
//           <Logo src="/image/FoodAviz.png" />
//           <Inputs>
//             <Input placeholder="userName" type="text" {...register("name")} />
//             <Input placeholder="Email" type="email" {...register("email")} />

//             <PassInput>
//               {toggle ? (
//                 <Passput placeholder="************" {...register("password")} />
//               ) : (
//                 <Passput
//                   placeholder="Password"
//                   type="password"
//                   {...register("password")}
//                 />
//               )}
//               <PassIcon>
//                 {toggle ? (
//                   <AiOutlineEyeInvisible onClick={onToggle} />
//                 ) : (
//                   <AiOutlineEye onClick={onToggle} />
//                 )}
//               </PassIcon>
//             </PassInput>
//           </Inputs>

//           <Button type="submit">Sign up</Button>

//           <Alt>
//             Already have an account?
//             <NavLink
//               to="/signin"
//               style={{
//                 textDecoration: "none",
//               }}
//             >
//               <span>Log in</span>
//             </NavLink>
//           </Alt>
//         </Form>
//       </Overlay>
//       <Modal id="modal">
//         <Box>
//           <Image src="/image/progress.gif" />
//           <span>Sigin you in</span>
//         </Box>
//       </Modal>
//     </Container>
//   );
// };

// export default SignUp;

// const Container = styled.div`
//   background-image: url("/image/backg.jpeg");
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   width: 100%;
//   height: 100vh;
// `;

// const Overlay = styled.div`
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.7);
//   backdrop-filter: blur(2px);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-end;
// `;

// const Form = styled.form`
//   width: 100%;
//   height: 100%;
//   border-radius: 20px 20px 0 0;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;
// `;

// const Logo = styled.img`
//   width: 30%;
//   @media screen and (max-width: 425px) {
//     width: 90%;
//   }
// `;

// const Inputs = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   width: 78%;
//   height: 40px;
//   background: #d9d9d9;
//   border: none;
//   border-radius: 5px;
//   margin-top: 10px;
//   padding-left: 20px;
//   text-transform: ${({ cap }) => (cap ? "capitalize" : "unset")};
//   :focus {
//     border: none;
//     outline: none;
//   }
// `;
// const PassInput = styled.div`
//   width: 82%;
//   height: 40px;
//   border-radius: 5px;
//   background: #d9d9d9;
//   margin-top: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media screen and (max-width: 375px) {
//     width: 83%;
//   }
// `;

// const Passput = styled.input`
//   border: none;
//   width: 95%;
//   height: 35px;
//   margin-top: -1;
//   margin-left: 20px;
//   border-radius: 5px;
//   background: #d9d9d9;
//   text-transform: ${({ cap }) => (cap ? "capitalize" : "unset")};
//   @media screen and (max-width: 768px) {
//     margin-left: 18px;
//   }

//   :focus {
//     border: none;
//     outline: none;
//   }
// `;

// const PassIcon = styled.div`
//   font-size: 23px;
//   cursor: pointer;
//   opacity: 0.7;
//   transition: 350ms;
//   padding-right: 10px;
//   :hover {
//     opacity: 1;
//   }
// `;

// const Button = styled.button`
//   background: #56cc56;
//   color: black;
//   width: 84%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   height: 40px;
//   margin-top: 10px;
//   font-family: poppins;
//   border-radius: 5px;
//   text-decoration: none;
//   border: none;
//   opacity: ${({ op }) => (op ? "0.5" : "1")};
// `;

// const Alt = styled.div`
//   margin-top: 10px;
//   font-weight: 500;
//   color: white;
//   font-family: poppins;
//   font-size: 15px;
//   span {
//     color: #56cc56;
//     margin-left: 5px;
//     font-size: 13px;
//     cursor: pointer;
//     font-family: poppins;
//   }
// `;

// const Modal = styled.div`
//   position: fixed;
//   height: 100vh;
//   width: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   backdrop-filter: blur(1px);
//   display: none;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
//   top: 0;
// `;

// const Image = styled.img`
//   width: 20%;
// `;

// const Box = styled.div`
//   width: 80%;
//   height: 150px;
//   background: white;
//   border-radius: 5px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   span {
//     font-weight: 500;
//     margin-top: 10px;
//   }
// `;


import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";


const SignUp = () => {
  // const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const modelSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(modelSchema),
  });

  const onSubmit = handleSubmit(async (val) => {
    console.log(val);
    const { name, email, password } = val;

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    await axios
      .post("https://foodaviz.herokuapp.com/api/create", val)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome back on board",
          showConfirmButton: false,
          timer: 2500,
        });
        
      });
  });

  const onToggle = () => {
    setToggle(!toggle);
  };


return (
  <>
    <Container>
      <Form onSubmit={onSubmit}>
          <Logo src="/image/FoodAviz.png" />

          <Inputs>

             
             <InputU placeholder="Username" type="text" {...register("name")} />

             <Username>
               <Input placeholder="Email" type="email" {...register("email")} />
             </Username>

             <PassInput>
               <PassPut placeholder="Password" type="password" {...register("password")} />

               <PassIcon>
                {toggle ? (
                  <AiOutlineEyeInvisible onClick={onToggle} />
                ) : (
                  <AiOutlineEye onClick={onToggle} />
                )}
              </PassIcon>
             </PassInput> 

             <PassInput>
               <PassPut placeholder="Comfirm Password" type="password" {...register("password")} />

               <PassIcon>
                {toggle ? (
                  <AiOutlineEyeInvisible onClick={onToggle} />
                ) : (
                  <AiOutlineEye onClick={onToggle} />
                )}
              </PassIcon>
             </PassInput> 

             <Button type="submit">Sign Up</Button>
           
          </Inputs>  
      </Form>

      <Background>
           <BackImg src="/image/signin_img.png" />
      </Background>

    </Container>

  </>
);

}; 

export default SignUp;




// STYLING  ****************

const Container = styled.div`
  display: flex;
  background: f5f5f5;
  max-width: 100%;
  height: 100vh;
  overflow-y: hidden;
`;

const Form = styled.form`
  margin-top: 50px;
  margin-left: 50px;
`;

const Logo = styled.img`
  width: 30%;
  margin-left: 220px;
  
`;

const Inputs = styled.div`
  margin: 70px 150px 0;
`;

const Input = styled.input`
  width: 300px;
  height: 45px;
  background: #fff;
  justify-content: center;
  box-shadow: 0 10px  18px 5px rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;
  border-radius: 5px;

  ::placeholder{
    padding-left: 15px;
  }
`;

const Username = styled.div`
   padding-top: 20px; 
`;

const InputU = styled.input`
  width: 300px;
  height: 45px;
  background: #fff;
  justify-content: center;
  box-shadow: 0 10px  18px 5px rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;
  border-radius: 5px;

  ::placeholder{
    padding-left: 15px;
  }
`;

const PassInput = styled.div`
  padding-top: 20px;
  display: flex;
`;

const PassPut = styled.input`
  width: 300px;
  height: 45px;
  background: #fff;
  justify-content: center;
  box-shadow: 0 10px  18px 5px rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;
  border-radius: 5px;

  ::placeholder{
    padding-left: 15px;
  }

`;

const PassIcon = styled.div`
  position: absolute;
  font-size: 23px;
  cursor: pointer;
  opacity: 0.7;
  transition: 350ms;
  margin: 15px 0 0 265px;
  :hover {
    opacity: 1;
  }
`;

const Button = styled.button`
  background: #56cc56;
  color: black;
  font-weight: bold;
  font-family: poppins;
  width: 300px;
  cursor: pointer;
  height: 45px;
  margin-top: 50px;
  border-radius: 5px;
  border: none;
`;

const Background = styled.div`
  width: 100%;
`;

const BackImg = styled.img`
  width: 100%;
  height: 100%;
`;
