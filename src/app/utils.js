export const registrationFormControls = [
    {
        name:'username',
        label:'Username',
        placeholder:"Please Enter your Username",
        componentType:'input',
        type:'text'
    },
    {
        name:'email',
        label:'Email',
        placeholder:"Please Enter your Email",
        componentType:'input',
        type:'email'
    },
    {
        name:'password',
        label:'Password',
        placeholder:"Please Enter your Password",
        componentType:'input',
        type:'password'
    }
]


export const initialData={
    username:"",
    email:"",
    password:""
}


export const userLoginFormControls = [
    {
      name: "email",
      label: "Email",
      placeholder: "Please enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Please enter your password",
      componentType: "input",
      type: "password",
    },
  ];

  export const initialLoginFormData = {
    email: "",
    password: "",
  };