import { NextResponse } from "next/server";

export async function POST(request) {
    const {address, email, items, name, phone} = await request.json();
    console.log(address, email, items, name, phone);
    return NextResponse.json({message:"catch rep"},{status: 200})
}