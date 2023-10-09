import  { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../../firebase/firebase.config";


function SignIn() {

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

const auth = getAuth(app)
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Logged in successfully',
        showConfirmButton: false,
        timer: 1500
      });
  
      navigate(from, { replace: true });
  
    })
    .catch(error => {
      console.log('error', error.message);
    })

  }
  

  const { handleSubmit, control } = useForm();

const { signIn } = useContext(AuthContext);

  const onSubmit = (data) => {
   signIn(data.email, data.password)
   .then(result => {
    const user = result.user;
    console.log(user);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Logged in successfully',
      showConfirmButton: false,
      timer: 1500
    });

    navigate(from, { replace: true });

   })
  };

  return (
    <div className="min-h-screen flex items-center justify-center lg:mb-0 mb-8 mx-auto">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <img
          className="mx-auto mb-16 mt-10"
          src="/public/alphabets-flower-monogram-letter-s-free-png.webp"
          alt=""
          width="40px"
          height="40px"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  className="mt-1 p-2 w-full bg-white text-black rounded-md border-b-2"
                  placeholder="Email"
                />
              )}
            />
          </div>
          <div className="mb-6">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  id="password"
                  className="mt-1 p-2 w-full bg-white text-black rounded-md border-b-2"
                  placeholder="Password"
                />
              )}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[rgb(141,72,23)] text-white font-bold py-2 px-4 rounded hover:bg-[#BF9376] "
          >
            Log In
          </button>
        </form>

      

        <div className="mt-4 flex justify-center">
          <button onClick={handleGoogleSignIn} className='flex justify-center gap-10 className=" border border-[#C7C7C7] hover:bg-[#BF9376]  py-2 px-6 text-sm font-semibold hover:border-0 text-black rounded-full'>
            <img
              src="/public/Group 573.png"
              alt=""
              width="24px"
              height="24px"
            />
            Continue with Google
          </button>
        </div>

        <div className="text-center m-4">
          <p>
            <span className="text-black">Don't have an account?</span>{" "}
            <Link to="/signup" className="text-black underline font-semibold">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}



export default SignIn;