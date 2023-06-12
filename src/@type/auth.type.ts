export interface RegisterPayload {
    full_name: string,
    email: string,
    password: string,
    password_confirmation: string,
    phone_number: string,
    address?: string,
}

export interface LoginPayload {
    email: string,
    password: string,
}