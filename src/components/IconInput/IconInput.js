import React from "react"
import { apply, tw } from "twind"
import { css } from "twind/css"
import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const inputSizeClasses = {
    small: apply`text-sm pl-6`,
    large: apply`text-lg pl-8`,
  }

  const iconSizes = {
    small: tw.theme("spacing.4"),
    large: tw.theme("spacing.6"),
  }

  return (
    <div className={tw`relative block text-gray700 hover:text-black`}>
      <label>
        <VisuallyHidden>{label}</VisuallyHidden>
        <input
          type="text"
          placeholder={placeholder}
          className={tw`
            w-[${width}px]
            ${inputSizeClasses[size]}
            border(b-1 black)
            rounded-none
            font-bold
            placeholder-gray500
            placeholder-shown:font-normal
            focus:${css({ outlineOffset: "3px" })}
          `}
        />
      </label>
      <div
        className={tw`absolute top-0 left-0 bottom-0 h-fit my-auto pointer-events-none ${
          size === "large" && `my-px`
        }`}
      >
        <Icon id={icon} size={iconSizes[size]} />
      </div>
    </div>
  )
}

export default IconInput
