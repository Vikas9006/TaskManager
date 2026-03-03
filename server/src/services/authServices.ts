import { findUserByEmail, createUser } from '../db/queries/user.queries';

export const signupService = async (name: string, email: string, password: string) => {
    // Check if user already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser === null) return null;
    const newUser = await createUser({ name, email, password });
    return newUser;
};