
'use client'

import AuthForm from "@/components/AuthForm"
import { signInWithCredentials } from "@/lib/actions/auth"
import { signInSchema } from "@/lib/validation"
const page = () => (
    <AuthForm 
    type="sign-in"
    schema = {signInSchema}
    defaultVal = {{
        email: "",
        password: "",
    }}
    onSubmit = {signInWithCredentials}
    />
)

export default page
