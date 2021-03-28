/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import "./searchBar.atom.scss"

interface IProps {
  fieldValue: string
  onChange: (e: any) => void
}
export const SearchBar: React.FC<IProps> = ({ fieldValue, onChange }: IProps) => {
  return (
    <div className="searchBarContainer">
      <i className="fas fa-search"></i>
      <input
        className="searchBar"
        onChange={onChange}
        value={fieldValue}
        type="search"
        placeholder="Search character ..."
      />
    </div>
  )
}

export default SearchBar
