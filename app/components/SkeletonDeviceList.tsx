import React from "react";
import { Grid, Skeleton, Stack } from "@chakra-ui/react";

interface Props {
    width: number;
}

const SkeletonDeviceList = ({ width }: Props) => {
    return (
        <Stack>
            <Grid
                templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
                gap={[4, 6, 8]}
            >
                <Skeleton aspectRatio="3/2" w="auto" rounded="5%" />
                <Skeleton aspectRatio="3/2" w="auto" rounded="5%" />
                <Skeleton aspectRatio="3/2" w="auto" rounded="5%" />
                <Skeleton aspectRatio="3/2" w="auto" rounded="5%" />
                {width > 432 && (
                    <>
                        <Skeleton aspectRatio="3/2" w="auto" rounded="5%" />
                        <Skeleton aspectRatio="3/2" w="auto" rounded="5%" />
                    </>
                )}
            </Grid>
        </Stack>
    );
};

export default SkeletonDeviceList;
