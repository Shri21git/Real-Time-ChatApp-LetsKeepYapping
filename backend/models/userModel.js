import mongoose from "mongoose";

const userModel = mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true },
    password: { type: String, trim: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userModel);
export default User;
