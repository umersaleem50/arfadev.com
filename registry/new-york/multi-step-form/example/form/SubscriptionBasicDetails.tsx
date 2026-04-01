import { Controller, useFormContext } from 'react-hook-form'
import { type Subscription } from '@/validator/subscription.validator'
import { RefreshCwOff, RotateCcw } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

function SubscriptionBasicDetails() {
  const form = useFormContext<Subscription>()

  return (
    <>
      <Controller
        control={form.control}
        name='subscription_type'
        render={({ field, fieldState }) => (
          <FieldSet>
            <FieldLabel>Subscription Type</FieldLabel>
            <RadioGroup
              name={field.name}
              value={field.value}
              onValueChange={field.onChange}
              aria-invalid={fieldState.invalid}
            >
              <FieldLabel htmlFor='subscription_type_recurring'>
                <Field orientation={'horizontal'}>
                  <FieldContent>
                    <FieldTitle>
                      <RotateCcw size={14} /> <Badge>Recurring</Badge>
                    </FieldTitle>
                    <FieldDescription>
                      Subscription will be charged automatically after
                      expiration.
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem
                    value='recurring'
                    id='subscription_type_recurring'
                  />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor='subscription_type_onetime'>
                <Field orientation={'horizontal'}>
                  <FieldContent>
                    <FieldTitle>
                      <RefreshCwOff size={14} />{' '}
                      <Badge variant={'outline'}>One Time</Badge>
                    </FieldTitle>
                    <FieldDescription>
                      Subscription will be paid once in lifetime.
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem
                    value='one-time'
                    id='subscription_type_onetime'
                  />
                </Field>
              </FieldLabel>
            </RadioGroup>
            <FieldError errors={[fieldState?.error]} />
          </FieldSet>
        )}
      />
      <Controller
        control={form.control}
        name='name'
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Name</FieldLabel>
            <FieldContent>
              <Input placeholder='Beginner Plan' {...field} />
            </FieldContent>
            <FieldError errors={[fieldState?.error]} />
          </Field>
        )}
      />
    </>
  )
}

export default SubscriptionBasicDetails
