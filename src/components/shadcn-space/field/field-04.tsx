import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShippingAddressDemo = () => {
  return (
    <FieldSet className="w-full max-w-lg">
      <FieldLegend>Shipping address</FieldLegend>
      <FieldDescription>
        We&apos;ll use this address for delivery and order updates.
      </FieldDescription>
      <FieldGroup>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="shipping-first-name">First name</FieldLabel>
            <Input id="shipping-first-name" placeholder="Jane" />
          </Field>
          <Field>
            <FieldLabel htmlFor="shipping-last-name">Last name</FieldLabel>
            <Input id="shipping-last-name" placeholder="Doe" />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="shipping-address">Street address</FieldLabel>
          <Input id="shipping-address" placeholder="123 Main Street" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="shipping-city">City</FieldLabel>
            <Input id="shipping-city" placeholder="San Francisco" />
          </Field>
          <Field>
            <FieldLabel htmlFor="shipping-state">State</FieldLabel>
            <Input id="shipping-state" placeholder="California" />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="shipping-zip">Postal code</FieldLabel>
            <Input id="shipping-zip" placeholder="94103" />
          </Field>
          <Field>
            <FieldLabel htmlFor="shipping-country">Country</FieldLabel>
            <Select defaultValue="United States">
              <SelectTrigger id="shipping-country" className="w-full">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="United States">United States</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                <SelectItem value="India">India</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field orientation="horizontal">
          <Checkbox id="shipping-save" defaultChecked />
          <FieldLabel htmlFor="shipping-save" className="font-normal">
            Save this address for future orders
          </FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
};

export default ShippingAddressDemo;
