import './App.css'

function App() {
  var isDark = false

  const toggleDarkMode = () => {
    isDark = !isDark
    document.body.classList.toggle('dark', isDark)
  }

  return (
    <>
      <div class="bg-white dark:bg-black text-black dark:text-white">
        Dark mode test
      </div>
      <button
        id="toggleDark"
        class="px-4 py-2 text-sm font-medium mt-8 ml-4 text-blue-900 bg-blue-100 rounded-md"
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </button>
    </>
  )
}

export default App
