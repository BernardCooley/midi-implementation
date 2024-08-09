import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { channel, parameter, port, userId, deviceId } = await req.json();

    try {
        const newChannel = await prisma?.midiChannel.create({
            data: {
                user: {
                    connect: { id: userId },
                },
                device: {
                    connect: { id: deviceId },
                },
                channel: channel,
                parameter: parameter,
                port: port,
            },
        });

        const response = NextResponse.json(newChannel, {
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
