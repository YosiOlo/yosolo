import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export const PATCH = async (request: Request, { params }: { params: { id: string } }) => {
    const result = await prisma.purchaseTools.update({
        where: { id: Number(params.id) },
        data: { isStatus: 2 },
    });

    return NextResponse.json(result, { status: 200 });
};