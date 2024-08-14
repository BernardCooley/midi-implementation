import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { userId, deviceId } = await req.json();

    try {
        const userDeviceConnect = await prisma?.user.update({
            where: {
                id: userId,
            },
            data: {
                devices: {
                    connect: {
                        id: deviceId,
                    },
                },
            },
        });

        if (userDeviceConnect) {
            const userDevice = await prisma?.userDevice.create({
                data: {
                    userId: userId,
                    deviceId: deviceId,
                },
            });
            const response = NextResponse.json(userDevice, {
                status: 200,
            });

            return response;
        } else {
            return NextResponse.json(
                { error: "Failed to connect user to device" },
                {
                    status: 500,
                }
            );
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
