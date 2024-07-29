"use client";

import CommonFormElement from "@/components/form-element/page";
import { initialLoginFormData, userLoginFormControls } from "../utils";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { loginAction } from "@/actions";

const SignIn = () => {
  const [signInFormData, setSignInFormData] = useState(initialLoginFormData);
  const router = useRouter();

  const handleSignIn = async() => {
        const result = await loginAction(signInFormData);
        console.log(result);
        if(result.success){
            router.push('/')
        }
        
  };

  return (
    <div>
      <h1>Login</h1>
      <form action={handleSignIn}>
        {userLoginFormControls.map((controlItem) => (
          <div key={controlItem.name}>
            <Label>{controlItem.label}</Label>
            <CommonFormElement
              currentItem={controlItem}
              value={setSignInFormData[controlItem.name]}
              onChange={(event) =>
                setSignInFormData({
                  ...signInFormData,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </div>
        ))}
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;
