
'use client'
import AuthForm from "@/components/AuthForm"
import { signUpSchema } from "@/lib/validation"
const page = () => (
    <AuthForm 
    type="sign-up"
    schema = {signUpSchema}
    defaultVal = {{
        email: "",
        fullName: "",
        universityId: 0,
        universityCard: "",
        password: "",
    }}
    onSubmit = {() => {}}
    />
)

export default page
