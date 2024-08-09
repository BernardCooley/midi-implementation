import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface MidiCC {
    parameterName: string;
    number: number;
}

interface DeviceParamters {
    groupName: string;
    ccs: MidiCC[];
}

export async function POST(req: Request) {
    try {
        const { data } = await req.json();

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
                                    create: param.ccs.map((cc: MidiCC) => ({
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

        return NextResponse.json({ message: "Devices added successfully" });
    } catch (error) {
        console.error("Error adding devices:", error);
        return NextResponse.json(
            { error: "Failed to add devices" },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
