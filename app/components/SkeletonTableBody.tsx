import React from "react";
import { Skeleton, Tbody, Td, Tr } from "@chakra-ui/react";

interface Props {
    skeletonOptions: {
        rows: number[];
        columns: number[];
        height: string;
    };
}

const SkeletonTableBody = ({ skeletonOptions }: Props) => {
    const rows = [];

    for (let i = 0; i < skeletonOptions.rows.length; i++) {
        const columns = [];
        for (let j = 0; j < skeletonOptions.columns.length; j++) {
            columns.push(
                <Td key={skeletonOptions.columns[j]}>
                    <Skeleton
                        height={skeletonOptions.height}
                        w="90%"
                        margin="auto"
                        rounded="full"
                    />
                </Td>
            );
        }
        rows.push(<Tr key={skeletonOptions.rows[i]}>{columns}</Tr>);
    }

    return <Tbody>{rows}</Tbody>;
};

export default SkeletonTableBody;
