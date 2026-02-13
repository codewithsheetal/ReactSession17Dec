import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './First'
import Second from './component/Myfile'
import Sec from './Sec'
import Conditional from './component/Conditional'
import JsxRule from './component/JsxRule'
import Component from './component/Component'
import Arrowcomp from './component/Arrowcomp'
import Event from './component/Event'
import StateExample from './component/StateExample'
import Form from './component/Form/Form'
import RadioButton from './component/Form/RadioButton'
import Checkbox from './component/Form/Checkbox'
import DropDown from './component/Form/DropDown'
import List from './component/List/List'
import SortProductandFilter from './component/List/SortProductandFilter'
import Parentprops from './props/passing props/Parentprops'
import ParentComp from './props/propsandrender/ParentComp'
import PropsParentco from './props/propschildren/PropsParentco'
import ParentDefaultprops from './props/propsdefault/ParentDefaultprops'
import InlineCSS from './CSSstyle/InlineCSS'
import CSSasObject from './CSSstyle/CSSasObject'
import Normalcss from './CSSstyle/Normalcss/Normalcss'
import ModuleCss from './CSSstyle/cssmodules/ModuleCss'
import DynamicCss from './CSSstyle/DynamicCss'
import Tailwindcss from './CSSstyle/Tailwindcss'
import RouteExample from './Routing/RouteExample'
import Dashboard from './Routing/PrivateRoute/Dashboard'
import NavigateButton from './Routing/useNavigate/NavigateButton'
import LazyLoading from './component/LazyLaoding/LazyLoading'

function App() {
  
  
  return (
    <>
    
    {/* <JsxRule/>
    <Conditional/> */}
    {/* <Component/> */}
    {/* <Event/> */}
    {/* <StateExample/> */}
    {/* <Form/> */}
    {/* <RadioButton/> */}

    {/* <Checkbox/> */}

    {/* <DropDown/> */}

    {/* <List/> */}

    {/* <SortProductandFilter/> */}

    {/* <Parentprops/> */}
    {/* <ParentComp/> */}

     {/* <PropsParentco/> */}

     {/* <ParentDefaultprops/> */}

     {/* css  */}
     {/* <InlineCSS/> */}
     {/* <CSSasObject/> */}
     {/* <Normalcss/> */}
     {/* <ModuleCss/> */}

     {/* <DynamicCss/> */}

     {/* <Tailwindcss/> */}

     <RouteExample/>
     {/* <NavigateButton/> */}
     {/* <LazyLoading/> */}
    </>
  )
}

export default App
