import './styles.scss'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  return (
    <div className='search-input'>
      <span className='search-input__icon'>🔍</span>
      <input
        className='search-input__field'
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={placeholder}
      />
      {value && (
        <button
          className='search-input__clear'
          onClick={() => onChange('')}
          aria-label='Limpar busca'
        >
          ×
        </button>
      )}
    </div>
  )
}
