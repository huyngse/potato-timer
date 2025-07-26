export type Character = {
    id: number;
    username: string;
    profilePic: string;
};

export type ScriptStepType = 'message' | 'image' | 'reaction' | 'groupName';

export type ScriptStep = {
    id: number;
    type: ScriptStepType;
    senderId: number | null;
    content: string;
    reaction?: string | null;
    targetMessageId?: number | null;
};

export type ReactionEntry = {
    reaction: string;
    user: Character;
};

export type MessageWithReactions = ScriptStep & {
    reactions: ReactionEntry[];
};
