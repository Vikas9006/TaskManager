import { db } from "../../config/database";
import { users } from "../schema/users.schema";
import { eq } from "drizzle-orm";

export const createUser = async (data: {
    name: string;
    email: string;
    password: string;
}) => {
  return db.insert(users).values(data).returning();
};

export const findUserByEmail = async (email: string) => {
  return db.select().from(users).where(eq(users.email, email));
};