import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userModel = mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true, unique: true },
    password: { type: String, trim: true },
    pic: {
      type: String,
      default:
        "https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png",
    },
  },
  { timestamps: true }
);

userModel.methods.matchPassword = async function (enteredPass) {
  return bcrypt.compare(enteredPass, this.password);
};

userModel.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt); // await has effect, else password wont be encrypted
});

const User = mongoose.model("User", userModel);
export default User;
