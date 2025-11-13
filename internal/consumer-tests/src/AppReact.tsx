import "@gyldendal/kobber-components-poc/css";
// import "@gyldendal/kobber-components-poc/css/card";
// import "@gyldendal/kobber-components-poc/css/ToggleButton";

import {
  Card,
  CardMedia,
  CardMediaLayer,
  CardMediaWrapper,
  CardTextBody,
  CardTextTitle,
  CardTextWrapper,
} from "@gyldendal/kobber-components-poc/react/card";
import { ToggleButton } from "@gyldendal/kobber-components-poc/react/ToggleButton";

export function AppReact() {
  const direction = "vertical";
  const api = {};

  return (
    <div>
      <ToggleButton initialState="active">Custom machine</ToggleButton>
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
          <CardMediaLayer>
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
          <CardMediaLayer>
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
            <a
              href="https://nrk.no"
              target="_blank"
              id="testing-a-tag"
              rel="noopener"
            >
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
          <CardMediaLayer>
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
          <CardMediaLayer>
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
