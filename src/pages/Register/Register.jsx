import {
  Card,
  Input,
  Button,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
  const handleRegister = e => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const name = form.get("name");
      const photoURL = form.get("photo");
      const email = form.get("email");
      const password = form.get("password");
      console.log(name,photoURL,email,password);
  };

  return (
    <div>
      <Navbar />
      <Card
        color="transparent"
        className="shadow-2xl mt-32 max-w-3xl  mx-auto py-20"
      >
        <Typography variant="h4" color="blue-gray" className="text-center mb-6">
          Register your account
        </Typography>
        <div className="border-b-2 w-3/4 mx-auto"></div>
        <form onSubmit={handleRegister} className="mt-8 mb-2 w-3/4 mx-auto">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              type="text"
              name="name"
              required
              placeholder="Alex"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 !bg-[#F3F3F3]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Photo URL
            </Typography>
            <Input
              size="lg"
              type="text"
              name="photo"
              required
              placeholder="Photo URL"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 !bg-[#F3F3F3]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email address
            </Typography>
            <Input
              size="lg"
              type="email"
              name="email"
              required
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 !bg-[#F3F3F3]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              name="password"
              required
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 !bg-[#F3F3F3]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            type="checkbox"
            name="terms"
            id="terms"
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the &nbsp;
                <a href="#" className="font-medium underline text-blue-500">
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />

          <Button type="submit" className="mt-6 capitalize" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account. Please{" "}
            <Link to={"/login"} className="font-medium underline text-blue-600">
              Login Here
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
