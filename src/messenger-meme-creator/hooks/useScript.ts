import { useEffect, useState } from 'react';
import { Character, ScriptStep, ScriptStepType, ReactionEntry, MessageWithReactions } from '../types';

const LOCAL_STORAGE_KEY = 'mmc-script';

export const useScript = (characters: Character[]) => {
    const [script, setScript] = useState<ScriptStep[]>(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(script));
      }, [script]);
    

    const addScriptStep = (type: ScriptStepType) => {
        const newStep: ScriptStep = {
            id: Date.now(),
            type,
            senderId: type === 'groupName' ? null : characters[0]?.id || null,
            content:
                type === 'message'
                    ? ''
                    : type === 'image'
                        ? 'https://via.placeholder.com/300x200?text=Image'
                        : type === 'groupName'
                            ? 'New Group Name'
                            : '',
            reaction: type === 'reaction' ? '❤️' : null,
            targetMessageId: type === 'reaction' ? script[script.length - 1]?.id || null : null,
        };
        setScript(prev => [...prev, newStep]);
    };

    const updateScriptStep = (id: number, field: keyof ScriptStep, value: any) => {
        setScript(s =>
            s.map(step => (step.id === id ? { ...step, [field]: value } : step))
        );
    };

    const removeScriptStep = (id: number) => {
        setScript(s => s.filter(step => step.id !== id));
    };

    const getCurrentGroupName = (stepIndex: number, initialGroupName: string): string => {
        let currentName = initialGroupName;
        for (let i = 0; i <= stepIndex; i++) {
            if (script[i]?.type === 'groupName') {
                currentName = script[i].content;
            }
        }
        return currentName;
    };

    const getMessagesUpToStep = (
        stepIndex: number,
        getCharacter: (id: number | null) => Character | undefined
    ): MessageWithReactions[] => {
        const messages: MessageWithReactions[] = [];
        const reactions: Record<number, ReactionEntry[]> = {};

        for (let i = 0; i <= stepIndex; i++) {
            const step = script[i];
            if (!step) continue;

            if (step.type === 'message' || step.type === 'image') {
                messages.push({
                    ...step,
                    reactions: reactions[step.id] || [],
                });
            } else if (step.type === 'reaction' && step.targetMessageId != null) {
                if (!reactions[step.targetMessageId]) {
                    reactions[step.targetMessageId] = [];
                }
                const user = getCharacter(step.senderId);
                if (user) {
                    reactions[step.targetMessageId].push({
                        reaction: step.reaction || '',
                        user,
                    });
                }
            }
        }

        return messages.map(msg => ({
            ...msg,
            reactions: reactions[msg.id] || [],
        }));
    };

    return {
        script,
        addScriptStep,
        updateScriptStep,
        removeScriptStep,
        getMessagesUpToStep,
        getCurrentGroupName,
    };
};
