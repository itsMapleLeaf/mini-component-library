import React from "react"
import { tw } from "twind"

const ProgressBar = ({ value, size }) => {
  const outerStyle = tw`
    ${size === "small" && `h-2`}
    ${size === "medium" && `h-3`}
    ${size === "large" && `h-6 p-1`}
    bg-transparentGray15
    shadow-inset
    rounded-lg
  `

  const fillStyle = tw`
    bg-primary
    h-full
    rounded-tl rounded-bl
    origin-left transition-transform scale-x-[${value / 100}]
    ${value === 100 && `rounded-br rounded-tr`}
  `

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext="Progress"
      className={outerStyle}
    >
      <div className={fillStyle}></div>
    </div>
  )
}

export default ProgressBar
