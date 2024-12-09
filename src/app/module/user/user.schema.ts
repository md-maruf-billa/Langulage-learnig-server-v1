import { model, Schema } from "mongoose";
import { Tuser } from "./user.interface";

export const UserSchema = new Schema<Tuser>({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String,
        required: false,
    }

})

// create a model
export const userModel = model("user", UserSchema);