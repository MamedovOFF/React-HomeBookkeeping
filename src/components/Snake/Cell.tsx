const Cell = ({ apple, snake }: { apple: boolean; snake: boolean }) => {
  return <div className={`cell_snake ${apple && 'apple'} ${snake && 'snake'}`} />
}

export default Cell
