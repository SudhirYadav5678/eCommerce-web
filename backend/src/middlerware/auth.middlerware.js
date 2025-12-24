
import { requireAuth } from "@clerk/express";
import { User } from "../models/user.model.js";
import { ENV } from "../config/env.js";

export const protectRoute = [
    requireAuth(),
    async (requireAuth, res, next) => {

    }

]