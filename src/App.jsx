import { useState } from "react"
import LanguageProvider from "./i18n/LanguageProvider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import DiscoverySteps from "./components/DiscoverySteps"
import RegionSelect from "./components/RegionSelect"
import CategorySelect from "./components/CategorySelect"
import SubCategorySelect from "./components/SubCategorySelect"
import Results from "./components/Results"

export default function App() {
  const [selectedRegion, setSelectedRegion] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedSubCategory, setSelectedSubCategory] = useState("")
  const currentStep = !selectedRegion ? 0 : !selectedCategory ? 1 : 2

  function reset() {
    setSelectedRegion("")
    setSelectedCategory("")
    setSelectedSubCategory("")
  }

  function renderScreen() {
    if (!selectedRegion) {
      return <RegionSelect setSelectedRegion={setSelectedRegion} />
    }
    if (!selectedCategory) {
      return <CategorySelect selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} setSelectedCategory={setSelectedCategory} />
    }
    if (!selectedSubCategory && selectedCategory !== "kahvetatlı") {
      return (
        <SubCategorySelect
          selectedRegion={selectedRegion}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSelectedSubCategory={setSelectedSubCategory}
        />
      )
    }
    return (
      <Results
        key={[selectedRegion, selectedCategory, selectedSubCategory].join("/")}
        selectedRegion={selectedRegion}
        selectedCategory={selectedCategory}
        selectedSubCategory={selectedSubCategory}
        setSelectedCategory={setSelectedCategory}
        setSelectedSubCategory={setSelectedSubCategory}
      />
    )
  }

  return (
    <LanguageProvider>
      <div className="app">
        <Header onHome={reset} />
        <main className="shell app-main">
          <DiscoverySteps currentStep={currentStep} />
          {renderScreen()}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
