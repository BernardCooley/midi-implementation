import { MidiDevice } from "@/app/types";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    const { data } = await req.json();

    const d: MidiDevice[] = data;

    try {
        for (const device of d) {
            await prisma?.device.create({
                data: {
                    name: device.name,
                    imageSrc: device.imageSrc,
                    deviceParamters: {
                        create: device.deviceParamters.map((param) => ({
                            groupName: param.groupName,
                            ccs: {
                                create: param.ccs.map((cc) => ({
                                    parameterName: cc.parameterName,
                                    number: cc.number,
                                })),
                            },
                        })),
                    },
                    manufacturer: {
                        connectOrCreate: {
                            where: {
                                name: device.manufacturer.name,
                            },
                            create: {
                                name: device.manufacturer.name,
                            },
                        },
                    },
                },
            });
        }
        const response = NextResponse.json(
            {},
            {
                status: 200,
            }
        );
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
