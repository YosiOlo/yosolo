import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
    const role = await prisma.role.findUnique({
        where: { id: Number(params.id) },
        include: { user: true }
    })

    return NextResponse.json(role, { status: 200 });
}

export const PATCH = async (request: Request, { params }: { params: { id: string } }) => {
    const { code, name, description, moduleAccess } = await request.json();

    const role = await prisma.role.update({
        where: { id: Number(params.id) },
        data: {
            code: code,
            name: name,
            description: description,
            moduleAccess: moduleAccess,
        }
    });

    return NextResponse.json(role, { status: 200 });
};

export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
    const role = await prisma.role.update({
        where: { id: Number(params.id) },
        data: {
            deletedAt: new Date(),
        }
    })

    return NextResponse.json(role, { status: 200 });
};