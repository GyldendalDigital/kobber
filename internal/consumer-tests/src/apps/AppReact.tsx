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
import {
  Button,
  ButtonText,
  ButtonIcon,
} from "@gyldendal/kobber-components-poc/react/button";
import { init as initIcons } from "@gyldendal/kobber-icons/init";
import { ArrowRight } from "@gyldendal/kobber-icons/react";
initIcons();

export function AppReact() {
  const direction = "vertical";
  const api = {};

  return (
    <div>
      <ToggleButton initialState="active">Custom machine</ToggleButton>

      <br />
      <br />

      <div
        style={{
          display: "flex",
          gap: "0.5em",
          width: "420px",
          flexWrap: "wrap",
        }}
      >
        {/* ERROR */}
        <Button
          purpose="informative"
          collection="neutral"
          level="secondary"
          tone="tone-a"
        >
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>ERROR</ButtonText>
        </Button>

        {/* BRAND */}
        <Button
          //disabled={true}
          collection="brand"
          level="primary"
          tone="tone-a"
        >
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Brand</ButtonText>
        </Button>
        <Button collection="brand" level="secondary" tone="tone-a">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Brand</ButtonText>
        </Button>
        <Button collection="brand" level="secondary" tone="tone-b">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Brand</ButtonText>
        </Button>
        <Button collection="brand" level="tertiary" tone="tone-a">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Brand</ButtonText>
        </Button>
        <Button collection="brand" level="tertiary" tone="tone-b">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Brand</ButtonText>
        </Button>

        {/* RETTSDATA */}
        <Button collection="rettsdata" level="primary" tone="tone-a">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Rettsdata</ButtonText>
        </Button>
        <Button collection="rettsdata" level="secondary" tone="tone-a">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Rettsdata</ButtonText>
        </Button>
        <Button collection="rettsdata" level="secondary" tone="tone-b">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Rettsdata</ButtonText>
        </Button>
        <Button collection="rettsdata" level="tertiary" tone="tone-a">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Rettsdata</ButtonText>
        </Button>
        <Button collection="rettsdata" level="tertiary" tone="tone-b">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Rettsdata</ButtonText>
        </Button>

        {/* NEUTRAL */}
        <Button collection="neutral" level="primary" tone="tone-a">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Neutral</ButtonText>
        </Button>
        <Button collection="neutral" level="secondary" tone="tone-b">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Neutral</ButtonText>
        </Button>
        <Button collection="neutral" level="tertiary" tone="tone-b">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Neutral</ButtonText>
        </Button>

        {/* SUCCESS */}
        <Button purpose="success" tone="tone-a">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Success</ButtonText>
        </Button>
        <Button purpose="success" tone="tone-b">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Success</ButtonText>
        </Button>

        {/* INFORMATIVE */}
        <Button purpose="informative" tone="tone-a">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Informative</ButtonText>
        </Button>
        <Button purpose="informative" tone="tone-b">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Informative</ButtonText>
        </Button>

        {/* WARNING */}
        <Button purpose="warning" tone="tone-a">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Warning</ButtonText>
        </Button>
        <Button purpose="warning" tone="tone-b">
          <ButtonIcon>
            <ArrowRight size="large" />
          </ButtonIcon>
          <ButtonText>Warning</ButtonText>
        </Button>
      </div>

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
      </Card>
      <br />
      <Card
        disabled={true}
        element="button"
        direction={direction}
        aria-labelledby="testing-a-label"
        onClick={() => console.log("hello")}
      >
        <Paper>
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
        </Paper>
      </Card>
    </div>
  );
}
