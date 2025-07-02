export interface EffectWeights {
    negativeMultiplier: number;  // Multiplier for negative effects (> 1 makes them more punishing)
    positiveMultiplier: number;  // Multiplier for positive effects (< 1 makes them less rewarding)
}

export const defaultWeights: EffectWeights = {
    negativeMultiplier: 1.5,  // Negative effects are 50% more punishing
    positiveMultiplier: 0.7   // Positive effects are 30% less rewarding
};

export const superWeights: EffectWeights = {
    negativeMultiplier: 4,  // Negative effects are 50% more punishing
    positiveMultiplier: 1   // Positive effects are 30% less rewarding
};

// Harsh weight configuration
export const harshWeights: EffectWeights = {
    negativeMultiplier: 2.0,  // Negative effects are 100% more punishing
    positiveMultiplier: 0.5   // Positive effects are 50% less rewarding
};

// Mild weight configuration
export const mildWeights: EffectWeights = {
    negativeMultiplier: 1.2,  // Negative effects are 20% more punishing
    positiveMultiplier: 0.8   // Positive effects are 20% less rewarding
};