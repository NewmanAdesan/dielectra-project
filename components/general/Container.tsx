

const Container = ({children}: { children: React.ReactNode }) => {
  return (
    <div className="px-5 py-10 max-w-7xl mx-auto">
        {children}
    </div>
  )
}

export default Container