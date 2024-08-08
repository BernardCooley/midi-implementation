import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { id } = await req.json();

    try {
        const device = await prisma?.device.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
                manufacturer: true,
                imageSrc: true,
                deviceParamters: {
                    select: {
                        id: true,
                        groupName: true,
                        ccs: {
                            select: {
                                id: true,
                                parameterName: true,
                                number: true,
                            },
                        },
                    },
                },
            },
        });

        const response = NextResponse.json(device, {
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
