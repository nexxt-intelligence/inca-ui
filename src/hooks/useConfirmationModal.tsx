import * as React from 'react';
import { modals } from '@mantine/modals';
import Text from '../components/ui/Text';

type ConfirmationModalProps = {
    title: string;
    confirmLabel?: string;
    cancelLabel?: string;
    message?: string;
    children?: React.ReactNode;
};

export const useConfirmationModal = () => {
    const showConfirmationModal = ({
        title,
        confirmLabel = 'Confirm',
        cancelLabel = 'Cancel',
        children = <></>
    }: ConfirmationModalProps): Promise<boolean> => {
        return new Promise((resolve) => {
            modals.openConfirmModal({
                title,
                children,
                labels: { confirm: confirmLabel, cancel: cancelLabel },
                onCancel: () => resolve(false),
                onConfirm: () => resolve(true)
            });
        });
    };

    const showSimpleConfirmationModal = ({
        title,
        confirmLabel = 'Confirm',
        cancelLabel = 'Cancel',
        message = ''
    }: ConfirmationModalProps): Promise<boolean> => {
        return new Promise((resolve) => {
            modals.openConfirmModal({
                title,
                children: <Text>{message}</Text>,
                labels: { confirm: confirmLabel, cancel: cancelLabel },
                onCancel: () => resolve(false),
                onConfirm: () => resolve(true)
            });
        });
    };

    return { showConfirmationModal, showSimpleConfirmationModal };
};
