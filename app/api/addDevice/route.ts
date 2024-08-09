import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface MidiCC {
    parameterName: string;
    number: number;
}

interface DeviceParamters {
    groupName: string;
    ccs: MidiCC[];
}

export async function POST(req: Request) {
    const { data } = await req.json();

    try {
        for (const device of data) {
            await prisma.device.create({
                data: {
                    name: device.name,
                    imageSrc: device.imageSrc,
                    deviceParamters: {
                        create: device.deviceParamters.map(
                            (param: DeviceParamters) => ({
                                groupName: param.groupName,
                                ccs: {
                                    create: param.ccs.map((cc) => ({
                                        parameterName: cc.parameterName,
                                        number: cc.number,
                                    })),
                                },
                            })
                        ),
                    },
                    manufacturer: {
                        connectOrCreate: {
                            where: {
                                name: device.manufacturer,
                            },
                            create: {
                                name: device.manufacturer,
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
