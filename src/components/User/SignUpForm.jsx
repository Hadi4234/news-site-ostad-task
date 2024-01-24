"use client"
import {useState} from "react";
import { IsEmail, IsEmpty} from "@/utility/FormHelper";
import SubmitButton from "@/components/SubmitButton";
import {useRouter} from "next/navigation";
import { toast } from "sonner"


const SignUpForm = () => {
    const [data, setData] = useState({firstName:"",lastName:"",email:"",mobile:"",password:""});
    const [submit, setSubmit] = useState(false);
    const router=useRouter();
    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }
    const formSubmit = async () => {

      if(IsEmpty(data.firstName)){
          toast("First Name Required")
      }
      else if(IsEmpty(data.lastName)){
          toast("last Name Required")
      }
      else if(IsEmpty(data.mobile)){
          toast("Mobile No Required")
      }
      else if(IsEmail(data.email)){
          toast("Valid Email Address Required")
      }
      else if(IsEmpty(data.password)){
          toast("Password Required")
      }
      else{
          setSubmit(true);
          const options = {
              method: 'POST',
              headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
              body: JSON.stringify(data)
          }
          let res=await fetch("/api/user/registration",options);
          let ResJson=await res.json();

          if(ResJson['status']==="success"){
              toast("Registration Success")
              router.push("/user/login")
          }
          else{
              setSubmit(false);
              toast("Request Fail")
          }
      }
    }

    return (
            <div className="row h-100  justify-content-center center-screen">
                <div className="col-md-8 col-lg-8 col-sm-12 col-12 ">
                    <div className="card container-fluid animated fadeIn p-5 gradient-bg">
                        <div className="row ">
                            <h5 className="mb-1 mx-0 px-0">User Registration</h5>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label">First Name</label>
                            <input value={data.firstName} onChange={(e)=>{inputOnChange("firstName",e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label">Last Name</label>
                            <input value={data.lastName} onChange={(e)=>{inputOnChange("lastName",e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label">Mobile</label>
                            <input value={data.mobile}  onChange={(e)=>{inputOnChange("mobile",e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label">Email</label>
                            <input value={data.email} onChange={(e)=>{inputOnChange("email",e.target.value)}} type="email" className="form-control"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                            <label className="form-label">Password</label>
                            <input value={data.password} onChange={(e)=>{inputOnChange("password",e.target.value)}} type="password" className="form-control"/>
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                                <SubmitButton className="btn btn-danger w-100 mt-3" submit={submit} onClick={formSubmit} text="Sign Up"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

    );
};
export default SignUpForm;