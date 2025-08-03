import { z } from 'zod'

export const UserSchema = z.object({
    name: z.string(),
    lastname: z.string(),
    telefono: z.string(),
    email: z.string(),
    password: z.string(),
    status : z.boolean(),
    password_confirmation: z.string(),
})


export type User = z.infer<typeof UserSchema>
export type UserRegisterForm = Pick<User, 'name' | 'lastname' | 'telefono' | 'email' | 'password' | 'password_confirmation'>
export type UserLoginForm = Pick<User,  'email' | 'password'>