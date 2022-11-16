import { User } from "../Type/User";
import instance from "./instance";

export const signup = (user: User) => {
    return instance.post("/users", user);
}
export const signin = (user: any) => {
    return instance.get("/users", user);
}