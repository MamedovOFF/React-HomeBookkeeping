const Cell = ({ apple }: { apple: boolean }) => {
  return <div className={`cell_snake ${apple && 'apple'}`} />
}

export default Cell
