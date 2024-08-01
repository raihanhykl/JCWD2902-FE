"use server";
import { api } from "@/config/axios.config";
import { loginSchema, registerSchema } from "@/schemas/auth.schema";
import { cookies } from "next/headers";
import { z } from "zod";

export const loginAction = async (value: z.infer<typeof loginSchema>) => {
  try {
    const res = await api.get("/users", {
      params: {
        phone_number: value.phone_number,
        password: value.password,
      },
    });
    if (res.data.length === 0) throw new Error("user not found");

    const user = res.data[0];
    delete user.password;
    delete user.phone_number;

    cookies().set("user", JSON.stringify(user));
    return {
      message: "login berhasil",
    };
  } catch (error) {
    throw error;
  }
};

export const registerAction = async (value: z.infer<typeof registerSchema>) => {
  try {
    const res = await api.post("/users", value);
    return {
      message: "register berhasil",
    };
  } catch (error) {
    return {
      message: "register gagal",
    };
  }
};
