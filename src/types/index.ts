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

export type User = z.infer<typeof UserSchema>
export type UserRegisterForm = Pick<User, 'name' | 'lastname' | 'telefono' | 'email' | 'password' | 'password_confirmation'>
export type UserLoginForm = Pick<User,  'email' | 'password'>
export type UserGet = Pick<User, 'id' | 'name' | 'lastname' | 'telefono' | 'email' | 'password' | 'status'>

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

export type Veterinario = z.infer<typeof VeterinarioSchema>
export type VeterinarioRegisterForm = Pick<Veterinario, 'name' | 'lastname' | 'especialidad' | 'rfc' | 'telefono' | 'email' | 'password' | 'password_confirmation'>
export type VeterinarioResponse = z.infer<typeof VeterinariosResponseSchema>


export const MascotaSchema = z.object({
    id : z.number(),
    name : z.string(),
    especie : z.string(),
    raza : z.string(),
    color : z.string(),
    weight : z.string(),
    userId : z.number(),
})

export const MascotaSchemaResponse = z.array(MascotaSchema)

export type Mascota = z.infer<typeof MascotaSchema>
export type MascotaRegisterForm = Pick<Mascota, 'name' | 'especie' | 'raza' | 'color' | 'weight'>
export type MascotasResponse = z.infer<typeof MascotaSchemaResponse>

export const CitaSchema = z.object({
    id : z.number(),
    fecha : z.date(),
    hora : z.date(),
    price : z.number(),
    status : z.boolean(),
    userId : z.number(),
})

export const CitasResponseSchema = z.array(CitaSchema)

export type Cita = z.infer<typeof CitaSchema>
export type CitasResponse = z.infer<typeof CitasResponseSchema>