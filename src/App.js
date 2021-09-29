import "./App.scss";
import Button from "@material-ui/core/Button";
import { useState } from "react";
const App = () => {
  const [value, setValue] = useState("");

  const handleVal = (event) => {
    const val = event.currentTarget.value;
    value.length < 16 && setValue((prevVal) => prevVal + val);
  };

  const clearVal = () => {
    setValue("");
  };

  const deleteVal = () => {
    if (value) {
      const val = value.slice(0, -1);
      setValue(val);
    }
  };

  const calculate = () => {
    if (value) {
      try {
        // eslint-disable-next-line
        const val = eval(value);
        setValue(val.toString());
      } catch (e) {
        if (e instanceof SyntaxError) {
          setValue("Err");
        }
      }
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="input-container">
          <input type="text" value={value} disabled />
        </div>
        <div className="button-container">
          <div className="left-buttons">
            <Button color="inherit" onClick={clearVal}>
              C
            </Button>
            <Button color="inherit" onClick={handleVal} value="%">
              %
            </Button>
            <Button color="inherit" onClick={deleteVal}>
              Del
            </Button>
            <Button color="inherit" onClick={handleVal} value="9">
              9
            </Button>
            <Button color="inherit" onClick={handleVal} value="8">
              8
            </Button>
            <Button color="inherit" onClick={handleVal} value="7">
              7
            </Button>
            <Button color="inherit" onClick={handleVal} value="6">
              6
            </Button>
            <Button color="inherit" onClick={handleVal} value="5">
              5
            </Button>
            <Button color="inherit" onClick={handleVal} value="4">
              4
            </Button>
            <Button color="inherit" onClick={handleVal} value="3">
              3
            </Button>
            <Button color="inherit" onClick={handleVal} value="2">
              2
            </Button>
            <Button color="inherit" onClick={handleVal} value="1">
              1
            </Button>
            <Button color="inherit" onClick={handleVal} value="00">
              00
            </Button>
            <Button color="inherit" onClick={handleVal} value="0">
              0
            </Button>
            <Button color="inherit" onClick={handleVal} value=".">
              .
            </Button>
          </div>
          <div className="right-buttons">
            <Button color="inherit" onClick={handleVal} value="/">
              /
            </Button>
            <Button color="inherit" onClick={handleVal} value="*">
              *
            </Button>
            <Button color="inherit" onClick={handleVal} value="-">
              -
            </Button>
            <Button color="inherit" onClick={handleVal} value="+">
              +
            </Button>
            <Button color="inherit" onClick={calculate}>
              =
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
