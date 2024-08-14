import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { userId } = await req.json();

    try {
        const devices = await prisma?.device.findMany({
            where: {
                UserDevice: {
                    some: {
                        userId: userId,
                    },
                },
            },
            select: {
                id: true,
                name: true,
                manufacturer: true,
                imageSrc: true,
                _count: {
                    select: {
                        deviceParamters: true,
                    },
                },
            },
        });

        return NextResponse.json(devices, { status: 200 });
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
