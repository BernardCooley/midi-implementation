import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { id, data } = await req.json();

    try {
        const channel = await prisma?.midiChannel.update({
            where: {
                id,
            },
            data: {
                channel: data.channel,
                parameter: data.parameter,
                port: data.port,
                deviceId: data.deviceId,
            },
        });

        const response = NextResponse.json(channel, {
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
