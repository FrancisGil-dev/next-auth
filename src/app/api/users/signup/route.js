import { connectDb } from "@/db/dbConfig";
import {user} from "@/models/userModel"

import { NextRequest, NextResponse  } from "next/server";
import bcryptjs from "bcryptjs";

connectDb();

export async function POST (req: NextRequest){
    
}

