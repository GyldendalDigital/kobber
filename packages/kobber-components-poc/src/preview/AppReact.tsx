import { useId } from "react";
import { Select } from "../components/react/select/Select";
import { ToggleButton } from "../components/toggleButton/ToggleButton";
import { getSelectProps } from "./shared/props";
import {
  Card,
  CardMedia,
  CardMediaWrapper,
  CardMediaLayer,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
} from "../components/card/card.react";

export function AppReact() {
  const id = useId();
  const direction = "vertical";
  let api = {};

  return (
    <div>
      <ToggleButton initialState="active">Custom machine</ToggleButton>
      <br />
      <br />
      <Select {...getSelectProps(id)} />
      <br />
      <br />
      <Card
        element="nav"
        direction={direction}
        onClick={() => {
          //document.getElementById("testing-a-tag")?.click();
          // console.log(api.connected.active);
        }}
      >
        <CardMediaWrapper>
          <CardMediaLayer direction={direction}>
            {/* Using style here, can be className */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                zIndex: 1,
                color: "red",
                width: "100%",
                height: "100%",
                outline: "2px solid red",
              }}
            >
              TEST
            </div>
          </CardMediaLayer>
          <CardMediaLayer direction={direction}>
            {/* Using style here, can be className */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                zIndex: 1,
                color: "blue",
                width: "100%",
                height: "100%",
                outline: "1px solid blue",
              }}
            >
              KNAPP
            </div>
          </CardMediaLayer>
          <CardMediaLayer base={true}>
            <CardMedia>
              <img src="./shared/seksjonsteamet.png" />
            </CardMedia>
          </CardMediaLayer>
        </CardMediaWrapper>
        <CardTextWrapper>
          <CardTextTitle>
            <a href="https://nrk.no" target="_blank" id="testing-a-tag">
              This is content inside a card!
            </a>
          </CardTextTitle>
          <CardTextBody>
            <div>
              It grows in a specific direction. Here is a lot of additional
              content to see how things break
            </div>
          </CardTextBody>
        </CardTextWrapper>
      </Card>
      <br />
      <Card
        element="button"
        direction={direction}
        aria-labelledby="testing-a-label"
        onClick={() => console.log("hello")}
      >
        <CardMediaWrapper>
          <CardMediaLayer direction={direction}>
            {/* Using style here, can be className */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                zIndex: 1,
                color: "red",
                width: "100%",
                height: "100%",
                outline: "2px solid red",
              }}
            >
              TEST
            </div>
          </CardMediaLayer>
          <CardMediaLayer direction={direction}>
            {/* Using style here, can be className */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                zIndex: 1,
                color: "blue",
                width: "100%",
                height: "100%",
                outline: "1px solid blue",
              }}
            >
              KNAPP
            </div>
          </CardMediaLayer>
          <CardMediaLayer base={true}>
            <CardMedia>
              <img src="./shared/seksjonsteamet.png" />
            </CardMedia>
          </CardMediaLayer>
        </CardMediaWrapper>
        <CardTextWrapper>
          <CardTextTitle api={api}>
            <label id="testing-a-label">This is content inside a card!</label>
          </CardTextTitle>
          <CardTextBody>
            <div>
              It grows in a specific direction. Here is a lot of additional
              content to see how things break
            </div>
          </CardTextBody>
        </CardTextWrapper>
      </Card>
    </div>
  );
}
