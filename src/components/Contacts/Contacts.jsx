import { nanoid } from "nanoid"

export const Contacts = ({ contactsList }) => {
  return (
    <ul>
      {contactsList.map(contact => {
        return (
          <li key={nanoid()}>{contact}</li>
        )
      })}
    </ul>
  )
}