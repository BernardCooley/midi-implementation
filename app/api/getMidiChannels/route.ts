import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { userId } = await req.json();

    try {
        const midiChannels = await prisma?.midiChannel.findMany({
            where: {
                userId,
            },
            select: {
                id: true,
                port: true,
                channel: true,
                device: true,
                parameter: true,
            },
        });

        const response = NextResponse.json(midiChannels, {
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
