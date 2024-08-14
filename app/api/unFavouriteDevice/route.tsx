import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { userId, deviceId } = await req.json();

    try {
        const removeDeviceConnect = await prisma?.user.update({
            where: {
                id: userId,
            },
            data: {
                devices: {
                    disconnect: [{ id: deviceId }],
                },
            },
        });

        if (removeDeviceConnect) {
            const userDevice = await prisma?.userDevice.deleteMany({
                where: {
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
                { error: "Failed to disconnect user from device" },
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
