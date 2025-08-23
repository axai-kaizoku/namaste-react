import React from "react"

const SelectContext = React.createContext()

function Select(props) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(props.value || props.defaultValue)

  React.useEffect(() => {
    if (props.value !== undefined) {
      setValue(props.value)
    }
  }, [props.value])

  const handleValueChange = (newValue) => {
    setValue(newValue)
    setOpen(false)
    if (props.onValueChange) {
      props.onValueChange(newValue)
    }
  }

  return (
    <div className="relative">
      <SelectContext.Provider value={{ open, setOpen, value, setValue: handleValueChange }}>
        {props.children}
      </SelectContext.Provider>
    </div>
  )
}

function SelectTrigger({ children, className = "" }) {
  const { setOpen, value } = React.useContext(SelectContext)

  return (
    <button
      type="button"
      onClick={() => setOpen((prev) => !prev)}
      className={`px-3 py-1 rounded-md bg-input text-foreground border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring flex items-center justify-between min-w-[80px] ${className}`}
    >
      <span>{children || value || "Select..."}</span>
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

function SelectContent({ children, className = "" }) {
  const { open } = React.useContext(SelectContext)

  if (!open) return null

  return (
    <div
      className={`absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-md shadow-lg z-50 ${className}`}
    >
      {children}
    </div>
  )
}

function SelectItem({ value, children, className = "" }) {
  const { setValue, value: selectedValue } = React.useContext(SelectContext)
  const isSelected = selectedValue === value

  return (
    <div
      onClick={() => setValue(value)}
      className={`px-3 py-2 cursor-pointer hover:bg-accent text-sm ${
        isSelected ? "bg-accent text-accent-foreground" : "text-foreground"
      } ${className}`}
    >
      {children}
    </div>
  )
}

Select.Trigger = SelectTrigger
Select.Content = SelectContent
Select.Item = SelectItem

export default Select
