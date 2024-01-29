import express from "express";
import protect from "../middlewares/authMiddleware.js";
import {
  accessChat,
  addToGroup,
  createGroupChat,
  fetchChat,
  removefromGroup,
  renameGroup,
} from "../controllers/chatControllers.js";

const router = express.Router();

// both 1to1 and grp chat use the same Schema, but isgrpchat is checked
router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChat);
// for group
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup); // put cuz just updates, no creations
router.route("/groupadd").put(protect, addToGroup);
router.route("/groupremove").put(protect, removefromGroup);

export default router;
