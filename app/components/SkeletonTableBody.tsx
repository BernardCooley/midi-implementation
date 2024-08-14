import React from "react";
import { Skeleton, Tbody, Td, Tr } from "@chakra-ui/react";

interface Props {
    skeletonRows: number[];
    skeletonColumns: number[];
    height?: string;
}

const SkeletonTableBody = ({
    skeletonRows,
    skeletonColumns,
    height = "25px",
}: Props) => {
    const rows = [];

    for (let i = 0; i < skeletonRows.length; i++) {
        const columns = [];
        for (let j = 0; j < skeletonColumns.length; j++) {
            columns.push(
                <Td key={skeletonColumns[j]}>
                    <Skeleton height={height} />
                </Td>
            );
        }
        rows.push(<Tr key={skeletonRows[i]}>{columns}</Tr>);
    }

    return <Tbody>{rows}</Tbody>;
};

export default SkeletonTableBody;
