import "./App.css";

import TeerexApp from "./compoments/TeerexApp/TeerexApp";
import { SnackbarProvider } from "notistack";
function App() {
  return (
    <SnackbarProvider>
    <div>
    <TeerexApp/>
    </div>
    </SnackbarProvider>
    // <BrowserRouter>
    //   <div>
    //     <Routes>
    //     <Route path="/" element={<ProductPage />} />
            
    //       <Route path="/cart" element={<Cart />} />
            
    //    </Routes>
          
       
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
