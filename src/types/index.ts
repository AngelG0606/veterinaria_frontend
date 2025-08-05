import { z } from 'zod'

export const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    lastname: z.string(),
    telefono: z.string(),
    email: z.string(),
    password: z.string(),
    status : z.boolean(),
    password_confirmation: z.string(),
})

export const VeterinarioSchema = z.object({
    id : z.number(),
    name: z.string(),
    lastname: z.string(),
    especialidad: z.string(),
    rfc: z.string(),
    email: z.string(),
    telefono: z.string(),
    password: z.string(),
    password_confirmation: z.string(),
})

export const VeterinariosResponseSchema = z.array(VeterinarioSchema)


export type User = z.infer<typeof UserSchema>
export type UserRegisterForm = Pick<User, 'name' | 'lastname' | 'telefono' | 'email' | 'password' | 'password_confirmation'>
export type UserLoginForm = Pick<User,  'email' | 'password'>
export type UserGet = Pick<User, 'id' | 'name' | 'lastname' | 'telefono' | 'email' | 'password' | 'status'>

export type Veterinario = z.infer<typeof VeterinarioSchema>
export type VeterinarioRegisterForm = Pick<Veterinario, 'name' | 'lastname' | 'especialidad' | 'rfc' | 'telefono' | 'email' | 'password' | 'password_confirmation'>
export type VeterinarioResponse = z.infer<typeof VeterinariosResponseSchema>