import BubbleButton from "@/components/BubbleButton";

const variants = ["primary", "secondary", "accent", "warm"] as const;
const sizes = ["small", "medium", "large", "xl"] as const;
const disabledStates = [false, true];
const bubbleCounts = [undefined, 5]; // Can add more if needed

export default function BubbleButtonShowcase() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">BubbleButton Combinations</h1>
      <div className="grid gap-8">
        {variants.map((variant) => (
          <div key={variant}>
            <h2 className="text-2xl font-semibold mb-4 capitalize">
              {variant} Variant
            </h2>
            {sizes.map((size) => (
              <div key={size} className="mb-4">
                <h3 className="text-lg font-medium mb-2 capitalize">
                  {size} Size
                </h3>
                <div className="flex flex-wrap gap-4">
                  {disabledStates.map((disabled) =>
                    bubbleCounts.map((bubbleCount, i) => (
                      <BubbleButton
                        key={`${variant}-${size}-${disabled}-${i}`}
                        variant={variant}
                        size={size}
                        disabled={disabled}
                        bubbleCount={bubbleCount}
                        onClick={() =>
                          console.log(
                            `${variant} ${size} ${
                              disabled ? "Disabled" : "Enabled"
                            } bubbleCount: ${bubbleCount ?? "None"}`
                          )
                        }
                      >
                        {`${variant} ${size} ${
                          disabled ? "Disabled" : "Enabled"
                        }${bubbleCount ? ` (${bubbleCount})` : ""}`}
                      </BubbleButton>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
