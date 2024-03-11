

export default function TabButton({ children, isSelected, ...props }) {

  const styleButton ={
    backgroundColor: "#fff",
    border:'none'
  }
  return (
    <li>
      <button style={styleButton} className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
