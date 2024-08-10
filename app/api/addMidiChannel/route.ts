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

        const ch = await prisma?.midiChannel.findFirst({
            where: {
                id: newChannel?.id,
            },
            select: {
                id: true,
                port: true,
                channel: true,
                device: true,
                parameter: true,
            },
        });

        const response = NextResponse.json(ch, {
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
