import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { searchTerm } = await req.json();

    try {
        if (searchTerm.length > 0) {
            const devices = await prisma?.device.findMany({
                where: {
                    name: {
                        contains: searchTerm,
                        mode: "insensitive",
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
                    UserDevice: true,
                },
            });

            const response = NextResponse.json(devices, {
                status: 200,
            });

            return response;
        } else {
            const devices = await prisma?.device.findMany({
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
                    UserDevice: true,
                },
            });

            const response = NextResponse.json(devices, {
                status: 200,
            });

            return response;
        }
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
