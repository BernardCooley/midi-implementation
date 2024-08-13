import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { userId, deviceId } = await req.json();

    try {
        const removeDevice = await prisma?.user.update({
            where: {
                id: userId,
            },
            data: {
                devices: {
                    disconnect: [{ id: deviceId }],
                },
            },
        });

        const response = NextResponse.json(removeDevice, {
            status: 200,
        });

        return response;
    } catch (error: any) {
        console.error(error);

        return NextResponse.json(
            { error: error },
            {
                status: error.status || 500,
            }
        );
    }
}
