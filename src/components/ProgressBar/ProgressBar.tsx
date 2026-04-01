import { Fragment } from 'react'
import { useProgressBar } from './useProgressBar'
import './styles.scss'

interface Step {
  number: number
  name: string
}

interface ProgressBarProps extends React.HTMLAttributes<HTMLElement> {
  steps: Step[]
  currentStep: number
}

export function ProgressBar({ steps, currentStep, ...props }: ProgressBarProps) {
  const { getStepStatus } = useProgressBar(currentStep)

  return (
    <nav className='progress-bar' {...props}>
      {steps?.map((step, index) => {
        const stepStatus = getStepStatus(index)

        return (
          <Fragment key={index}>
            {index > 0 && (
              <div
                className={`
                  progress-bar__connector 
                  ${index <= currentStep ? 'progress-bar__connector--done' : ''}
                `}
              />
            )}
            <div
              className={`
              progress-bar__step
              ${stepStatus ? `progress-bar__step--${stepStatus}` : ''}
            `}
            >
              <span className='progress-bar__number'>{step.number}</span>
              <span className='progress-bar__name'>{step.name}</span>
            </div>
          </Fragment>
        )
      })}
    </nav>
  )
}
