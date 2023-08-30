import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export const GET = async () => {
    const user = await prisma.user.findMany({
        orderBy: { updatedAt: 'desc' },
        include: {
            role: true,
            status: true,
        }
    });

    return NextResponse.json(user, { status: 200 })
}

export const POST = async (request: Request) => {
    const body = await request.json();
    
    const customer = await prisma.user.create({
        data: body
    });

    return NextResponse.json(customer, { status: 201 });
};