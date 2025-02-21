import {
  type ProductListItemFragment,
  type VariantDetailsFragment,
} from "@/gql/graphql";
import { Button } from "./ui/button";
import Link from "next/link";

export function VariantSelector({
  variants,
  product,
  selectedVariant,
  channel,
}: {
  variants: VariantDetailsFragment[];
  product: ProductListItemFragment;
  selectedVariant?: VariantDetailsFragment;
  channel: string;
}) {
  const colors = [
    ...new Set(
      variants.map(
        (v) =>
          v.attributes.find((attr) => attr.attribute.name === "Color")
            ?.values[0].name
      )
    ),
  ];
  const conditions = [
    ...new Set(
      variants.map(
        (v) =>
          v.attributes.find((attr) => attr.attribute.name === "Condition")
            ?.values[0].name
      )
    ),
  ];

  const selectedColor = selectedVariant?.attributes.find(
    (a) => a.attribute.name === "Color"
  )?.values[0].name;
  const selectedCondition = selectedVariant?.attributes.find(
    (a) => a.attribute.name === "Condition"
  )?.values[0].name;

  const availableConditions = variants
    .filter(
      (v) =>
        v.attributes.find((attr) => attr.attribute.name === "Color")?.values[0]
          .name === selectedColor
    )
    .map(
      (v) =>
        v.attributes.find((attr) => attr.attribute.name === "Condition")
          ?.values[0].name
    );

  const getVariantId = (color: string, condition?: string) => {
    let variant = variants.find(
      (a) =>
        a.attributes.find((attr) => attr.attribute.name === "Color")?.values[0]
          .name === color
    );

    if (color && condition) {
      variant = variants.find(
        (a) =>
          a.attributes.find((attr) => attr.attribute.name === "Color")
            ?.values[0].name === color &&
          a.attributes.find((attr) => attr.attribute.name === "Condition")
            ?.values[0].name === condition
      );
    }
    return variant?.id;
  };

  return (
    <>
      <fieldset role="radiogroup" data-testid="ColorSelector">
        <legend className="text-gray-600 font-light">Choose Color:</legend>
        <div className="mt-4 flex flex-wrap gap-3">
          {colors.map((color) => {
            const variantId = getVariantId(color || "");
            return (
              <Link
                scroll={false}
                href={`/${channel}/products/${product.slug}/?variantId=${variantId}`}
              >
                <Button
                  key={color}
                  variant={selectedColor === color ? "default" : "outline"}
                >
                  {color}
                </Button>
              </Link>
            );
          })}
        </div>
      </fieldset>

      {!!conditions.length && (
        <fieldset role="radiogroup" data-testid="ColorSelector">
          <legend className="text-gray-600 font-light">
            Choose Condition:
          </legend>
          {selectedColor && (
            <div className="mt-4 flex flex-wrap gap-3">
              {conditions.map((condition) => {
                const isAvailable = availableConditions.includes(condition);
                const variantId = isAvailable
                  ? getVariantId(selectedColor, condition || "")
                  : "";
                return (
                  <Link
                    scroll={false}
                    href={`/${channel}/products/${product.slug}?variantId=${variantId}`}
                  >
                    <Button
                      key={condition}
                      disabled={!isAvailable}
                      variant={
                        selectedCondition === condition ? "default" : "outline"
                      }
                    >
                      {condition}
                    </Button>
                  </Link>
                );
              })}
            </div>
          )}
        </fieldset>
      )}
    </>
  );
}
