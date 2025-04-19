// import { useState } from "react"
// import toast from "react-hot-toast";
// import { useAuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const useLogin = () => {
//     const [loading, setLoading] = useState(false);
//     const { setAuthUser } = useAuthContext();
//     const navigate = useNavigate();
//     const apiUrl = import.meta.env.VITE_API_URL;

//     const login = async ({
//         email,
//         password
//     }) => {

//         const success = handleInputErrors({ email, password });
//         if (!success) return;

//         console.log({ email, password })
//         setLoading(true);
//         try {
//             const res = await fetch(`${apiUrl}/auth/login`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${localStorage.getItem("SU-token")}`,
//                 },
//                 body: JSON.stringify({ email, password })
//             });

//             const data = await res.json();
//             if (data.error) {
//                 throw new Error(data.error);
//             }

//             localStorage.setItem("SU-token", data.token);
//             localStorage.setItem("SU-user", JSON.stringify(data.user));
//             setAuthUser(data);

//             if (data) {
//                 toast.success("Signed up successfully");
//                 const user = JSON.parse(localStorage.getItem("SU-user"));
//                 console.log(user)
//                 if (user.role === "SkillSwapper") {
//                     navigate("/skillSwap");
//                 } else {
//                     navigate("/mentor-skill-swap");
//                 }
//             }
//         } catch (error) {
//             toast.error(error.message);
//         } finally {
//             setLoading(false);
//         }
//     }
//     return { loading, login };
// }

// export default useLogin;


// //Validators
// function handleInputErrors({ email, password }) {
//     if (!email || !password) {
//         toast.error("Please fill all the fields");
//         return false;
//     }

//     if (password.length < 6) {
//         toast.error("Password should be atleast 6 characters long");
//         return false;
//     }

//     return true; //success
// }

import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;

    const login = async ({ email, password }) => {
        const success = handleInputErrors({ email, password });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch(`${apiUrl}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            if (data.error) throw new Error(data.error);

            localStorage.setItem("SU-token", data.token);
            localStorage.setItem("SU-user", JSON.stringify(data.user));
            setAuthUser(data.user);

            toast.success("Signed in successfully");

            if (data.user.role === "SkillSwapper") {
                navigate("/skillSwap");
            } else {
                navigate("/mentor-skill-swap");
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};

export default useLogin;

// Validator
function handleInputErrors({ email, password }) {
    if (!email || !password) {
        toast.error("Please fill all the fields");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password should be at least 6 characters long");
        return false;
    }

    return true;
}
