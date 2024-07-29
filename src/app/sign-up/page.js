"use client";

import CommonFormElement from "@/components/form-element/page";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { initialData, registrationFormControls } from "../utils";
import { Button } from "@/components/ui/button";
import {registerAction} from "@/actions";
import { useRouter } from "next/navigation";


const SignUp = () => {
  const [signupFormData, setSignupFormData] = useState(initialData);
  const router = useRouter()
  
 const handleButtonValid = () =>{
    return Object.keys(signupFormData).every(key=>signupFormData[key].trim()!=='')
 }

 const handleSignUp = async () =>{
    const result = await registerAction(signupFormData);
    console.log(result);
    if(result.data){
        router.push('/sign-in')
    }

 }

  return (
    <div>
      <h1>Welcome To NextJS Register</h1>
      <form action={handleSignUp}>
        {registrationFormControls.map((control) => (
          <div>
            <Label>{control.label}</Label>
            <CommonFormElement
              currentItem={control}
              value={signupFormData[control.name]}
              onChange={(event) =>
                setSignupFormData({
                  ...signupFormData,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </div>
        ))}
        <Button disabled={!handleButtonValid()} className="disabled:opacity-65" type="submit">SignUp</Button>
      </form>
    </div>
  );
};

export default SignUp;
