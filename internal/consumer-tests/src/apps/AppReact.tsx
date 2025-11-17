import {
  Card,
  CardMedia,
  CardMediaLayer,
  CardMediaWrapper,
  CardTextBody,
  CardTextTitle,
  CardTextWrapper,
} from "@gyldendal/kobber-components-poc/react/card";
import { Paper } from "@gyldendal/kobber-components-poc/react/paper";
import { ToggleButton } from "@gyldendal/kobber-components-poc/react/ToggleButton";
import { Badge, BadgeText } from "@gyldendal/kobber-components-poc/react/badge";

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
        <Paper>
          <CardMediaWrapper>
            <CardMediaLayer base={true}>
              <CardMedia>
                <img src="./shared/seksjonsteamet.png" />
              </CardMedia>
            </CardMediaLayer>
            <CardMediaLayer>
              <Badge>
                <BadgeText>React</BadgeText>
              </Badge>
            </CardMediaLayer>
          </CardMediaWrapper>
          <CardTextWrapper>
            <CardTextTitle>
              <a
                href="https://nrk.no"
                target="_blank"
                id="testing-a-tag"
                rel="noopener"
                style={{ all: "unset" }}
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
        </Paper>
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
              }}
            >
              <Badge>
                <BadgeText>World</BadgeText>
              </Badge>
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
              }}
            >
              <Badge>
                <BadgeText>Hello</BadgeText>
              </Badge>
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
