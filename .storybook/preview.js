import React from "react"
import { RecoilRoot } from "recoil"
import "../src/index.css"

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <Story />
    </RecoilRoot>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
