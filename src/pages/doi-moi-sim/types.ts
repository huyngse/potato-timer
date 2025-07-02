export interface GameState {
    economy: number;
    publicSupport: number;
    international: number;
    currentScenario: number;
    scenariosCompleted: number;
    isGameComplete: boolean;
    currentScenarioData: Scenario | null;
    showingEffects: boolean;
    selectedChoice: Choice | null;
    isStarted: boolean;
}

// Types
export interface Choice {
    text: string;
    effects: {
        economy: number;
        publicSupport: number;
        international: number;
    };
}

export interface Scenario {
    id: number;
    title: string;
    description: string;
    choices: Choice[];
}
