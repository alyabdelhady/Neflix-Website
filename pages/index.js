import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styles from "./../styles/Login.module.css"
import Navbarlogin from "../components/NavbarLogin/Navbarlogin";

function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      console.log(data);
      router.push("/netflix");
  };

  return (
    <div>
      <Navbarlogin/>
      <section className={styles.gradient_form}>
        <div className={`${styles.login_form} container py-5 h-80`}>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="bg-black col-lg-12 ">
                    <div className="card-body text-center p-md-5 mx-md-4">
                      <div className="text-center">
                        <h1>NETFLIX</h1>
                      </div>

                      <form
                        className={styles.form}
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <label className="form-label">Name</label>
                          <input
                            type="name"
                            className="form-control "
                            placeholder="Your Name"
                            {...register("name", {
                              required: "Name is required",
                            })}
                          />

                          <div className={styles.validate_massage}>
                            {errors.name && <p>{errors.name.message}</p>}
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email address"
                            {...register("email", {
                              required: "Email is required",
                            })}
                          />

                          <div className={styles.validate_massage}>
                            {errors.email && <p>{errors.email.message}</p>}
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                value: 5,
                                message:
                                  "Password should have more than 5 characters",
                              },
                              maxLength: {
                                value: 12,
                                message:
                                  "Password should have less than 12 characters",
                              },
                            })}
                          />

                          <div className={styles.validate_massage}>
                            {errors.password && (
                              <p>{errors.password.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className={`${styles.btn }`}
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
