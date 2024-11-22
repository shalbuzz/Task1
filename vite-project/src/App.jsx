import React, { Component } from "react";
import Wine from "./Wine";

class App extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Wine
          title="Cabernet Sauvignon"
          description="Rich and full-bodied red wine with notes of blackcurrant and oak."
          rating={4.5}
        />
        <Wine
          title="Chardonnay"
          description="Crisp and refreshing white wine with hints of citrus and vanilla."
          rating={4.0}
        />
        <Wine
          title="Merlot"
          description="Smooth red wine with flavors of plum and dark chocolate."
          rating={4.2}
        />
        <Wine
          title="Riesling"
          description="Sweet and aromatic white wine with floral and fruity notes."
          rating={4.8}
        />
      </div>
    );
  }
}

export default App;
