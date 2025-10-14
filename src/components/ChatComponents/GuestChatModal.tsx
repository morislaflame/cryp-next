import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store/StoreProvider';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface GuestChatModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSendMessage: (text: string) => void;
}

const GuestChatModal: React.FC<GuestChatModalProps> = observer(({ isOpen, onClose, onSendMessage }) => {
    const { chat } = useStore();
    const [error, setError] = useState('');

    // Создание гостевого чата поддержки при открытии
    useEffect(() => {
        if (isOpen) {
            chat.createGuestSupportChat().catch((err) => {
                console.error('Error creating guest support chat:', err);
                setError('Ошибка создания гостевого чата');
            });
        }
    }, [isOpen, chat]);

    const handleSendMessageInternal = (text: string) => {
        onSendMessage(text);
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md bg-gradient-to-br from-gray-900 to-emerald-900 border-none rounded-2xl p-0 max-h-[80vh] h-[600px] flex flex-col overflow-hidden backdrop-blur-xl shadow-2xl">
                <VisuallyHidden>
                    <DialogHeader className="p-0">
                        <DialogTitle className="sr-only">Гостевой чат с администратором</DialogTitle>
                    </DialogHeader>
                </VisuallyHidden>

                <div className="flex flex-col h-full overflow-hidden">
                    <ChatHeader onClose={handleClose} />

                    {error && (
                        <div className="px-4 py-2 bg-red-500/20 text-red-200 text-sm">
                            {error}
                        </div>
                    )}

                    <ChatMessages messages={chat.messages} />

                    <ChatInput
                        onSendMessage={handleSendMessageInternal}
                        disabled={chat.loading}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
});

export default GuestChatModal;