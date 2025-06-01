
'use client'
import AuthForm from "@/components/AuthForm"
import { signInSchema } from "@/lib/validation"
const page = () => (
    <AuthForm 
    type="sign-in"
    schema = {signInSchema}
    defaultVal = {{
        email: "",
        password: "",
    }}
    onSubmit = {() => {}}
    />
)

export default page
