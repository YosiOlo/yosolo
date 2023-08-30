import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
    const role = await prisma.user.findUnique({
        where: { id: Number(params.id) },
        include: { role: true }
    })

    return NextResponse.json(role, { status: 200 });
}

export const PATCH = async (request: Request, { params }: { params: { id: string } }) => {
    const { code, name, description, moduleAccess } = await request.json();

    const role = await prisma.user.update({
        where: { id: Number(params.id) },
        data: {
            name: name,
        }
    });

    return NextResponse.json(role, { status: 200 });
};

export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
    const role = await prisma.user.update({
        where: { id: Number(params.id) },
        data: {
            deletedAt: new Date(),
        }
    })

    return NextResponse.json(role, { status: 200 });
};