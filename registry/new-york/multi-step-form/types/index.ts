import { type ZodType } from 'zod'
import type { FieldPath } from 'react-hook-form'
import type { LucideIcon } from 'lucide-react'

export type MultiFormStep<T extends Record<string, unknown>> = {
  title: string
  description: string
  position: number
  validationSchema?: ZodType<Partial<T>>
  component: React.ReactNode
  icon: LucideIcon
  fields: FieldPath<T>[]
}

export interface MultiFormContextProps<T extends Record<string, unknown>> {
  currentStep: MultiFormStep<T>
  currentStepIndex: number
  isFirstStep: boolean
  isLastStep: boolean

  nextStep: () => void
  previousStep: () => void
  goToStep: (step: number) => void

  steps: MultiFormStep<T>[]
  clearFormState: () => void

  isLoading?: boolean
}
