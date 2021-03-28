import React from "react"
import { tw } from "twind"

const ProgressBar = ({ value, size }) => {
  const sizeStyles = {
    small: `h-2`,
    medium: `h-3`,
    large: `h-6`,
  }

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext="Progress"
      className={tw`bg-transparentGray15 shadow-inset rounded-lg ${sizeStyles[size]}`}
    >
      <div className={tw`rounded overflow-hidden h-full`}>
        <div
          className={tw`
            bg-primary
            h-full
            origin-left transition-transform scale-x-[${value / 100}]
          `}
        />
      </div>
    </div>
  )
}

export default ProgressBar
