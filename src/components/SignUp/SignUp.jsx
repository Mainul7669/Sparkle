import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

function SignUp() {
  const {
    handleSubmit,
    reset,
    control,
    watch,
    setError,
    clearErrors,
    formState,
  } = useForm();
  const { isSubmitting, errors } = formState;

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
    } else {
      const displayName = `${data.firstName} ${data.lastName}`;
      createUser(data.email, data.password).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
  
        // Extract the Photo URL from the data
        const photoUrl = data.photoUrl;
  
        updateUserProfile(displayName, photoUrl) // Pass both name and photoUrl
          .then(() => {
            console.log("user profile info updated");
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User created successfully",
              showConfirmButton: false,
              timer: 1500,
            });
  
            navigate("/");
          })
          .catch((error) => console.log(error));
      });
    }
  };
  

  const password = watch("password", "");

  return (
    <div className="min-h-screen flex items-center justify-center lg:mx-0 mx-5">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl text-black mb-6 mt-2 font-semibold">
          Create an account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="firstName"
                  className="mt-1 p-2 w-full bg-white text-black rounded-md border-b-2"
                  placeholder="First Name"
                />
              )}
            />
          </div>

          <div className="mb-6">
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="lastName"
                  className="mt-1 p-2 w-full bg-white text-black rounded-md border-b-2"
                  placeholder="Last Name"
                />
              )}
            />
          </div>

          {/* New Photo URL field */}
          <div className="mb-6">
            <Controller
              name="photoUrl" // Make sure this name matches the name in your data object
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="photoUrl"
                  className="mt-1 p-2 w-full bg-white text-black rounded-md border-b-2"
                  placeholder="Photo URL"
                />
              )}
            />
          </div>

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

          <div className="mb-6">
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  id="confirmPassword"
                  className="mt-1 p-2 w-full bg-white text-black rounded-md border-b-2"
                  placeholder="Confirm Password"
                />
              )}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[rgb(141,72,23)] text-white font-bold py-2 px-4 rounded hover:bg-[#BF9376]"
            disabled={isSubmitting}
          >
            Create an account
          </button>
        </form>

        <div className="text-center m-4">
          <p>
            <span className="text-black">Already have an account?</span>{" "}
            <Link to="/signin" className="text-black font-semibold underline">
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-4 flex justify-center">
          <button className='flex justify-center gap-10 className=" border border-[#C7C7C7] hover:bg-[#BF9376]  py-2 px-6 text-sm font-semibold hover:border-0 text-black rounded-full'>
            <img
              src="/public/Group 573.png"
              alt=""
              width="24px"
              height="24px"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
