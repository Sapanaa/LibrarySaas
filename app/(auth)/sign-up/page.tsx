
'use client'
import AuthForm from "@/components/AuthForm"
import { signUpSchema } from "@/lib/validation"
import { signUp } from "@/lib/actions/auth"
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
    onSubmit = {signUp}
    />
)

export default page
