import React from "react"
import { tw } from "twind"
import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"
import { getDisplayedValue } from "./Select.helpers"

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  const containerStyle = tw`
    relative
    bg-transparentGray15
    text-gray700
    pl-4 py-3 pr-12
    rounded-lg
    w-[fit-content]
    hover:text-black
  `

  return (
    <div className={containerStyle}>
      <label>
        <VisuallyHidden>{label}</VisuallyHidden>
        <select
          className={tw`absolute top-0 left-0 w-full h-full bg-[transparent] appearance-none px-4 py-3`}
          value={value}
          onChange={onChange}
        >
          {children}
        </select>
      </label>
      <div className={tw`w-[fit-content] invisible`}>{displayedValue}</div>
      <div
        className={tw`absolute right-3 top-0 bottom-0 my-auto h-[min-content] pointer-events-none`}
      >
        <Icon id="chevron-down" />
      </div>
    </div>
  )
}

export default Select
