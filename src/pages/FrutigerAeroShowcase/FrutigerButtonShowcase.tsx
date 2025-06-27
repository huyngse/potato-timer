import FrutigerButton from "@/components/FrutigerButton";

const variants = ["primary", "secondary", "accent", "warm", "success", "danger"] as const;
const sizes = ["small", "medium", "large", "xl"] as const;
const disabledStates = [false, true];

export default function FrutigerButtonShowcase() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">FrutigerButton Combinations</h1>
      <div className="grid gap-8">
        {variants.map((variant) => (
          <div key={variant}>
            <h2 className="text-2xl font-semibold mb-4 capitalize">{variant} Variant</h2>
            <div className="grid gap-4">
              {sizes.map((size) => (
                <div key={size} className="flex flex-wrap gap-4 items-center">
                  <span className="w-24 text-sm font-medium capitalize">{size}</span>
                  {disabledStates.map((disabled) => (
                    <FrutigerButton
                      key={`${variant}-${size}-${disabled}`}
                      variant={variant}
                      size={size}
                      disabled={disabled}
                      onClick={() => console.log(`${variant} ${size} ${disabled ? "disabled" : "enabled"}`)}
                    >
                      {`${variant} ${size} ${disabled ? "Disabled" : "Enabled"}`}
                    </FrutigerButton>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
