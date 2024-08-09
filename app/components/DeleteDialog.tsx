import React, { forwardRef, LegacyRef, RefObject } from "react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
} from "@chakra-ui/react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
}

const DeleteDialog = forwardRef(
    (
        { isOpen, onClose, onDelete }: Props,
        ref: LegacyRef<HTMLButtonElement>
    ) => {
        return (
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={ref as RefObject<HTMLButtonElement>}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Midi Channel
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You cannot undo this action
                            afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={ref} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="red" onClick={onDelete} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        );
    }
);

export default DeleteDialog;
